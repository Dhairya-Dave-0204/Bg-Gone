import { Webhook } from "svix";
import userModel from "../models/userModel.js";
import razorpay from "razorpay";
import transactionModel from "../models/transactionModel.js";

// API CONTROLLER FUNCTION TO MANAGE CLERK USER WITH DATABASE
// http://localhost:4000/api/user/webhooks
const clerkWebhooks = async (req, res) => {
  try {
    // CREATE A SVIX INSTANCE WITH CLERK WEBHOOK SECERET
    const webhook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    await webhook.verify(JSON.stringify(req.body), {
      // Verify the signature of the incoming webhook
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    });

    const { data, type } = req.body;

    switch (type) {
      case "user.created": {
        const userData = {
          clerkId: data.id,
          email: data.email_addresses[0].email_address,
          firstName: data.first_name,
          lastName: data.last_name,
          photo: data.image_url,
        };

        await userModel.create(userData);
        res.json({});
        break;
      }
      case "user.updated": {
        const userData = {
          email: data.email_addresses[0].email_address,
          firstName: data.first_name,
          lastName: data.last_name,
          photo: data.image_url,
        };

        await userModel.findOneAndUpdate({ clerkId: data.id }, userData);
        res.json({});
        break;
      }
      case "user.deleted": {
        await userModel.findOneAndDelete({ clerkId: data.id });
        res.json({});
        break;
      }

      default:
        break;
    }
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

// API CONTROLLER FUNCTION TO GET USER AVAILABLE CREDITS DATA
const userCredits = async (req, res) => {
  try {
    const { clerkId } = req.body;

    const userData = await userModel.findOne({ clerkId });
    res.json({ success: true, credits: userData.creditBalance });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

//  \PAYMENT GATEWAY INITIALIZATION
const razorpayInstance = new razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

// API TO MAKE PAYMENT FOR CREDITS
const paymentRazorpay = async (req, res) => {
  try {
    const { clerkId, planId } = req.body;
    const userData = await userModel.findOne({ clerkId });

    if (!userData || !planId) {
      return res.json({ success: false, message: "Invalid user or plan" });
    }

    let credits, plan, amount, date;

    switch (planId) {
      case "Basic":
        plan = "Basic";
        credits = 100;
        amount = 10;
        break;
      case "Advanced":
        plan = "Basic";
        credits = 500;
        amount = 50;
        break;
      case "Business":
        plan = "Basic";
        credits = 1200;
        amount = 100;
        break;
      default:
        break;
    }
    date = Date.now();

    // CREATING TRANSACTION
    const transactionData = {
      clerkId,
      plan,
      credits,
      amount,
      date,
    };

    const newTransaction = await transactionModel.create(transactionData);

    const options = {
      amount: amount * 100,
      currency: process.env.CURRENCY,
      receipt: newTransaction._id,
    };

    await razorpayInstance.orders.create(options, (error, order) => {
      if (error) {
        return res.json({ success: false, message: "Error creating order" });
      }
      res.json({ success: true, order });
    });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

// API CONTROLLER FUNCTION TO VERIFY RAZORPAY PAYMENT
const verifyRazorpayPayment = async (req, res) => {
  try {
    const { razorpay_order_id } = req.body
    const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id)

    if (orderInfo.status === "paid") {
      const transactionData = await transactionModel.findById(orderInfo.receipt)
      if (transactionData.payment) {
        return res.json({ success: false, message: "Payment failed" })
      }

      // ADDING CREDITS IN USER DATA
      const userData = await userModel.findOne({ clerkId: transactionData.clerkId })
      const creditBalance = userData.creditBalance + transactionData.credits
      await userModel.findByIdAndUpdate(userData._id, {creditBalance})

      // MAKING THE PAYMENT TRUE
      await transactionModel.findByIdAndUpdate(transactionData._id, {payment: true})
      res.json({ success: true, message: "Payment successful and credits added" })
    }
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
}

export { clerkWebhooks, userCredits, paymentRazorpay, verifyRazorpayPayment };

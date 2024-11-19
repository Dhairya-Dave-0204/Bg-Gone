import { useAuth, useClerk, useUser } from "@clerk/clerk-react";
import { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [credit, setCredit] = useState(false);
  const [image, setImage] = useState(false);
  const [resultImage, setResultImage] = useState(false);

  const navigate = useNavigate()

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const { getToken } = useAuth();
  const { isSignedIn } = useUser()
  const { openSignIn } = useClerk()

  const loadCreditsData = async () => {
    try {
      const token = await getToken();
      const { data } = await axios.get(backendUrl + "/api/user/credits", {
        headers: { token },
      });

      if (data.success) {
        setCredit(data.credits);
        console.log(data.credits);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message); 
    }
  };

  const removeBg = async (image) => {
    try {
        if (!isSignedIn) {
          return openSignIn()
        }
        setImage(image)
        setResultImage(false)

        navigate("/result")

        const token = await getToken()

        const fromdata = new FormData()
        image && fromdata.append("image", image)
        const { data } = await axios.post(backendUrl + "/api/image/remove-bg", fromdata, {headers: {token}})

        if (data.success) {
          setResultImage(data.resultImage)
          data.creditBalance && setCredit(data.creditBalance)
        } else {
          toast.error(data.message)
          data.creditBalance && setCredit(data.creditBalance)
          if (data.creditBalance === 0) {
            navigate("/buy")
          }
        }
    } catch (error) {
        console.error(error);
      toast.error(error.message);
    }
  }

  const value = {
    credit,
    setCredit,
    loadCreditsData,
    backendUrl,
    image,
    setImage,
    removeBg,
    resultImage,
    setResultImage,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;

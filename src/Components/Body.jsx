import { useNavigate } from "react-router";
import { useContext, useEffect } from "react";
import { LoginContext } from "../Context/UserContextProvider";
import Browse from "./Browse";
import Home from "./Home";



export default function Body(){

  const { currentUser } = useContext(LoginContext);
  const navigate = useNavigate();

  useEffect(() =>{
    if (currentUser !== null){
      navigate(currentUser ? "/browse" : "/");
    }
  }, [currentUser, navigate])

    return (
      <>
        {
          currentUser ? <Browse /> : <Home />
        }
      </>
    )
}

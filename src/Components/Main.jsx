import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../Utils/firebase";
import { useDispatch } from "react-redux";
import { userActions } from "../store/userSlice"

export default function Main(){
  const dispatch = useDispatch();

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/browse",
      element: <Browse />
    },
  ]);

  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      if (user){
        const {uid, email, displayName} = user;
        dispatch(userActions.addUser({uid: uid, email: email, displayName: displayName}));
      }
      else{
        dispatch(userActions.removeUser());
      }
    })
  }, [])

  return(
    <RouterProvider router={routes}/>
  )
      
}
import { Provider } from "react-redux";
import Main from "./Components/Main";
import netflixStore from "./store/Redux_store"


export default function App(){
  return(
    <>
      <Provider store={netflixStore}>
        <Main />
      </Provider>
    </>
  )
}
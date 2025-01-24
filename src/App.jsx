import Body from "./Components/Body";
import UserContext from "./Context/UserContext";


function App() {

  return (
    <UserContext>
      <Body />
    </UserContext>
    
  )
}

export default App

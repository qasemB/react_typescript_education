import { Link } from "react-router-dom"
import ButtonComponent from "./components/ButtonComponent"

function App() {

  return (
    <>
      <ButtonComponent as={Link} to={"sfdsds"}/>
    </>
  )
}

export default App

import { useContext, useEffect } from "react"
import { UserContext } from "./context/UserContext"
import ConfirmButton from "./components/ConfirmButton"

function App() {

  const { setUserInfo } = useContext(UserContext)

  useEffect(() => {

    setUserInfo({
      name: "qasem",
      family: "bassaki",
      age: 36
    })

  }, [])

  return (
    <>
      <ConfirmButton  />
    </>
  )
}

export default App

import { useContext, useEffect } from "react"
import { UserContext } from "./context/UserContext"
import UserInfoComponent from "./components/UserInfoComponent"

function App() {

  const context = useContext(UserContext)

  useEffect(() => {

    context?.setUserInfo({
      name: "qasem",
      family: "bassaki",
      age: 36
    })

  }, [])

  return (
    <>
      <UserInfoComponent />
    </>
  )
}

export default App

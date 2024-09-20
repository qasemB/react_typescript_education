import { useContext, useEffect } from "react"
import { UserContext } from "./context/UserContext"
import ClassComponent from "./components/ClassComponent"

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
      <ClassComponent  />
    </>
  )
}

export default App

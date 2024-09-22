import Info from "./components/Info"

function App() {

  return (
    <>
      {/* <Info name="qasem" skills={["javascript", "react.js", "next.js", "typescript"]}/>
      <Info name="qasem" skills={[1,2,3,4]}/> */}
      <Info name="qasem" skills={[
        { id: 5,name: "javascript", title: "جاوااسکریپت"},
      ]}/>
    </>
  )
}

export default App

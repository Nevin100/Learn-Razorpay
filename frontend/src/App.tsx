import { Button } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"

const App = () => {
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default App

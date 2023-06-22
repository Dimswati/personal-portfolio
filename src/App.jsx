import Home from "./pages"
import { RouterProvider } from "react-router"
import { createBrowserRouter } from "react-router-dom"

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App

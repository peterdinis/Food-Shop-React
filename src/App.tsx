import { Routes, Route } from "react-router-dom"
import Navbar from "./components/shared/Navbar"
import { LandingPage } from "./pages"

function App() {
  return (
    <>
     <Navbar />
     <Routes>
      <Route path="/" element={<LandingPage />} />
     </Routes>
    </>
  )
}

export default App

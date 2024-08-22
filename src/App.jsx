import Hero from "./Components/Hero"
import Highlight from "./Components/Highlight"
import Model from "./Components/Model"
import Navbar from "./Components/Navbar"



function App() {


  return (
    <main className="bg-black min-h-[100vh] ">
      <Navbar />
      <Hero />
      <Highlight />
      <Model/>
   </main>
  )
}

export default App

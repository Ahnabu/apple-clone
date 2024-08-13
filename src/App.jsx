import Hero from "./Components/Hero"
import Highlight from "./Components/Highlight"
import Navbar from "./Components/Navbar"



function App() {


  return (
    <main className="bg-black min-h-[100vh] ">
      <Navbar />
      <Hero />
      <Highlight/>
   </main>
  )
}

export default App

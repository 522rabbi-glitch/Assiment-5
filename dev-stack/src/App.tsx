import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechCard from './components/TechCard'
import data from './data.json'
import type { Tech } from './types'
import Footer from './components/Footer'

const techList = data as Tech[]

function App() {
  const [stack, setStack] = useState<Tech[]>([])

  function handleAdd(tech: Tech) {
    const alreadyAdded = stack.some((item) => item.id === tech.id)
    if (!alreadyAdded) {
      setStack([...stack, tech])
    }
  }

  return (
    <>
      <Navbar />
      <Hero />

      <section className="container mx-auto px-10 py-10">
        <h2 className="text-3xl font-bold mb-2">
          Explore the <span className="text-pink-500">Technologies</span>
        </h2>
        <p className="text-gray-600 mb-8">
          Pick one technology per category to build your ideal stack.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {techList.map((tech) => (
            <TechCard
          key={tech.id}
          tech={tech}
          onAdd={handleAdd}
          isAdded={stack.some(
          (item) => item.id === tech.id
        )}
         />


          ))}
        </div>
      </section>

      <Footer/>
    </>
  )
}

export default App
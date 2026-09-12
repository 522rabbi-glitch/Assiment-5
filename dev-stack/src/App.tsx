import { useState } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechCard from './components/TechCard'
import StackSidebar from './components/StackSidebar'
import Footer from './components/Footer'
import data from './data.json'
import type { Tech } from './types'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const techList = data as Tech[]

function App() {
  const [stack, setStack] = useState<Tech[]>([])

  function handleAdd(tech: Tech) {
    const alreadyAdded = stack.some(
      (item) => item.id === tech.id
    )

    if (alreadyAdded) {
      toast.warning(`${tech.name} is already added!`)
      return
    }

    setStack([...stack, tech])
    toast.success(`${tech.name} added to your stack!`)
  }

  function handleRemove(id: number) {
    const removedTech = stack.find(
      (item) => item.id === id
    )

    setStack(
      stack.filter((item) => item.id !== id)
    )

    if (removedTech) {
      toast.info(`${removedTech.name} removed!`)
    }
  }

  function handleRemoveAll() {
    if (stack.length === 0) {
      toast.warning('Your stack is already empty!')
      return
    }

    setStack([])
    toast.info('All technologies removed!')
  }

  return (
    <>
      <Navbar />

      <Hero />

      <main className="container mx-auto px-4 md:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <section className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">
                Explore the{' '}
                <span className="text-pink-500">
                  Technologies
                </span>
              </h2>

              <p className="text-gray-600">
                Pick technologies to build your ideal stack.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

          <StackSidebar
            stack={stack}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      </main>

      <Footer />

   <ToastContainer
  position="top-right"
  autoClose={2000}
  theme="light"
/>
    
    </>
  )
}

export default App
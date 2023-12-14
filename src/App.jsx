import {Navbar, About, Contact, Experience, Hero, Tech, Works} from './components'


function App() {

  return (
      <div className=' relative z-0 bg-primary'>

          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Tech />
          <Works />
          <div className='relative z-0'>

          </div>
      </div>

  )
}

export default App

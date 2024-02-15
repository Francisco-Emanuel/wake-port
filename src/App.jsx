import './App.css'
import {  Header, How, Jobs, Slider, Contact, Footer } from './containers'

function App() {

  return (
    <>
      <div className="container">
        <Header />
        <How />
        <Slider />
        <Jobs />
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default App

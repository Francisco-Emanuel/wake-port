import './App.css'
import {  Header, How, Jobs, Slider, Contact, Footer, ContactP } from './containers'

function App() {

  return (
    <>
      <div className="container" id="htmx">
        <Header />
        <How />
        <Slider />
        <Jobs />
        <Contact />
      </div>
      <ContactP />
      <Footer />
    </>
  )
}

export default App

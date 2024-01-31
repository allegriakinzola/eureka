import { Service } from './sections/service';
import { Home } from './sections/home';
import { Navbare } from './sections/navbare';
import { Cardslide } from './sections/cardslide';
import './styles/style.scss';
import { Form } from './sections/form';
import { Footer } from './sections/footer';

function App() {
  return (
    <div className="App">
      <div>
        <Navbare/>
      </div>
      <div id="home">
      <Home/>
      </div>
      <div>
      <Cardslide/>
      </div>
      <div id="action">
      <Service/>
      </div>
      <div id="formulaire">
      <Form/>
      </div>
      <div id="footer" >
      <Footer/>
      </div>
    </div>
  )
}

export default App

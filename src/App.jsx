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
      <Navbare/>
      <Home id="home"/>
      <Cardslide/>
      <Service/>
      <Form id="formulaire"/>
      <Footer id="footer" />
    </div>
  )
}

export default App

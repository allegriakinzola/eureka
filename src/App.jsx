import { Service } from './sections/service';
import { Home } from './sections/home';
import { Navbare } from './sections/navbare';
import { Cardslide } from './sections/cardslide';
import './styles/style.scss';
import { Form } from './sections/form';

function App() {
  return (
    <div className="App">
      <Navbare/>
      <Home/>
      <Cardslide/>
      <Service/>
      <Form/>
    </div>
  )
}

export default App

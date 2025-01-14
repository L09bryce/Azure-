import reactLogo from './assets/react.svg'
// Import all of Bootstrap's CSS
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Components/Navbar'
import { Home } from './Components/Home';
import Article from './Components/Article';


function App(){
  return (
    <>
      <Navbar />
      <Home />
      <Article />
    </>
  )

}

export default App

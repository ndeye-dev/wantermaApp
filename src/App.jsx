import './App.css'
import Contenu from './composants/Contenu';
import Footer from './composants/Footer';
import Navbar from './composants/Navbar'

function App() {
  return (
    <div className=''>
      <div>
      <Navbar />

      <Contenu />

      <Footer />
      </div>
    </div>
  )
}

export default App;


import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './Pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Home />
    </div>
  )
}

export default App 

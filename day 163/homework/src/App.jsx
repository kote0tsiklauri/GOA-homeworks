import { ThemeProvider } from "./context/ThemeContext";
import { HomePage } from './components/homePage'
import './App.css'

function App() {

  return (
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  )
}

export default App

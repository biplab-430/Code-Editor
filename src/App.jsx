
import './App.css'
import Home from './Component/Home'
import DataProvider from './Context/DataProvider'
import LocalStorage from './Hooks/LocalStorage'
function App() {
 

  return (
    <>
    <DataProvider>
     <Home/>
    </DataProvider>
    </>
  )
}

export default App

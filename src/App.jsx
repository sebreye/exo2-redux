
import { Provider } from 'react-redux'
import './App.css'
import Form from './components/Form/Form'
import Présentation from './components/Présentation/Présentation'
import store from './Store'


function App() {

  return (
    <div className="App">
      <Provider store={store}>
      <Form/>
      <Présentation/>
      </Provider>
    </div>
  )
}

export default App

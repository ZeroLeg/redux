import './App.css'
import {store, buy_pokemon_action, return_pokemon_action, buy_yosi_action, return_yosi_action} from './store';


function App() {
  console.log("Estado inicial", store.getState());

  //Nos suscribimos al store para saber su estado actual
  store.subscribe(()=> {
    console.log("Cambio de estado:", store.getState());
  })

  // store.dispatch(buy_pokemon_action(3))
  // store.dispatch(return_pokemon_action(2));

  // store.dispatch(buy_yosi_action(5))
  // store.dispatch(return_yosi_action(2));

  return (
    <div className="App">
     
    </div>
  )
}

export default App

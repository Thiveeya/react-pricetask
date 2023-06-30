import React from 'react'
import ReactDOM from 'react-dom/client'

import { createStore } from 'redux'
const counterReducer=(state=0,action)=>
{
   switch(action.type){
    case'good':
    return state +1
    case 'ok':
        return state+1
        case 'bad':
        return state+1
        case 'resetstats':
            return state=0
            default:
                return state
   }
}
const  store = createStore(counterReducer)
const App = () => {
    return (
        <div>
      <div>
        <div>
          {store.getState()}
        </div>
        <button 
          onClick={e => store.dispatch({ type: 'good' })}
        >
          good
        </button>
        <button
          onClick={e => store.dispatch({ type: 'ok' })}
          >
            
            ok
      </button>
      <button 
        onClick={e => store.dispatch({ type: 'bad' })}
      >
        bad
      </button>

      <button 
        onClick={e => store.dispatch({ type: 'resetstats' })}
      >
        resetstats
      </button>
    </div>
    <div>
        good{store.good}
    </div>
    </div>
  )
}
    
// console.log(store.getstate())

const root = ReactDOM.createRoot(document.getElementById('root'))

const renderApp = () => {
  root.render(<App />)
}

renderApp()
store.subscribe(renderApp)

  



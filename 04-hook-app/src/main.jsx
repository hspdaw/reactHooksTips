import React from 'react'
import ReactDOM from 'react-dom/client'
import { MultiplesCustomHooks } from './03-examples/MultiplesCustomHooks'
/* import FormWithCustomHook from './02-useEffect/FormWithCustomHook' */

/* import SimpleForm from './02-useEffect/SimpleForm'
import CounterApp from './01-useState/CounterApp'
import CounterWithCustomHook from './01-useState/CounterWithCustomHook'
import { HooksApp } from './HooksApp' */

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
 /* <React.StrictMode> */
      /*<CounterWithCustomHook /> 
      <SimpleForm/>
      <FormWithCustomHook/>*/
     <MultiplesCustomHooks />
 /* </React.StrictMode>, */
)

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import routes from './Routes/Route'


export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            {/* array.map(function(currentValue, index, arr), thisValue) */}
            {
                routes.map(function(currentValue,index,arr){
                    return ( <Route path={currentValue.path} element={currentValue.element}/> )
                })
            }

        </Routes>
    </BrowserRouter>
  )
}

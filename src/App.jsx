import { useState } from 'react'
import './App.css'
import Cat from './component/Cat'

function App() {

  const data=Cat()
  

  return (
    <><div>
    <h1 className='text-center text-white text-4xl mt-10 mb-4'>FIND FACT USING API </h1>
      <div className='flex justify-center '>
     <div className='container w-70 mt-5 bg-slate-300 border-red-300 rounded-lg'>
      <h1 className='text-center text-4xl mb-5'>Fact about cat</h1>

     <h1 className='  h-auto px-4  py-4 bg-white text-black border-2 border-black rounded-lg mb-2 text-center'>FACT : {data.fact}</h1>
     <h1 className='  h-auto px-4  py-4 bg-white text-black border-2 border-black rounded-lg mb-2 text-center'>length : {data.length}</h1>
     </div>
     </div>
     </div>
     
    </>
  )
}

export default App

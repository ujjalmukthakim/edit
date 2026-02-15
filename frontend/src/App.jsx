// import { useState } from 'react'

import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [bgColor,setBgColor]=useState('')

  const color= 'border border-amber-400'

  return (
    <div>

      {/* this is view section  */}

          <div className='m-25 flex gap-4'>
      {/* this is first page */}

      <div className={` mt-2 h-100 w-150 rounded-lg ${color} ${bgColor} `}>

      </div>

      {/* this is second page */}

      <div className={` mt-2 h-100 w-150 rounded-lg ${color} ${bgColor} `}>



      </div>
      




    </div>



    {/* this is edit section  */}
    <div>
      <p className='bg-blue-500 text-white px-2 py-4 w-60 mx-2 mb-2 rounded-md'>Change Background Colour</p>
      <div className='mx-2 border border-blue-700 flex '>


      <div>

      <p className='h-5 w-5 m-2 bg-amber-200 hover:border border-blue-700' onClick={()=>setBgColor('bg-amber-200')}></p>
      <p className='h-5 w-5 m-2 bg-blue-200 hover:border border-blue-700' onClick={()=>setBgColor('bg-blue-200')}></p>
      </div>
      <div>

      <p className='h-5 w-5 m-2 bg-amber-300 hover:border border-blue-700' onClick={()=>setBgColor('bg-amber-300')}></p>
      <p className='h-5 w-5 m-2 bg-blue-300 hover:border border-blue-700' onClick={()=>setBgColor('bg-blue-300')}></p>
      </div>
  
        <div>

      <p className='h-5 w-5 m-2 bg-black hover:border border-blue-700' onClick={()=>setBgColor('bg-black')}></p>
      <p className='h-5 w-5 m-2 bg-white border boder-black hover:border border-blue-700' onClick={()=>setBgColor('bg-white-300')}></p>
      </div>
      
      </div>
    </div>
    





    </div>

  )
}

export default App

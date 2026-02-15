// import { useState } from 'react'

import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  const color= 'border border-amber-400'

  return (
    <div>

      {/* this is view section  */}

          <div className='m-25 flex gap-4'>
      {/* this is first page */}

      <div className={` mt-2 h-100 w-150 rounded-lg ${color} `}>

      </div>

      {/* this is second page */}

      <div className={` mt-2 h-100 w-150 rounded-lg ${color} `}>



      </div>
      




    </div>



    {/* this is edit section  */}
    <div>
      <p>this is edit section</p>
    </div>
    





    </div>

  )
}

export default App

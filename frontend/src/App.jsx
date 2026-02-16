import { useState } from 'react'
import './App.css'

function App() {
  const [bgColor, setBgColor] = useState('bg-white')
  const color = 'border-2 border-amber-400 shadow-xl' // Added shadow for "nice" look

  return (
    <div className='min-h-screen bg-slate-50'> {/* Light background for contrast */}
      
      {/* 1. STICKY VIEW SECTION */}
      {/* Sticky is better than Fixed here; it stays at top but doesn't overlap content */}
      <div className='sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b p-10 flex justify-center gap-8'>
        {/* Changed h-100 to h-[400px] and w-150 to w-[300px] for standard rendering */}
        <div className={`h-[300px] w-[500px] rounded-xl transition-colors duration-300 ${color} ${bgColor}`}></div>
        <div className={`h-[300px] w-[500px] rounded-xl transition-colors duration-300 ${color} ${bgColor}`}></div>
      </div>

      {/* 2. EDIT SECTION */}
      <div className='max-w-2xl mx-auto p-10 space-y-6'>
        <p className='bg-blue-600 text-white font-semibold px-6 py-3 w-max rounded-full shadow-lg'>
          Change Background Colour
        </p>
        
        <div className='p-6 bg-white border border-blue-200 rounded-2xl shadow-sm flex gap-4'>
          {/* Column 1 */}
          <div className='space-y-4'>
            <div className='h-10 w-10 bg-amber-200 cursor-pointer rounded-full hover:scale-110 transition-transform border-2 border-transparent hover:border-blue-700' onClick={()=>setBgColor('bg-amber-200')}></div>
            <div className='h-10 w-10 bg-blue-200 cursor-pointer rounded-full hover:scale-110 transition-transform border-2 border-transparent hover:border-blue-700' onClick={()=>setBgColor('bg-blue-200')}></div>
          </div>
          {/* Column 2 */}
          <div className='space-y-4'>
            <div className='h-10 w-10 bg-amber-300 cursor-pointer rounded-full hover:scale-110 transition-transform border-2 border-transparent hover:border-blue-700' onClick={()=>setBgColor('bg-amber-300')}></div>
            <div className='h-10 w-10 bg-blue-300 cursor-pointer rounded-full hover:scale-110 transition-transform border-2 border-transparent hover:border-blue-700' onClick={()=>setBgColor('bg-blue-300')}></div>
          </div>
          {/* Column 3 */}
          <div className='space-y-4'>
            <div className='h-10 w-10 bg-black cursor-pointer rounded-full hover:scale-110 transition-transform border-2 border-transparent hover:border-blue-700' onClick={()=>setBgColor('bg-black')}></div>
            <div className='h-10 w-10 bg-white cursor-pointer rounded-full hover:scale-110 transition-transform border-2 border-black hover:border-blue-700' onClick={()=>setBgColor('bg-white')}></div>
          </div>
        </div>

        {/* Dummy content to ensure you can scroll and see the "fixed" effect */}
        <div className='h-screen bg-slate-100 rounded-3xl p-10 border-2 border-dashed border-slate-300 flex items-center justify-center'>
          <p className='text-slate-400 font-medium'>Extra editing options will go here (Scroll test)</p>
        </div>
      </div>
    </div>
  )
}

export default App

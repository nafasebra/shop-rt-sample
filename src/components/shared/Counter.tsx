import { useState } from 'react'

function Counter() {
  const [counter, setCounter] = useState(0);

  const handleCounter = (type: "inc" | "dec") => () => {
    if(type === "inc") {
      setCounter(prev => {
        return prev + 1
      })
      } else {
        setCounter(prev => {
          return prev - 1
        })
    }
  }

  return (
    <div className='flex items-center gap-3'>
      <button className='flex items-center justify-center w-6 h-6 bg-slate-800 text-white font-bold' onClick={handleCounter('dec')}>-</button>
      <p className='w-20 text-center'>{counter}</p>
      <button className='flex items-center justify-center w-6 h-6 bg-slate-800 text-white font-bold' onClick={handleCounter('inc')}>+</button>
    </div>
  )
}

export default Counter
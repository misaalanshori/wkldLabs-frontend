import { useState } from 'preact/hooks'
import './app.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="w-full h-full flex flex-col items-center p-4">
        <button class="p-2 border rounded" onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
        <p class='text-center'>
          Edit <code>src/app.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

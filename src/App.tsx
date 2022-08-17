import { useState } from 'react'

function getRandomNumberBetween(
  min: number = 1, 
  max: number = 415595
) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function App() {
  const [number, setNumber] = useState(() => 
    getRandomNumberBetween()
  )

  const anotherOne = () => {
    setNumber(getRandomNumberBetween())
  }

  return (
    <div
      className="h-screen w-screen bg-black flex justify-center items-center"
    >
      <div 
        className='flex flex-col items-center justify-center gap-10'
        >
            <h1 
              className="text-white text-3xl font-bold text-center"
            >Your lucky number is:</h1>
            <a 
              href={`https://nhentai.net/g/${number}`}
              target="_blank"
              className='hover:underline text-white text-5xl font-bold text-center'
              title="Don't forget to use incognito mode bois ;)"
            >
              <h2
                className=''
              >
                {number}
              </h2>
            </a>
            <button 
              onClick={anotherOne}
              className="hover:scale-105 active:scale-95 ease-in-out duration-200 bg-pink text-white font-bold py-4 px-6 rounded text-3xl"
            >
                Another one!
            </button>
      </div>
    </div>
  )
}

export default App

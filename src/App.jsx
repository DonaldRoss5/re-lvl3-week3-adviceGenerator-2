import { useState } from 'react'
import AdviceCard from './components/AdviceCard.jsx'
import AdviceButton from './components/AdviceButton.jsx'
import sampleAdvice from './data/sampleAdvice.js'

// Pick a random index that differs from the current one so every click
// shows new advice.
function getNextIndex(currentIndex) {
  if (sampleAdvice.length < 2) return currentIndex
  let nextIndex = currentIndex
  while (nextIndex === currentIndex) {
    nextIndex = Math.floor(Math.random() * sampleAdvice.length)
  }
  return nextIndex
}

function App() {
  const [adviceIndex, setAdviceIndex] = useState(0)
  const { id, advice } = sampleAdvice[adviceIndex]

  function handleNewAdvice() {
    setAdviceIndex(getNextIndex(adviceIndex))
  }

  return (
    <main className="app">
      <h1 className="app__title">Advice Generator</h1>
      <AdviceCard id={id} advice={advice}>
        <AdviceButton onClick={handleNewAdvice} />
      </AdviceCard>
    </main>
  )
}

export default App

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
import React, { useState } from 'react';
import StartScreen from './components/StartScreen';
import Room from './components/Room';
import EndScreen from './components/EndScreen';

const rooms = [
  { id: 1, puzzle: 'מה צבע השמש?', solution: 'צהוב' },
  { id: 2, puzzle: 'כמה רגליים יש לעכביש?', solution: '8' },
  { id: 3, puzzle: 'איזה חודש הוא הראשון בשנה?', solution: 'ינואר' },
];

function App() {
  const [gameState, setGameState] = useState<'start' | 'playing' | 'end'>(
    'start'
  );
  const [currentRoom, setCurrentRoom] = useState(0);

  const handleStart = () => setGameState('playing');
  const handleNextRoom = () => {
    if (currentRoom + 1 < rooms.length) {
      setCurrentRoom(currentRoom + 1);
    } else {
      setGameState('end');
    }
  };

  const handleRestart = () => {
    setCurrentRoom(0);
    setGameState('start');
  };

  return (
    <div>
      {gameState === 'start' && <StartScreen onStart={handleStart} />}
      {gameState === 'playing' && (
        <Room
          roomId={rooms[currentRoom].id}
          puzzle={rooms[currentRoom].puzzle}
          solution={rooms[currentRoom].solution}
          onNextRoom={handleNextRoom}
        />
      )}
      {gameState === 'end' && <EndScreen onRestart={handleRestart} />}
    </div>
  );
}

export default App;

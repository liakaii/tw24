import './App.css';
import ApppBar from './components/ApppBar.tsx';
import Menuu from './components/Menuu.tsx';
import MediaCard1 from './components/MediaCard1.tsx';
import MediaCard2 from './components/MediaCard2.tsx';
import MediaCard3 from './components/MediaCard3.tsx';

import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Новости</h1>  
      <div>
        <ApppBar />
      </div>

      <div>
      <MediaCard1 />
      </div>

      <div>
      <MediaCard2 />
      </div>

      <div>
      <MediaCard3 />
      </div>

      <div>
        <Menuu />
      </div>

      <h0><div className="spacer"></div> {/* Пустое пространство */}
      упражнение
      </h0>

      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          {count}
        </button>
        <p>
          Жми на кнопку каждый день и через неделю...
        </p>
      </div>
      <p className="read-the-docs">
        что происходит
      </p>
    </>
  );
}

export default App;

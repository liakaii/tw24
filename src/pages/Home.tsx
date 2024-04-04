import ApppBar from '../components/ApppBar.tsx';
import Menuu from '../components/Menuu.tsx';
import MediaCard1 from '../components/MediaCard1.tsx';
import MediaCard2 from '../components/MediaCard2.tsx';
import MediaCard3 from '../components/MediaCard3.tsx';
import Leather from '../components/Leather.tsx';
// import { useState } from 'react';
import { Link } from 'react-router-dom'; 

function Home() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <h1>
        Предложения на сегодня<div className="spacer"></div>
      </h1>
        <div><ApppBar /></div>

        <div><MediaCard1 /></div>

        <div><MediaCard2 /></div>

        <div><MediaCard3 /></div>

        <div><Menuu /></div>

        <div><Leather username={''} distance={''} phoneNumber={''} /></div>

        <div className="spacer"></div><div className="spacer"></div><div className="spacer"></div><div className="spacer"></div>
        <Link to="/image-generator"><button>Сохранёные картинки</button></Link>

      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          {count}
        </button> */}
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

export default Home;
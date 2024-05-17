import ApppBar from '../components/ApppBar.tsx';
import Menuu from '../components/Menuu.tsx';
import MediaCard1 from '../components/MediaCard1.tsx';
import MediaCard2 from '../components/MediaCard2.tsx';
import MediaCard3 from '../components/MediaCard3.tsx';
import Leather from '../components/ad/Leather.tsx';
import Plitka from '../components/ad/plitka.tsx';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Home() {
  const [user, setUser] = useState<{ avatar: string } | null>(null);

  return (
    <>
      <h1>
      <div className="spacer"></div>Предложения на сегодня<div className="spacer"></div>
      </h1>
        <div><ApppBar setUser={setUser} user={user} /></div>

        <div><MediaCard1 /></div>

        <div><MediaCard2 /></div>

        <div><MediaCard3 /></div>

        <div><Menuu /></div>

        <div><Plitka productName={''} price={''} shopLink={''} /></div>

        <div><Leather username={''} distance={''} phoneNumber={''} /></div>

        <div className="spacer"></div><div className="spacer"></div><div className="spacer"></div><div className="spacer"></div>
        <Link to="/Art"><button>Сохранёные картинки</button></Link>

      <div className="card">
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

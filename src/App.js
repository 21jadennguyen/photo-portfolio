import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home'
import DayInTheLife from './components/DayInTheLife';
import FivePhotoStory from './components/FivePhotoStory';
import DailyPhotos from './components/DailyPhotos';
import Graffiti from './components/Graffiti';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dayinthelife" element={<DayInTheLife />} />
          <Route path="dailyphoto" element={<DailyPhotos />} />
          <Route path="fivephotostory" element={<FivePhotoStory />} />
          <Route path="graffiti" element={<Graffiti />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

import './index.scss'

const Home = () => {

  return (
    <div className="home-page">
      <div className="text-zone">
        <h1> Photojournalism Portfolio <br /> Jaden Nguyen</h1>
      </div>
      <div className="cover-container">
        <img alt = '' src={require('../../assets/images/Cover/ANT_1753.JPG')}/>
      </div>
    </div>
  );
}

export default Home
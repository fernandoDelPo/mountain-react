import Mountain from './components/Mountain';
import data from './data/mountain';
import './assets/stylesheets/App.css';

function App() {
  return (
    <div className="App">
      <div className='main-container'>
        <h1 className='title'>Las 10 montañas más altas del continente americano</h1>
        {
          data.map((mountain, index) => {
            return <Mountain  {...mountain} key={index} />
          })
        }
      </div>
    </div>
  );
}
export default App;

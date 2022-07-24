import Header from "./Header";
import './App.css';
import NewsFeed from "./NewsFeed";
import Stats from "./Stats";

function App() {
  return (
    <div className="App">
      {/*Header*/}
      <div className="app__header">
        <Header/>
      </div>

      <div className="app__body">
        <div className="app__container"></div>
          <NewsFeed/>
          
          <Stats/>
      </div>
    </div>
  );
}

export default App;

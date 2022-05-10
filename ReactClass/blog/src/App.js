import logo from './logo.svg';
import './App.css';

function App() {

  let posts = '강남 고기 맛집 맛집';
  let style = { color : 'blue', fontSize : '30px'};
  
  function 함수() {
    return 100 
  }

  return (
    <div className="App">
      <div className="App">
        <div className="black-nav">
          <div style={ style }>개발 Blog</div>
        </div>
        <h4> { posts } </h4>
      </div>
    </div>
  );
}

export default App;

/* eslint-disable */

// import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '여자 스커트 추천', '남자 봄옷 추천']);
  let [따봉, 따봉변경] = useState(0);

  // deep copy
  function 글자순정렬() {
    var newArray = [...글제목];
    newArray = newArray.sort()
    글제목변경( newArray );
  }

  return (
    <div className="App">
      <div className="App">
        <div className="black-nav">
          <div>개발 Blog</div>
        </div>
        <button onClick={ 글자순정렬 } >버튼</button>
        <div className="list">
          <h3> { 글제목[0] } <span onClick={ ()=>{따봉변경( 따봉 + 1 )} }>👍</span>{따봉}</h3>
          <p>2월 17일 발행</p>
          <hr></hr>
        </div>
        <div className="list">
          <h3> { 글제목[1] } </h3>
          <p>3월 17일 발행</p>
          <hr></hr>
        </div>
        <div className="list">
          <h3> { 글제목[2] } </h3>
          <p>2월 17일 발행</p>
          <hr></hr>
        </div>
      </div>
    </div>
  );
}

export default App;

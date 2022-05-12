// import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState('남자 코트 추천');
  let [글제목2, 글제목변경2] = useState('여자 스커트 추천');
  let [글제목3, 글제목변경3] = useState('남자 봄옷 추천');

  return (
    <div className="App">
      <div className="App">
        <div className="black-nav">
          <div>개발 Blog</div>
        </div>
        <div className="list">
          <h3> { 글제목 } </h3>
          <p>2월 17일 발행</p>
          <hr></hr>
        </div>
        <div className="list">
          <h3> { 글제목2 } </h3>
          <p>3월 17일 발행</p>
          <hr></hr>
        </div>
        <div className="list">
          <h3> { 글제목3 } </h3>
          <p>2월 17일 발행</p>
          <hr></hr>
        </div>
      </div>
    </div>
  );
}

export default App;

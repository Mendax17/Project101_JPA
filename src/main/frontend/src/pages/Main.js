import axios from 'axios';
import React, { useEffect, useState } from 'react';

import img1 from './img1.jpg';

const Main = () => {
  const [message, setMessage] = useState([]);
  const [data, setData] = useState([]);
  const [person, setPerson] = useState([]);

  useEffect(() => {
    fetch('/hello')
      .then(response => { return response.json() })
      .then(function(data) { setMessage(data) });

    axios
      .get('/list')
      .then(response => { setData(response.data) });

    axios.post('/person').then(response => {setPerson(response.data)});
  }, []);


  return (
    <div>
      <header>
        <img src={img1} style={{width: '200px', height: '200px'}} />
        <h1>SpringBoot /hello로부터 받은 데이터 출력</h1>
        <ul style={{listStyle: 'none'}}>
          {
            message.map((item, index) => <li key={index}>{item}</li>)
          }
        </ul>
        <hr />

        <section>
          <h2>SpringBoot /list로부터 받은 데이터 출력</h2>
          <ul style={{listStyle: 'none'}}>
          {
            data.map((item, index) => <li key={index}>{item.name} / {item.addr} / {item.age}</li>)
          }
        </ul>

        <h2>MySQL /person로부터 받은 데이터 출력</h2>
          <ul style={{listStyle: 'none'}}>
          {
            person.map((item, index) => <li key={index}>{item.seq} / {item.name}</li>)
          }
        </ul>

        </section>
      </header>
    </div>
  );
};

export default Main;
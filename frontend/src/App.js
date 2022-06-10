import { useState, useEffect } from 'react';
import Table from './Table';
import axios from 'axios'
import './App.css'

function App() {
  const [urlInfo, setUrlInfo] = useState([]);
  const [url, setUrl] = useState('');
  const [sub, setSub] = useState(0);

  const f = () => {
    axios.get('/getallurl')
      .then((val) => {
        console.log(val.data);
        setUrlInfo(val.data)
      });
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (url === "") return;
    axios.post('/getshorturl', { url: url })
      .then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err.message);
      })
    setSub(sub+1);
  }
  useEffect(f, [sub]);


  return (
    <div className="App">
      <div className='title'>
        URlshortner
      </div>
      <div className="container mb-5 mt-3">
        <form onSubmit={submitHandler}>
          <div className="row">
            <input type="url" className="mb-3 form-control border border-2 border-success" placeholder="Enter URL here" onChange={(e) => { setUrl(e.target.value) }} />
            <input type="submit" className="btn btn-success" />
          </div>
        </form>
        <hr />
        <Table info={urlInfo} />
      </div>
    </div>
  );
}

export default App;

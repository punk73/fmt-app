import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ClassComponent from './ClassComponent';

function App() {

  const [options, SetOptions ] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
    .then(res=> res.data)
    .then(res => {
      console.log(res.products);
      // sort here
      const products = res.products;
      const sortedTitle = products.sort((a,b) => (
        a.title - b.title
      ));
      console.log(sortedTitle)
      SetOptions(sortedTitle);
    })
    .catch(err => {
      console.log(err);
    })
  }, []);

  return (
    <div className="App">
      <h1>im fmt component</h1>


      <select name="title" id="title">
        {
          options.map((val, index) => (
            <option value={val.id}>{val.title}</option>
          ))
        }
      </select>


      <ClassComponent options={options} />
    </div>
  );
}

export default App;

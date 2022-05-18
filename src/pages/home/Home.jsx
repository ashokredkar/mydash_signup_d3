import React, { useEffect, useState } from 'react';
import './Home.scss';
import BarChart from './BarChart';

const datas = [
  [10, 30, 40, 20],
  [10, 40, 30, 20, 50, 10],
  [60, 30, 40, 20, 30],
  [100, 50, 25, 0, 30],
  [30, 35, 60, 30, 70]
]
var i = 0;


const Home = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    changeData();
  }, []);

  const changeData = () => {
    setData(datas[i++]);
    if (i === datas.length) i = 0;
  }



  return (
    <div className="home">
      <h2 className='home__title'>D3 Bar Graph in React</h2>
      <BarChart width={600} height={400} data={data} />
      <button className='home__btn' onClick={changeData}>Change Data</button>
    </div>
  )
}

export default Home
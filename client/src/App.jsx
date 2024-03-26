import { useEffect, useState } from 'react'
import './App.css'
import TableChart from './components/TableChart'
import TickPlacementBars from './components/TickPlacementBars'
import './index.css'
import axios from 'axios'
import Statistics from './components/Statistics'


function App() {
  const [ tableData , setTableData ] = useState([])
  
  useEffect(()=>{
    // console.log(" useEffect started ---");
    
    axios.get(`http://localhost:3000/products`)
    .then(res=>{
      const data = res.data ;
      // console.log(" line res- --", data);
      setTableData(data);
    })
  },[])


  return (
    <>
      <div className="main">
        <div className="circle">
          <h1> Transaction Dashboard</h1>
        </div>

        <div className="search-panel">
          <input
            type="text"
            placeholder="Search transaction"
            className="search-bar"
          />
          <select className="month" onChange={() => console.log("select")}>
            <option>Select Month</option>
            <option>Jan</option>
            <option>Feb</option>
            <option>Mar</option>
            <option>Apr</option>
            <option>May</option>
            <option>June</option>
            <option>July</option>
            <option>Aug</option>
            <option>Sep</option>
            <option>Oct</option>
            <option>Nov</option>
            <option>Dec</option>
          </select>
        </div>
        <TableChart tableData={tableData}/>
        <Statistics />
        {/* <TickPlacementBars /> */}
      </div>
    </>
  )
}

export default App

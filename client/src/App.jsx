import './App.css'
<<<<<<< HEAD
import TableChart from './components/TableChart'
import TickPlacementBars from './components/TickPlacementBars'
=======
import './index.css'
>>>>>>> main


function App() {

  return (
    <>
<<<<<<< HEAD
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
        <TableChart />
        <TickPlacementBars />
      </div>
=======
      <h1 className='text-teal-900'>  hello</h1>
>>>>>>> main
    </>
  )
}

export default App

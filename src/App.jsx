import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React from "react"
import './App.css'
import AddRoom from "./components/room/AddRoom"
import ExistingRooms from "./components/room/ExistingRooms";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/home/Home"
// import RoomFilter from "./components/common/RoomFilter";

function App() {
  return (
    <main>
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/existing-rooms" element={<ExistingRooms />} />
          <Route path="/add-room" element={<AddRoom />} />
          {/* <Route path="/filter" element={<RoomFilter/>} /> */}
        </Routes>
      </Router>

    </main>
  // <AddRoom/>
  // <ExistingRooms/>
  )
}

export default App

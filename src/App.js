import React, { useEffect } from "react"

import "./App.css"
import "materialize-css/dist/css/materialize.min.css"
import M from "materialize-css/dist/js/materialize.min.js"

//components
import SearchBar from "./components/layout/SearchBar"
import Logs from "./components/Logs/Logs"
import AddBtn from "./components/layout/AddBtn"
import AddLogModal from "./components/Logs/AddLogModal"
import EditLogModal from "./components/Logs/EditLogModal"
import AddTechModal from "./components/techs/AddTechModal"
import TechListModal from "./components/techs/TechListModal"
import TechItem from "./components/techs/TechItem"

function App() {
  useEffect(() => {
    M.AutoInit()
  })
  return (
    <div className="App">
      <SearchBar />
      <div className="container">
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <TechListModal />
        <TechItem />
        <Logs />
      </div>
    </div>
  )
}

export default App

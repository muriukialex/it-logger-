import React, { useEffect, useState } from "react"

//components
import LogItem from "./LogItem"
import Preloader from "../layout/Preloader"

const Logs = () => {
  const [logs, setLogs] = useState([])
  const [loading, setLoading] = useState(false)

  const getLogs = async () => {
    setLoading(true)
    const res = await fetch("/logs")
    const data = await res.json()

    setLoading(false)
    setLogs(data)
  }

  useEffect(() => {
    getLogs()
  }, [])

  if (loading) return <Preloader />

  console.log(logs)

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h5 className="center">System Logs</h5>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No logs to show</p>
      ) : (
        logs.map((logItem) => <LogItem item={logItem} key={logItem.id} />)
      )}
    </ul>
  )
}

export default Logs

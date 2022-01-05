import React, { useState } from "react"

const AddLogModal = () => {
  const [logMessage, setLogMessage] = useState("")
  const [attention, setAttention] = useState(false)
  const [technician, setTechnician] = useState("")
  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={(e) => setLogMessage(e.target.value)}
            />
            <label htmlFor="message" className="active">
              Log Message
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <select
              name="technician"
              value={technician}
              className="browser-default"
              onChange={(e) => setTechnician(e.target.value)}
            >
              <option value="" disabled>
                Select Technician
              </option>
              <option value="John Mcafee">John McaFee</option>
              <option value="John Maurice">John Maurice</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Needs attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const modalStyle = {
  width: "75%",
  height: "75%",
}

export default AddLogModal
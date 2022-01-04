import React from "react"
import PropTypes from "prop-types"

import Moment from "react-moment"

const LogItem = ({ item }) => {
  const { id, message, attention, date, technician } = item
  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${attention ? "red-text" : "blue-text"}`}
        >
          {message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{id}</span> Last updated by:
          <span className="black-text">{technician}</span> on{" "}
          <Moment format="MMMM Do YYYY, h:mm:ss a">{date}</Moment>
        </span>
        <a href="#!" className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  )
}

LogItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default LogItem

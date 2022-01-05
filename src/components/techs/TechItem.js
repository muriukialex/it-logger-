import React from "react"
import PropTypes from "prop-types"

const TechItem = ({ technician }) => {
  console.log(technician)
  //   const { firstName, lastName } = technician
  return (
    <li className="collection-item">
      <div>
        {technician.firstName}: {technician.lastName}
      </div>
    </li>
  )
}

// TechItem.propTypes = {
//   technician: PropTypes.object.isRequired,
// }

export default TechItem

import React from 'react'

const AvailabilityFilters = ({onChangeAvailability, isAvailable}) => {
  return (
    <fieldset className="me-5">
      <legend>Availability:</legend>

      <div className="form-check">
        <label className="form-check-label">
          <span>Availability checkbox</span>
          <input className="form-check-input" checked={isAvailable} type="checkbox" onChange={onChangeAvailability} />
        </label>
      </div>
    </fieldset>
  )
}

export default AvailabilityFilters
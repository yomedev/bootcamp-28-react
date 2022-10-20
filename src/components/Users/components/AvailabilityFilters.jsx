import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeUsersAvailabilityAction } from '../../../redux/users/action.users'

const AvailabilityFilters = () => {
  const isAvailable = useSelector(state => state.users.isAvailable)
  const dispatch = useDispatch()
  const handleChange = () => {
    dispatch(changeUsersAvailabilityAction())
  }
  return (
    <fieldset className="me-5">
      <legend>Availability:</legend>

      <div className="form-check">
        <label className="form-check-label">
          <span>Availability checkbox</span>
          <input className="form-check-input" checked={isAvailable} type="checkbox" onChange={handleChange} />
        </label>
      </div>
    </fieldset>
  )
}

export default AvailabilityFilters
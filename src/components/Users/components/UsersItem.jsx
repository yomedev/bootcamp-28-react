import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteUserAction } from '../../../redux/users/action.users';
// import PropTypes from 'prop-types'

const UsersItem = ({ user }) => {
  const { id, name, email, bio, skills, isOpenToWork } = user;
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deleteUserAction(id))
  }

  return (
    <div className="card my-3">
      <div className="card-body">
        <h5 className="card-title d-flex">
          {name}
          {isOpenToWork && <p className="badge bg-success ms-3">Open to work</p>}
        </h5>
        <h6 className="card-subtitle mb-2 text-muted">{email}</h6>
        <p className="card-text">{bio}</p>
        <div className="d-flex mb-2">
          {skills.map( skill=> (
            <span key={skill} className="badge bg-dark me-1">
              {skill}
            </span>
          ))}
        </div>
        <div className="d-flex">
          <button
            onClick={handleDelete}
            type="button"
            className="card-link btn-link"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default UsersItem

// UsersItem.propTypes = {
//   user: PropTypes.exact({
//     id: PropTypes.number.isRequired,
//     name: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired,
//     bio: PropTypes.string.isRequired,
//     skills: PropTypes.arrayOf(PropTypes.string.isRequired),
//     isOpenToWork: PropTypes.bool.isRequired,
//   }).isRequired,
// };
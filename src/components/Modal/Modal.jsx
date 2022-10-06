import React from 'react'
import PropTypes from 'prop-types';

const Modal = ({ children, handleClose }) => {

  const handleModalClose = (event) => {
    if (event.target === event.currentTarget) {
      handleClose()
    }
  }

  return (
    <>
      <div className="modal-backdrop fade show" />

      <div className="modal fade show" onClick={handleModalClose} style={{ display: 'block' }}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button onClick={handleClose} type="button" className="btn-close" aria-label="Close" />
            </div>

            <div className="modal-body">{children}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal

Modal.propType = {
  children: PropTypes.oneOf([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  handleClose: PropTypes.func.isRequired,
};
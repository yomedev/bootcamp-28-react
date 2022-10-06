import React from 'react'
import PropTypes from 'prop-types';

const BannerItem = ({ title, text, children, handleOpen }) => {

  const handleModalOpen = () => {
    handleOpen()
  }
  
  return (
    <div className="feature col">
      <div
        className="d-flex rounded justify-content-center align-items-center mb-4 text-white bg-primary bg-gradient"
        style={{ width: '70px', height: '70px', fontSize: '30px' }}
      >
        {children}
      </div>

      <div className="my-5 me-5">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>

      <button onClick={handleModalOpen} type="button" className="btn btn-primary">
        Call to action
      </button>
    </div>
  )
}

export default BannerItem

BannerItem.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  handleOpen: PropTypes.func.isRequired,
};
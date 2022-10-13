import { useEffect } from 'react';
import ReactDOM from 'react-dom';


export const Modal = ({ children, onModalClose }) => {

  const handleModalClose = (event) => {
    if (event.target === event.currentTarget) {
      onModalClose()
    }
  }

  useEffect(() => {
    const handleCloseKey = event => {
      console.log(event.code);
      if (event.code === 'Escape') {
        onModalClose()
      }
    }

    

    window.addEventListener('keydown', handleCloseKey)

    return () => {
      window.removeEventListener('keydown', handleCloseKey)
    }
  }, [onModalClose])

  return (
    <>
      <div className="modal-backdrop fade show" />

      <div className="modal fade show" onClick={handleModalClose} style={{ display: 'block' }}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button onClick={onModalClose} type="button" className="btn-close" aria-label="Close" />
            </div>

            <div className="modal-body">{children}</div>
          </div>
        </div>
      </div>
    </>
  )

}


// import React, { Component } from 'react'
// import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';


// const modalRoot = document.getElementById('modal')

// class Modal extends Component {

//   handleModalClose = (event) => {
//     const { onModalClose } = this.props
//     if (event.target === event.currentTarget) {
//       onModalClose()
//     }
//   }

//   handleCloseKey = event => {
//     const { onModalClose } = this.props
//     console.log(event.code);
//     if (event.code === 'Escape') {
//       onModalClose()
//     }
//   }

//   componentDidMount() {
//     const { onModalClose } = this.props
//     window.addEventListener('keydown', this.handleCloseKey)
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleCloseKey)
//   }

//   render() {
//     const { children, onModalClose } = this.props

//     const jsx = (
//       <>
//         <div className="modal-backdrop fade show" />

//         <div className="modal fade show" onClick={this.handleModalClose} style={{ display: 'block' }}>
//           <div className="modal-dialog modal-dialog-centered">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">Modal title</h5>
//                 <button onClick={onModalClose} type="button" className="btn-close" aria-label="Close" />
//               </div>

//               <div className="modal-body">{children}</div>
//             </div>
//           </div>
//         </div>
//       </>
//     )
//     return ReactDOM.createPortal(jsx, modalRoot)
//   }


// }

// export default Modal

// Modal.propType = {
//   children: PropTypes.oneOf([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
//   handleClose: PropTypes.func.isRequired,
// };
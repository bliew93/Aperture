import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import UploadPhotoContainer from '../upload_photo_modal/upload_photo_container';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  //upload photo, view photo, edit photo
  switch (modal) {
    case 'upload':
      component = <UploadPhotoContainer />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
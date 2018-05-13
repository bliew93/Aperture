import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import UploadPhotoContainer from '../upload_photo_modal/upload_photo_container';
import PreSubmitPhotos from '../pre_submit_modal/pre_submit_photos';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  //upload photo, pre-submit, view photo, edit photo
  switch (modal) {
    case 'upload':
      component = <UploadPhotoContainer />;
      break;
    case 'pre-submit':
      component = <PreSubmitPhotos />;
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
    closeModal: () => {
      if(window.tempPhotoState) { delete window.tempPhotoState; }
      return dispatch(closeModal());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

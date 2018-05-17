import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import UploadPhotoContainer from '../upload_photo_modal/upload_photo_container';
import PreSubmitPhotos from '../pre_submit_modal/pre_submit_photos';
import PhotoShowModal from '../photo_show/photo_show_modal';
import ManageProfileContainer from '../manage_profile_modal/manage_profile_container';


function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  //upload photo, pre-submit, view photo, edit photo
  switch (modal.modalType) {
    case 'upload':
      component = <UploadPhotoContainer />;
      break;
    case 'pre-submit':
      component = <PreSubmitPhotos photos={modal.photos} />;
      break;
    case 'photo-show':
      component = <PhotoShowModal
        user={modal.user}
        photo={modal.photo}
        comments={modal.comments}
        createComment={modal.createComment}
        closeModal={modal.closeModal}/>;
      break;
    case 'manage-profile':
      component = <ManageProfileContainer />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className={`modal-child ${modal.modalType}`} onClick={e => e.stopPropagation()}>
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
      return dispatch(closeModal());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

import { RECEIVE_PHOTO, RECEIVE_COMMENT, CLEAR_COMMENTS } from '../actions/photo_actions';
import { merge, isEmpty } from 'lodash';

const defaultCommentState = {};

const commentsReducer = (state = defaultCommentState, action) => {
  switch(action.type) {
    case RECEIVE_PHOTO:
      if(_.isEmpty(action.payload.comments)) {return defaultCommentState; }
      return action.payload.comments;
    case RECEIVE_COMMENT:
      return merge({}, state, {[action.comment.id]: action.comment});
    case CLEAR_COMMENTS:
      return defaultCommentState;
    default:
      return state;
  }
};

export default commentsReducer;

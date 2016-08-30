import { SessionConstants } from '../actions/session_actions';
import { merge } from 'lodash';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = function(sessionState = _nullUser, action){
  switch(action.type){
    case SessionConstants.RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, _nullUser, { currentUser });
    case SessionConstants.LOGOUT:
      return _nullUser;
    case SessionConstants.RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, _nullUser, { errors });
    default:
      return sessionState;
  }
};



export default SessionReducer;

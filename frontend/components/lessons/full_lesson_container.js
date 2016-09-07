import { connect } from 'react-redux';
import FullLesson from './full_lesson';
import { requestLesson,
         deleteLesson
       } from '../../actions/lessons_actions';


const mapStateToProps = state => ({
  singleLesson: state.singleLesson,
  currentUser: state.session.currentUser
});


const mapDispatchToProps = dispatch => ({
  requestLesson: lessonId => dispatch(requestLesson(lessonId)),
  deleteLesson: lessonId => dispatch(deleteLesson(lessonId))
});




export default connect(
  mapStateToProps, mapDispatchToProps
)(FullLesson);

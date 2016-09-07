import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import SingleLessonReducer from './single_lesson_reducer';
import ErrorsReducer from './errors_reducer';
import ProfileReducer from './profile_reducer';
import LessonsIndexReducer from './lessons_index_reducer';

const RootReducer = combineReducers({
  errors: ErrorsReducer,
  session: SessionReducer,
  singleLesson: SingleLessonReducer,
  lessonsIndex: LessonsIndexReducer,
  profile: ProfileReducer
});

export default RootReducer;

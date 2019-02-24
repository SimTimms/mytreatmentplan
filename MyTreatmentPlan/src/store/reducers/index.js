import { AsyncStorage } from 'react-native';
import { EXERCISE_SUBMIT } from '../types';

const INITIAL_STATE = { exercises: [] };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EXERCISE_SUBMIT:
      exerciseArray = state.exercises;
      if (!exerciseArray.includes(action.payload)) {
        exerciseArray = [...exerciseArray, action.payload];
      }
      AsyncStorage.setItem('exerciseArray', exerciseArray);
      return {
        ...state,
        exercises: exerciseArray,
      };
    default:
      return state;
  }
};

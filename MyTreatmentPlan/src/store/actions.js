import { EXERCISE_SUBMIT } from './types';

export const exerciseSubmit = exerciseId => {
  return {
    type: EXERCISE_SUBMIT,
    payload: exerciseId,
  };
};

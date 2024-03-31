export const addToActiveTimer = (timer) => ({
    type: 'ADD_ACTIVE_TIMER',
    payload: timer,
  });
  
  export const deleteSavedTimer = (timerKey) => {
    return {
      type: 'DELETE_SAVED_TIMER',
      payload: timerKey,
    };
  };
  
  export const deleteActiveTimer = (timerId) => {
    return {
      type: 'DELETE_ACTIVE_TIMER',
      payload: timerId,
    };
  };
import { combineReducers } from 'redux';

// Initial state for saved timers and active timers
const initialState = {
  savedTimers: [
    { key: 1, name: "Ravioli Pasta", value: "00:09:00" },
    { key: 2, name: "Egg Timer", value: "00:09:00" },
    { key: 3, name: "Room Cleaning", value: "01:00:00" },
    { key: 4, name: "Morning Meditation", value: "00:10:00" },
    { key: 5, name: "Evening Workout", value: "02:00:00" },

  ],
  activeTimers: [],
};

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'ADD_ACTIVE_TIMER':
//       console.log('Adding timer to active timers:', action.payload);
//       return {
//         ...state,
//         activeTimers: [...state.activeTimers, action.payload], // Ensure only the selected timer is added
//       };
//     default:
//       console.log('Unhandled action:', action.type);
//       return state;
//   }
// };
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ACTIVE_TIMER':
      const newTimer = { ...action.payload, key: Math.random().toString() }; // Generate unique identifier
      console.log('Adding timer to active timers:', newTimer);
      return {
        ...state,
        activeTimers: [...state.activeTimers, newTimer],
      };
    default:
      console.log('Unhandled action:', action.type);
      return state;
  }
};


export default combineReducers({
  rootReducer,
});

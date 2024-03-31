import { combineReducers } from "redux";

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

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ACTIVE_TIMER":
      const newTimer = { ...action.payload, key: Math.random().toString() }; // Generate unique identifier
      console.log("Adding timer to active timers:", newTimer);
      return {
        ...state,
        activeTimers: [...state.activeTimers, newTimer],
      };
    case "DELETE_SAVED_TIMER":
      return {
        ...state,
        savedTimers: state.savedTimers.filter(
          (timer) => timer.key !== action.payload
        ),
      };
    case "DELETE_ACTIVE_TIMER":
      return {
        ...state,
        activeTimers: state.activeTimers.filter(
          (timer) => timer.key !== action.payload
        ),
      };
    default:
      console.log("Unhandled action:", action.type);
      return state;
  }
};

export default combineReducers({
  rootReducer,
});

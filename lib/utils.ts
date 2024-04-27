export default function generateUniqueKey(): string {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 15);
  return `${timestamp}-${random}`;
}

export function getLoopingData(size: number) {
  const data = Array.from({ length: size }, (_, i) => {
    const key = generateUniqueKey(); // Use the function to generate a unique key
    return { key, value: i.toString().padStart(2, "0") };
  });
  return data.map((item) => item.value); // Return an array of values only
}

const validateTimer = (timerValue: string) => {
  const parts = timerValue.split(":").map((part) => parseInt(part));
  const [hours, minutes, seconds] = parts;
  return (
    !isNaN(hours) &&
    !isNaN(minutes) &&
    !isNaN(seconds) &&
    hours >= 0 &&
    minutes >= 0 &&
    seconds >= 0
  );
};

export const handleSaveTimer = (
  hour: number,
  minute: number,
  second: number,
  inputValue: string,
  addSavedTimer,
  dispatch,
  modalToggler
) => {
  const timerValue = `${hour}:${minute}:${second}`;
  if (validateTimer(timerValue)) {
    const newTimer = {
      key: Math.random().toString(),
      name: inputValue,
      value: timerValue,
    };
    dispatch(addSavedTimer(newTimer));
    alert(`${newTimer.name} saved!`);
    modalToggler();
  } else {
    alert("Timer value must be at least 00:00:01");
  }
};

export const handleAddtoActiveTimer = (
  hour: number,
  minute: number,
  second: number,
  inputValue: string,
  dispatch,
  modalToggler,
  addToActiveTimer
) => {
  const timerValue = `${hour}:${minute}:${second}`;
  if (validateTimer(timerValue)) {
    const newTimer = {
      key: Math.random().toString(),
      name: inputValue,
      value: timerValue,
    };
    dispatch(addToActiveTimer(newTimer));
    alert(`${newTimer.name} added to Active Timer`);
    modalToggler();
  } else {
    alert("Timer value must be at least 00:00:01");
  }
};

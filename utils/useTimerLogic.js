import { useEffect } from 'react';

export default function useTimerLogic(timers, setTimers, activeTimers, handleActiveTimerDelete) {
  
  useEffect(() => {
    const intervalIds = timers.map((timer, index) => {
      if (timer.isRunning) {
        return setInterval(() => {
          setTimers((prevTimers) => {
            const updatedTimers = [...prevTimers];
            updatedTimers[index].timeRemaining = decrementTime(updatedTimers[index].timeRemaining);
            return updatedTimers;
          });
        }, 1000);
      } else {
        return null;
      }
    });

    return () => {
      intervalIds.forEach((intervalId) => clearInterval(intervalId));
    };
  }, [timers, setTimers]);

  const decrementTime = (time) => {
    let [hours, minutes, seconds] = time.split(":").map(Number);
    if (hours === 0 && minutes === 0 && seconds === 0) {
      return "00:00:00";
    }
    if (seconds === 0) {
      if (minutes === 0) {
        hours--;
        minutes = 59;
      } else {
        minutes--;
      }
      seconds = 59;
    } else {
      seconds--;
    }
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  const handlePlayPause = (index) => {
    setTimers((prevTimers) => {
      const updatedTimers = [...prevTimers];
      updatedTimers[index].isRunning = !updatedTimers[index].isRunning;
      return updatedTimers;
    });
  };

  const handleStop = (index) => {
    setTimers((prevTimers) => {
      const updatedTimers = [...prevTimers];
      updatedTimers[index].isRunning = false;
      updatedTimers[index].timeRemaining = activeTimers[index].value;
      return updatedTimers;
    });
  };

  const handleDeleteActiveTimer = (index) => {
    handleActiveTimerDelete(index);
    setTimers((prevTimers) => prevTimers.filter((_, i) => i !== index));
  };

  return { decrementTime, handlePlayPause, handleStop, handleDeleteActiveTimer };
}

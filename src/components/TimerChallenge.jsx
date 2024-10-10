import { useRef, useState } from "react";
import ResultModal from "./resultModal";

// let timer;

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  //   const [timerStarted, setTimerStarted] = useState(false);
  //     const [timerExpired, setTimerExpired] = useState(false);

  const timeIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleReset(){
    setTimeRemaining(targetTime * 1000)
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
    // setTimerStarted(true);
  }

  function handleStop() {
    dialog.current.open();

    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        result="lost"
        remainingTime={timeRemaining}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        {/* {timerExpired && <p>You lost</p>} */}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timeIsActive ? handleStop : handleStart}>
            {timeIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timeIsActive ? "active" : undefined}>
          {timeIsActive ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}

import { useState, useEffect } from 'react';

function useTimer() {
  const [timer, setTimer] = useState(1);
  const [randomNumber, setRandomNumber] = useState(1);
  const [bingo, setBingo] = useState(false);

  const TIMER_INTERVAL = 1000;
  const MAX_TIMER = 10;
  const MIN_RANDOM = 1;
  const MAX_RANDOM = 100;
  const NUMBER_THREE = 3;
  const NUMBER_FIVE = 5;
  const RESET_BINGO = 4;

  const increaseTimerInterval = () => setTimer((prevState) => prevState + 1);

  const handleRandomNumber = () => {
    const random = Math.round(
      Math.floor(Math.random() * MAX_RANDOM) + MIN_RANDOM,
    );
    setRandomNumber(random);
  };

  const verifyMultiple = (random) => {
    if (random % NUMBER_THREE === 0
      || random % NUMBER_FIVE === 0) {
      setBingo(true);
    }
  };

  useEffect(() => {
    const timerId = setInterval(increaseTimerInterval, TIMER_INTERVAL);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  useEffect(() => {
    if (timer > MAX_TIMER) {
      setTimer(1);
      handleRandomNumber();
    }
    if (timer >= RESET_BINGO) setBingo(false)

  }, [timer, setTimer]);

  useEffect(() => {
    verifyMultiple(randomNumber)
  }, [randomNumber]);

  return { timer, randomNumber, bingo };
}

export default useTimer;

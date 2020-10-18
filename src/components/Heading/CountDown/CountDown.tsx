import React, {useState, useEffect} from 'react';

const CHALLENGE_DURATION: number = 45; //in minutes

const CountDown: React.FC = () => {
  const [timeInSeconds, setTimeInSeconds] = useState(0);
  const [timeInMinutes, setTimeInMinutes] = useState(CHALLENGE_DURATION);

  const tick = () => {
    if (timeInSeconds === 0) {
      setTimeInSeconds(59);
      setTimeInMinutes(timeInMinutes - 1);
    } else {
      setTimeInSeconds(timeInSeconds - 1);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => tick(), 1000);
    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });

  const presentableTime = (time: number) => {
    if (time < 10) {
      return '0' + time.toString();
    } else {
      return time.toString();
    }
  };

  return (
    <div>
      {presentableTime(timeInMinutes)}:{presentableTime(timeInSeconds)}
    </div>
  );
};

export default CountDown;

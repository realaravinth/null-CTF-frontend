import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

import {selectAuth, isAuthenticated} from '../../../app/reducers/authSlice';
import {selectstartTime} from '../../../app/reducers/startTimeSlice';

const ABSOLUTE_CHALLENGE_DURATION: number = 0.1 * 60; //in seconds

const CountDown: React.FC = () => {
  const authVal = useSelector(selectAuth);
  const startTime = useSelector(selectstartTime);

  if (authVal !== isAuthenticated.challengeReady) return <div />;

  if (startTime === null) {
    console.error(
      `can't mount timer,
        startTime yet to be received from API. startTime: ${startTime}`,
    );
    return <div />;
  }

  const END_TIME: number = startTime + ABSOLUTE_CHALLENGE_DURATION;
  const CHALLENGE_DURATION: number = END_TIME - Math.floor(Date.now() / 1000); //relative time
  //calculating time:
  const initTimeinSeconds: number = CHALLENGE_DURATION % 60;
  const initTimeinMinutes: number =
    (CHALLENGE_DURATION - initTimeinSeconds) / 60;

  return (
    <CountDownNotNull
      initTimeinMinutes={initTimeinMinutes}
      initTimeinSeconds={initTimeinSeconds}
    />
  );
};

type CountDownNotNullProps = {
  initTimeinMinutes: number;
  initTimeinSeconds: number;
};

const CountDownNotNull: React.FC<CountDownNotNullProps> = ({
  initTimeinSeconds,
  initTimeinMinutes,
}) => {
  const [timeInSeconds, setTimeInSeconds] = useState(initTimeinSeconds);
  const [timeInMinutes, setTimeInMinutes] = useState(initTimeinMinutes);
  const history = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => tick(), 1000);
    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });

  const tick = () => {
    if (timeInSeconds === 1 && timeInMinutes === 0) {
      history.push('/logout');
    }
    if (timeInSeconds === 0) {
      setTimeInSeconds(59);
      setTimeInMinutes(timeInMinutes - 1);
    } else {
      setTimeInSeconds(timeInSeconds - 1);
    }
  };

  return (
    <div>
      {presentableTime(timeInMinutes)}:{presentableTime(timeInSeconds)}
    </div>
  );
};

const presentableTime = (time: number) => {
  if (time < 10) {
    return '0' + time.toString();
  } else {
    return time.toString();
  }
};

export default CountDown;

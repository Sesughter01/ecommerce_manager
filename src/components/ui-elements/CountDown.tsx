'use client';
import { useEffect, useState } from "react";

const msInSecond = 1000;
const msInMinute = 60 * 1000;
const msInAHour = 60 * msInMinute;
const msInADay = 24 * msInAHour;

type TimeParts = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

type CountdownProps = {
  endDateTime: string;
};

const getPartsOfTimeDuration = (duration: number): TimeParts => {
  const days = Math.floor(duration / msInADay);
  const hours = Math.floor((duration % msInADay) / msInAHour);
  const minutes = Math.floor((duration % msInAHour) / msInMinute);
  const seconds = Math.floor((duration % msInMinute) / msInSecond);

  return { days, hours, minutes, seconds };
};

const Countdown: React.FC<CountdownProps> = ({ endDateTime }) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timeout = setTimeout(() => {
      const date = new Date();
      setTime(date.toLocaleTimeString());
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [time]);

  const now = Date.now(); // Number of milliseconds from the beginning of time
  const future = new Date(endDateTime); // Target date and time
  const timeDif = future.getTime() - now;
  const timeParts = getPartsOfTimeDuration(timeDif);

  return (
    <>
      <span className="cdown days">
        <span className="time-count">{timeParts.days}</span>
        <p>Days</p>
      </span>
      <span className="cdown hour">
        <span className="time-count">{timeParts.hours}</span>
        <p>Hour</p>
      </span>
      <span className="cdown minutes">
        <span className="time-count">{timeParts.minutes}</span>
        <p>Minute</p>
      </span>
      <span className="cdown second">
        <span className="time-count">{timeParts.seconds}</span>
        <p>Second</p>
      </span>
    </>
  );
};

export default Countdown;

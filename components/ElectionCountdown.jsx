import { useState, useEffect } from "react";

const ElectionCountdown = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [isMounted]);

  function calculateTimeLeft() {
    const electionDate = new Date("November 5, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const localOffset = new Date().getTimezoneOffset() * 60000;
    const estOffset = -5 * 60 * 60000;
    const nowEST = now + localOffset + estOffset;
    const difference = electionDate - nowEST;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) return null;

    return (
      <div key={interval} className="flex flex-col items-center mx-2">
        <span className="text-4xl font-bold">{timeLeft[interval]}</span>
        <span className="text-lg">{interval}</span>
      </div>
    );
  });

  return (
    <div className="text-center my-8 p-6 bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Countdown to Election Day</h2>
      <div className="flex justify-center items-center space-x-4">
        {isMounted ? (
          timerComponents.length ? (
            timerComponents
          ) : (
            <span className="text-xl">Time's up!</span>
          )
        ) : (
          <div>Loading countdown...</div>
        )}
      </div>
    </div>
  );
};

export default ElectionCountdown;

import { useState, useEffect } from "react";
const ElectionCountdown = () => {
  const [isMounted, setIsMounted] = useState(false); // Define the isMounted state
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft()); // Initially calculate time left

  // This effect runs only once when the component mounts
  useEffect(() => {
    setIsMounted(true); // Component is mounted

    // Return a cleanup function that sets isMounted to false when the component unmounts
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    if (!isMounted) return; // If not mounted, do not proceed to set up the timer

    // Set up a timer to update the time left every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, [isMounted]); // This effect depends on the isMounted state

  // This function calculates the time left until the election date
  function calculateTimeLeft() {
    // Election date in Eastern Time
    const electionDate = new Date("November 5, 2024 00:00:00").getTime();
    const now = new Date().getTime();

    // Get the user's timezone offset and adjust to Eastern Time
    const localOffset = new Date().getTimezoneOffset() * 60000;
    const estOffset = -5 * 60 * 60000; // Eastern Time Zone offset
    const nowEST = now + localOffset + estOffset;

    // Calculate the difference between the current time and the election date
    const difference = electionDate - nowEST;

    // Initialize an object to store the time left
    let timeLeft = {};

    // If the difference is positive, calculate the time left
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

  // Create an array of JSX elements for the time left components
  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) return null;

    return (
      <span key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  // Render the countdown or a loading message based on the isMounted state
  return (
    <div>
      <h2>Countdown to Election Day (Eastern Time):</h2>
      {isMounted ? (
        timerComponents.length ? (
          timerComponents
        ) : (
          <span>Time's up!</span>
        )
      ) : (
        <div>Loading countdown...</div>
      )}
    </div>
  );
};

export default ElectionCountdown;

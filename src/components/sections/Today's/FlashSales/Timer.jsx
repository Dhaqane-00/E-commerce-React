import React, { useState, useEffect } from "react";

function Timer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else if (prevTime.hours > 0) {
          return {
            ...prevTime,
            hours: prevTime.hours - 1,
            minutes: 59,
            seconds: 59,
          };
        } else if (prevTime.days > 0) {
          return {
            ...prevTime,
            days: prevTime.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        } else {
          clearInterval(timer);
          return prevTime;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 text-black whitespace-nowrap min-w-[240px] w-[302px]">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <React.Fragment key={unit}>
          <div className="flex flex-col min-h-[50px]">
            <div className="text-xs font-medium">
              {unit.charAt(0).toUpperCase() + unit.slice(1)}
            </div>
            <div className="mt-1 text-3xl font-bold tracking-widest leading-none">
              {value.toString().padStart(2, "0")}
            </div>
          </div>
          {unit !== "seconds" && (
            <div className="flex self-end mt-7 min-h-[16px]" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default Timer;

import { useEffect, useState } from "react";

interface CountdownTimerProps {
  endDate: Date;
}

const CountdownTimer = ({ endDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  return (
    <div className="flex items-center gap-1 text-sm font-semibold text-deal-purple">
      <span>{String(timeLeft.hours).padStart(2, "0")}:</span>
      <span>{String(timeLeft.minutes).padStart(2, "0")}:</span>
      <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
    </div>
  );
};

export default CountdownTimer;
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
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const hours = Math.floor(distance / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  return (
    <div className="flex items-center gap-1 text-sm font-medium">
      <div className="bg-deal-discount/10 px-2 py-1 rounded">
        {String(timeLeft.hours).padStart(2, "0")}h
      </div>
      <div className="bg-deal-discount/10 px-2 py-1 rounded">
        {String(timeLeft.minutes).padStart(2, "0")}m
      </div>
      <div className="bg-deal-discount/10 px-2 py-1 rounded">
        {String(timeLeft.seconds).padStart(2, "0")}s
      </div>
    </div>
  );
};

export default CountdownTimer;
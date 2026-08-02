"use client";

import * as React from "react";

interface CountdownProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(targetDate: string): TimeLeft {
  const difference = new Date(targetDate).getTime() - new Date().getTime();
  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = React.useState<TimeLeft>(() => getTimeLeft(targetDate));

  React.useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft(targetDate)), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { label: "Tage", value: timeLeft.days },
    { label: "Stunden", value: timeLeft.hours },
    { label: "Minuten", value: timeLeft.minutes },
    { label: "Sekunden", value: timeLeft.seconds },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {units.map((unit) => (
        <div
          key={unit.label}
          className="border border-primary/30 bg-background/40 px-4 py-5 text-center backdrop-blur-sm"
        >
          <div className="font-serif text-4xl font-normal text-primary md:text-5xl">
            {String(unit.value).padStart(2, "0")}
          </div>
          <div className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-cream/70">{unit.label}</div>
        </div>
      ))}
    </div>
  );
}

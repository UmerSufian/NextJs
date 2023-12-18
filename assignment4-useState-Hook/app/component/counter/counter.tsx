// Counter component
"use client"
import { useState } from "react";
import Button from "../button/button";

export default function Counter() {
  const names = ["Umer", "Usama", "Usman", "Salman", "Sarmad", "Zohaib", "Ahmed"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const onClickPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + names.length) % names.length);
  };

  const onClickNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % names.length);
  };

  return (
    <div className="flex items-center justify-center">
      <Button title="Previous" onClickHandler={onClickPrevious} />
      <span className="mx-4 text-2xl font-bold">{names[currentIndex]}</span>
      <Button title="Next" onClickHandler={onClickNext} />
    </div>
  );
}

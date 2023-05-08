import { useEffect, useState } from "react";

export function DemoPage() {
  // use effect is called on initial render or anytime its dependencies change

  const [counter, setCounter] = useState(0);
  const [stars, setStars] = useState("");

  // increment variable value by 1
  const handleOnClick = () => {
    setCounter(counter + 1); //
  };

  useEffect(() => {
    console.log("counter has been updated", counter);
    setStars((prevStars) => prevStars + "*");
  }, []);

  // show counter value on screen alert
  const showCounter = () => {
    window.alert(`Count is ${counter}`);
  };

  return (
    <div>
      Counter {counter}
      <button onClick={handleOnClick}>Increment</button>
      <button onClick={showCounter}>show</button>
      <p>{stars}</p>
    </div>
  );
}

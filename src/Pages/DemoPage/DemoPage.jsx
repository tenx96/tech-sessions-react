import { useEffect, useState } from "react";

export function DemoPage() {
  // use effect is called on initial render or anytime its dependencies change

  const [counter, setCounter] = useState(0);

  // increment variable value by 1
  const handleOnClick = () => {
    setCounter(counter + 1); //
    // showCounter() // guess what this number would show
  };

  // useEffect(() => {
  //   if(counter > 0){
  //     showCounter()
  //   }
  // }, [counter]);

  // show counter value on screen alert
  const showCounter = () => {
    window.alert(`Count is ${counter}`);
  };

  return (
    <div>
      Counter {counter}
      <button onClick={handleOnClick}>Increment</button>
      <button onClick={showCounter}>show</button>
    </div>
  );
}

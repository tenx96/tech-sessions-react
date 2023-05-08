import { useState } from "react";

export function DemoPage() {


  // react works using rerenders and states
  // if we need to show something on the screen and expect your component to update on its change 
  // you need to maintain the variable in a hook

  const [counter,setCounter] = useState(0)

  // increment variable value by 1
  const handleOnClick = () => {
      // setCounter(counter++) // you should not update state like this as it modifies the original state without notifying the component and component behaviour will be hard to predict
      setCounter(counter + 1) // this does not update the actual counter so its fine
      // setCounter((prev) => prev + 1) // this is another way to set state by passing a callback which has the previous value
  };

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

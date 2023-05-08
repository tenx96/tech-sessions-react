export function DemoPage() {


  // react works using rerenders and states
  // if we try to use a normal variable as a value holder and we need to show it on the screen
  // it will not update the UI, unless it is explicitly called in a function
  // in this case `showCounter` will show the right count
  // but the div with the counter value will always be 1 (untill it is rerendered and gets a change to use the latest value)

  // a normal variable
  let counter = 1;


  // increment variable value by 1
  const handleOnClick = () => {
    counter += 1;
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

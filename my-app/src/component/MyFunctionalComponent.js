import React, { useEffect, useState } from "react";

function MyFunctionalComponent() {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    document.title = `clicked ${count} times`;
  }, [count]);

  const addClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const click = () => {
    setDate(new Date());
  };

  return (
    <div>
      <p>Time: {date.toLocaleTimeString()}</p>
      <p>
        <button type="button" onClick={addClick}>
          click
        </button>
      </p>
    </div>
  );
}

export default MyFunctionalComponent;

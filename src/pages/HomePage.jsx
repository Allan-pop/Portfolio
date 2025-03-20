import React from "react";

function HomePage() {
 const [count, setCount] = React.useState(0);

  return (
  <div>
      <h1>Welcome to the Home Page</h1>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}    

export default HomePage;



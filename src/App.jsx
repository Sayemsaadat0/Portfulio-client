import React, { useState, useEffect } from 'react';

function App() {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    const storedVisitCount = localStorage.getItem('visitCount');
    if (storedVisitCount) {
      const newVisitCount = parseInt(storedVisitCount) + 1;
      console.log(newVisitCount);
      setVisitCount(newVisitCount);
      localStorage.setItem('visitCount', newVisitCount.toString());
    } else {
      setVisitCount(1);
      localStorage.setItem('visitCount', '1');
    }
  }, []);

  return (
    <div>
      <h1>Welcome to My Website</h1>
      <p>This website has been visited {visitCount} times.</p>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';

function App() {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    // Get the current visit count from local storage.
    const storedVisitCount = localStorage.getItem('visitCount');

    // If the visit count is stored, increase it by 1.
    if (storedVisitCount) {
      const newVisitCount = parseInt(storedVisitCount) + 1;
      setVisitCount(newVisitCount);
      localStorage.setItem('visitCount', newVisitCount.toString());
    } else {
      // If it's not stored, initialize it to 1 and store it in local storage.
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

import React, { useState, useEffect } from 'react';

const DataFetchingComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data and update state
    // fetchData().then((result) => setData(result));
  }, []); // Empty dependency array means it runs once after the initial render

  return <p>Data: {data}</p>;
};

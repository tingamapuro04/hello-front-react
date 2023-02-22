import React from 'react';
import { useSelector } from 'react-redux';

const Greeting = () => {
  const data = useSelector((state) => state.apidata.data);

  return (
    <div>
      we are now connected to
      {data && <h1>{data.language}</h1>}
      {data && <p>{data.body}</p>}
    </div>
  );
};

export default Greeting;

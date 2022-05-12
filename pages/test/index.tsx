import React, { useState } from 'react';

import react, { useEffect } from 'react';
export default function Test() {
  const [query, setQuery] = useState('');
  const [displayMessage, setDisplayMessage] = useState('');

  useEffect(() => {
    const timeOutId = setTimeout(() => setDisplayMessage(query), 1000);
    return () => clearTimeout(timeOutId);
  }, [query]);

  return (
    <>
      <input type="text" value={query} onChange={(event) => setQuery(event.target.value)} />
      <p>{displayMessage}</p>
    </>
  );
}

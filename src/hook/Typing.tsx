import react, { useEffect, useState } from 'react';

export function useSearchDebounce(delay = 1000) {
  const [search, setSearch] = useState(null); // post
  const [searchQuery, setSearchQuery] = useState(null); // content
  useEffect(() => {
    const delayFn = setTimeout(() => setSearch(searchQuery), delay);
    return () => clearTimeout(delayFn);
  }, [searchQuery, delay]);

  return [search, setSearchQuery];
}

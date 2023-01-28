import { useLocation } from 'react-router';

function useSearchQuery() {
  const location = useLocation();

  return new URLSearchParams(location.search);
}

export default useSearchQuery;

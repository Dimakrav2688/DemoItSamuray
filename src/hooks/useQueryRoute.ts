// @ts-ignore
import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';



function pushQueryRoute(history: any, query: any) {
  history.push(`${history.location.pathname}?${query.toString()}`);
}

function useQuery(path: any) {
  const location = useLocation();
  return useMemo(() => {
    const isPathMatchedCurrentUrl = typeof path === "string"
      ? location.pathname === path
      : null;

    return {
      query: new URLSearchParams(location.search),
      pushQueryRoute,
      queryParamsRaw: location.search,
      isPathMatchedCurrentUrl,
    };
  }, [location.pathname, location.search, path]);
}

export default useQuery;
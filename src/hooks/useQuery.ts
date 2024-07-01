import { useState, useEffect, useCallback } from "react";

interface UseQueryResult<T> {
  data: T | null;
  isLoading: boolean;
  isError: boolean;
  error: any;
}

const useQuery = <T,>(queryFn: () => Promise<T>): UseQueryResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setIsError(false);
    setError(null);

    try {
      const result = await queryFn();
      setData(result);
    } catch (err) {
      setIsError(true);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, [queryFn]);

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, isError, error };
};

export default useQuery;

import { useQuery, UseQueryResult } from '@tanstack/react-query';
import axios from 'axios';

export const fetchResource = async <T>(url: string): Promise<T> => {
  const response = await axios.get<T>(url);
  return response.data;
};

export const useResource = <T>(
  queryKey: string,
  url: string,
  staleTime = 10000
): UseQueryResult<T, Error> => {
  return useQuery<T, Error>({
    queryKey: [queryKey],
    queryFn: () => fetchResource<T>(url),
    staleTime,
  });
};

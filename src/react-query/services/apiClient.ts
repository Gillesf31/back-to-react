import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

class APIClient<T> {
  constructor(private readonly endpoint: string) {}

  getAll = () =>
    axiosInstance.get<T[]>(this.endpoint).then((response) => response.data);

  post = (data: T) =>
    axiosInstance
      .post<T>(this.endpoint, data)
      .then((response) => response.data);
}

export default APIClient;

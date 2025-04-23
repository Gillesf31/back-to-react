import apiClient from './api-client';

export type User = {
  id: number;
  name: string;
};

class UserService {
  public getAllUsers() {
    const controller = new AbortController();
    const request = apiClient.get<User[]>('/users', {
      signal: controller.signal,
    });

    return { request, cancel: () => controller.abort() };
  }

  public deleteUser(user: User) {
    return apiClient.delete(`/users/${user.id}`);
  }

  public createUser(user: User) {
    return apiClient.post('/users', user);
  }

  public updateUser(user: User) {
    return apiClient.patch(`/users/${user.id}`, user);
  }
}

export default new UserService();

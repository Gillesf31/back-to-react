import apiClient from './api-client';

interface Entity {
  id: number;
}

class HttpService {
  constructor(public endpoint: string) {}

  public getAll<T>() {
    const controller = new AbortController();
    const request = apiClient.get<T[]>(this.endpoint, {
      signal: controller.signal,
    });

    return { request, cancel: () => controller.abort() };
  }

  public delete(id: number) {
    return apiClient.delete(`${this.endpoint}/${id}`);
  }

  public create<T>(entity: T) {
    return apiClient.post(this.endpoint, entity);
  }

  public update<T extends Entity>(entity: T) {
    return apiClient.patch(`${this.endpoint}/${entity.id}`, entity);
  }
}

const create = (endpoint: string) => {
  return new HttpService(endpoint);
};

export default create;

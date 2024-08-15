import * as request from './requester';

const BASE_URL = 'http://localhost:3030/jsonstore/users';

export const getCurrent = (userId: string): Promise<UserItem> => request.get<UserItem>(`${BASE_URL}/${userId}`);

export const usersApi = {
  getCurrent
};
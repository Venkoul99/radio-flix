type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface RequestOptions {
  method?: Method;
  headers?: Record<string, string>;
  body?: string;
}

async function requester<T>(method: Method, url: string, data?: unknown): Promise<T> {
  const options: RequestOptions = {};

  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    options.headers = {
      ...options.headers,
      'X-Authorization': accessToken,
    };
  }

  if (method !== 'GET') {
    options.method = method;
  }

  if (data) {
    options.headers = {
      ...options.headers,
      'Content-Type': 'application/json',
    };

    options.body = JSON.stringify(data);
  }

  const response = await fetch(url, options);
  const result: T = await response.json();

  if (!response.ok) {
    throw result;
  }

  return result;
}

export const get = requester.bind(null, 'GET') as <T>(url: string) => Promise<T>;
export const post = requester.bind(null, 'POST') as <T>(url: string, data?: unknown) => Promise<T>;
export const put = requester.bind(null, 'PUT') as <T>(url: string, data?: unknown) => Promise<T>;
export const del = requester.bind(null, 'DELETE') as <T>(url: string) => Promise<T>;

export default {
  get,
  post,
  put,
  del,
};

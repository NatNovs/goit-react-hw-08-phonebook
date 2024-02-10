import { api } from './api';

export async function signUp(body) {
  const { data } = await api.post('/users/signup', body);
  return data;
}
export async function signIn(body) {
  const { data } = await api.post('/users/login', body);
  return data;
}
export async function logout() {
  const { data } = await api.post('/users/logout');
  return data;
}
export async function refresh() {
  const { data } = await api.get('/users/current');
  return data;
}
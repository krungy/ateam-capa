import { ApiReturnType } from '~types/index';

export const fetchApi = async () => {
  const { REACT_APP_API_URL } = process.env;

  const API_URL = `${REACT_APP_API_URL}/requests`;

  const result = await fetch(API_URL);
  const data: ApiReturnType[] = await result.json();
  return data;
};

import { useEffect, useState } from 'react';

import type { User } from '../types';

export const getUsers = async (): Promise<User[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const { ok, status, statusText } = response;
  if (!ok) throw new Error(`${status} ${statusText}`);
  return response.json();
};

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    getUsers()
      .then((data) => {
        setUsers(data);
        setError(null);
      })
      .catch((err) => {
        setUsers([]);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { users, isLoading, error };
};

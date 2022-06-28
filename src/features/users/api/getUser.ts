import { useEffect, useState } from 'react';

import type { Id, User } from '../types';

export const getUser = async (id: Id): Promise<User> => {
  if (Number.isNaN(id)) throw new Error('wrong user id');

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const { ok, status, statusText } = response;

  if (!ok) throw new Error(`${status} ${statusText}`);

  return response.json();
};

export const useUser = (id: Id) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    getUser(id)
      .then((data) => {
        setUser(data);
        setError(null);
      })
      .catch((err) => {
        setUser(null);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return { user, isLoading, error };
};

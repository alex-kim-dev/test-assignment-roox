import { useState } from 'react';

import type { Comment, Id, User, UserProfileData } from '../types';

const prepData = (data: UserProfileData): DeepPartial<User & Comment> => ({
  name: data.name,
  username: data.username,
  email: data.email,
  address: {
    street: data.street,
    city: data.city,
    zipcode: data.zipcode,
  },
  phone: data.phone,
  website: data.website,
  comment: data.comment,
});

export const updateUserProfile = async (
  id: Id,
  data: DeepPartial<User & Comment>
): Promise<User> => {
  if (Number.isNaN(id)) throw new Error('wrong user id');

  console.info(`PATCH /users/${id}, json body:`, JSON.stringify(data, null, 2));

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    { method: 'PATCH', body: JSON.stringify(data) }
  );
  const { ok, status, statusText } = response;

  console.info(`Response: ${status} ${statusText}`);

  if (!ok) throw new Error(`${status} ${statusText}`);

  return response.json();
};

export const useUpdateUserProfile = (id: Id) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const update = async (data: UserProfileData) => {
    const dataToSend = prepData(data);
    setLoading(true);

    try {
      const resData = await updateUserProfile(id, dataToSend);
      setUser(resData);
      setError(null);
    } catch (err: any) {
      setUser(null);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { user, updateUserProfile: update, isLoading, error };
};

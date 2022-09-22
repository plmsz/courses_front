import { ChangeEvent, useState } from 'react';

export function UpdateUserName() {
  const [user, setUser] = useState({
    name: 'user',
    email: 'user@example.com',
    image: ['cover.png', 'profile.png'],
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.image}</p>
      <form>
        <input
          name='name'
          type='text'
          placeholder='type new username'
          onChange={handleChange}
        />
        <input
          name='email'
          type='email'
          placeholder='type new email'
          onChange={handleChange}
        />
      </form>
    </>
  );
}

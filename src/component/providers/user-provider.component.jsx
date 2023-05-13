import React, { useState } from 'react';
import { loginUser } from '../../data/user';

export const UserContext = React.createContext(null);

/**
 * @param {{
 *  children: React.ReactNode;
 * }} props Component props
 * @returns 
 */
const UserProvider = (props) => {
  const [user, setUser] = useState(null);
  const [token , setTokent] = useState(null);
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();
    const loginResponsr = await loginUser(email, password);
    setUser(loginResponsr.user);
    setTokent(loginResponsr.token)
    return loginResponsr.user;
  }
  return (
    <UserContext.Provider value={{ user, setUser,handleLogin }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
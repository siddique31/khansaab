import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

export default function Auth({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = async () => {
    const { user, error } = await supabase.auth.signUp({ email, password });
    if (error) alert(error.message);
    else setUser(user);
  };

  const signIn = async () => {
    const { user, error } = await supabase.auth.signIn({ email, password });
    if (error) alert(error.message);
    else setUser(user);
  };

  return (
    <div>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={signUp}>Sign Up</button>
      <button onClick={signIn}>Sign In</button>
    </div>
  );
}

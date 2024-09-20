import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'
import { useEffect } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();
  useEffect(() => {
    const Authenticated = sessionStorage.getItem('auth')
    if (Authenticated === 'true') {
      navigate('/')
    }
  }, [navigate])
  

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (username === 'tamil' && password === 'tamil') {
      sessionStorage.setItem('auth', 'true');
      const login = Date.now()
      const expired=login+1000*60*5
      sessionStorage.setItem('loginTime', login)
      sessionStorage.setItem('expiryTime',expired)
      navigate('/');

    } else {
      alert('Invalid username or password');
    } 
  };

  return (
    <div className='login'>
      <div className='login-container'>
       <div> <h1>Login Page</h1></div>
         <form onSubmit={handleSubmit}>
           <input type="text"  placeholder="Username" value={username}  onChange={(e) => setUsername(e.target.value)}/>
           <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /> <br />
           <button type="submit">Login</button>
         </form>
      </div>
    </div>
  );
};

export default Login;

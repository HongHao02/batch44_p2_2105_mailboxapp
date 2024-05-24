import routes from '@/config/routes';
import { Button } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Logic đăng nhập
    const loginSuccessful = true; // Kết quả giả định của đăng nhập

    console.log('onlick ')
    if (loginSuccessful) {
      navigate(routes.mailBox);
    }
  };

  return (
    <div className='flex justify-center items-center h-screen gap-4'>
      <h1>Login Page</h1>
      <Button variant='contained' color='success' onClick={handleLogin}>Login</Button>
      <Outlet />
    </div>
  );
};

export default LoginForm;

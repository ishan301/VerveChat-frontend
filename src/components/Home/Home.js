import React from 'react';
import { useEffect } from 'react';
import { fetchUser } from '../../utils/fetchUser';
import { useNavigate } from 'react-router-dom';


const Home = () => {

  const userInfo = fetchUser();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!userInfo) navigate("/login", { replace: true });
  }, [navigate, userInfo]);


  return (
    <div>Home</div>
  )
}

export default Home
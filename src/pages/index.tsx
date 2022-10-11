import type { NextPage } from 'next'
import { HomeLayout } from '@/layout/home'
import { useEffect } from 'react';
import Router from 'next/router';

const Home: NextPage = () => {
  useEffect(() => {
    const infos = localStorage.getItem("CEP_INFOS");
    if (infos) Router.push("/offers")      
  }, [])
  
  return (
    <HomeLayout />
  )
}

export default Home
import type { NextPage } from 'next'
import { OffersLayout } from '@/layout/offers'
import { useEffect } from 'react'
import Router from 'next/router'

const Offers: NextPage = () => {
  useEffect(() => {
    const infos = localStorage.getItem("CEP_INFOS");
    if (!infos) Router.push("/")      
  }, [])

  return (
    <OffersLayout />
  )
}

export default Offers
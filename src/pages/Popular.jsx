import React from 'react'
import { Header } from '../components/fragments/Header'
import { Footer } from '../components/fragments/Footer'
import { ListPopular } from '../components/fragments/ListPopular'

export const Popular = () => {
  return (
    <div className="mb-0">
      <Header />
      <ListPopular />
      <Footer />
    </div>
  )
}

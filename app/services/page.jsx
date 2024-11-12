import React from 'react'
import Place from '../_home/Place'
import Address from '../_home/Address'
import ServiceHero from './ServiceHero'
import ServiceCards from './ServiceCards'

export default function page() {
  return (
    <>
        <ServiceHero/>
        <ServiceCards/>
        <Place/>
        <Address/>
    </>
  )
}

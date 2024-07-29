import Blockfive from '@/components/Blockfive'
import Blockfour from '@/components/Blockfour'
import Blockone from '@/components/Blockone'
import Blocksix from '@/components/Blocksix'
import Blocktwo from '@/components/Blocktwo'
import Footer from '@/components/Footer'
import Hackspace from '@/components/Hackspace'
import Hero from '@/components/Hero'
import Metalworks from '@/components/Metalworks'
import Projectgallery from '@/components/Projectgallery'
import React from 'react'

const Home = () => {
  return (
    <div>
      
      <Hero/>
      <Blockone/>
      <Metalworks/>
      <Blocktwo/>
      <Blockfour/>
      <Hackspace/>
      <Blockfive/>
      <Blocksix/>
      <Projectgallery/>
      <Footer/>

    </div>
  )
}

export default Home 
import React from 'react'
import NftCard from '../../components/nftCard/NftCard'
import './explore.scss'
import {bayc, mayc, ghost, azuki} from "../../data/nftData"

const Explore = () => {

  let newBayc = bayc.slice(0, 4)
  let newMayc = mayc.slice(0, 4)
  let newGhost = ghost.slice(0, 4)
  let newAzuki = azuki.slice(0, 4)

  let allNft = [...newBayc, ...newGhost, ...newMayc, ...newAzuki]

  // console.log(allNft)
  return (
    // explore nft collection
    <div className='padding'>
      <h1 className='heading'>Explore</h1>
      <p className="subheading">Collection of Top NFTs</p>

      <div className='grid'>
        {
          allNft.map((nft, index) => (
            <NftCard nft={nft} key={index} />
          ))
        }
      </div>
    </div> 
  )
}

export default Explore
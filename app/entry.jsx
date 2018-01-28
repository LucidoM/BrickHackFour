import { h, app } from "hyperapp"
import Web3 from 'web3'

import contractConfig from "./contract.json"

// Web 3 Configuration: 
const web3 = new Web3(Web3.givenProvider);

function getVideo(contract, pos){
  return contract.methods.all(pos).call()
}

function getAllVideos(contract){
    return contract.methods.getCount().call()
      .then(results => {
        const count = parseInt(results)
        console.log(count)
        const videos = [] 
        for(let i = 0; i < count; i++) videos.push(getVideo(contract, i))
        return Promise.all(videos)
      })
      .then(videos => videos)
}

// Hyperapp Configuration:

const state = {
  manifest: new web3.eth.Contract(contractConfig,"0xE059272c6DAA50850D209f9683Eb18bA1320D241"),
  videos: []
}

const actions = {
  updateVideos: videos => state => {
    console.log(videos)
    return {
      ...state, 
      videos: videos 
    }
  },
  fetchVideos: () => (state, actions) => {
    getAllVideos(state.manifest).then(actions.updateVideos)
    return state 
  }
}

const view = (state, actions) => {
  return (
    <main oncreate={actions.fetchVideos}>
      <ul>
        {state.videos.map(video => (<li>{video}</li>))}
      </ul>
    </main>
  )
}
window.main = app(state, actions, view, document.body)


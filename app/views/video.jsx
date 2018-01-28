import {h} from "hyperapp"
import { Link, Route, location } from "@hyperapp/router"

const Video = ({onVideo, vid, match}) => {
  console.log(vid, match);
  const hash = match.params.id
  if(vid == null){
    onVideo(match.params.id) 
    return (<h2>Loading...</h2>)
  }

  return (
    <section> 
        <video width="320" height="240" controls>
            <source
                type="video/mp4"
                src={`https://gateway.ipfs.io/${vid.ipfsLoc}`}
            />
        </video>
    </section>
  )
}

export default Video
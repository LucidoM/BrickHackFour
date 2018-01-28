import {h} from "hyperapp"
import { Link, Route, location } from "@hyperapp/router"


const Video = ({vid}) => {
    
    const loc = "hello"
    //const loc = `https://ipfs.io/ipns/${vid.hash}`

    return (
        <div> 
            <h1>{vid.title}</h1>
            <video src={loc} autoplay/>
        </div> 
    )
}

export default Video
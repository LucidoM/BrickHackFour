import {h} from "hyperapp"
import { Link } from "@hyperapp/router"
import { getRoutePrefix } from '../utils'

const Home = ({videos}) => {
    console.log(videos)
    const items = videos.map((vid) => {
        const target = `${getRoutePrefix()}/video` //${vid.target}`
        return (
            <li> 
                <Link to ={target}>{vid.title}</Link>
            </li>
        )
    })
    return (
        <ol>
            {items}
        </ol> 
    )
}

export default Home 

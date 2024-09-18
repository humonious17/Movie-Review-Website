import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import '../trailer/Trailer.css'

export default function Trailer() {
    let params = useParams();
    let key = params.ytTrailerId;

    return (

        <div className="react-trailer-container">
            <div className="inner">
            {key && <ReactPlayer controls="true" url={`www.youtube.com/watch?v=${key}`}
                        width='80vw' height='80vh'
                    ></ReactPlayer>}
            </div>
        </div>
    )
}
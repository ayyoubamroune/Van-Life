import { useOutletContext} from "react-router-dom"
import type { VanType } from "../../types"
export default function HostVanDetail() {
    
   const {van} = useOutletContext<{van:VanType}>()
    const vanDetail = van ? <div className="details-info">
        <p><span>Name:</span>{van.name}</p>
        <p><span>Category:</span>{van.type}</p>
        <p><span>Description:</span>{van.description}</p>
        <p><span>Visibility:</span>Public</p>
    </div> : <h2>Loading...</h2>
    return (
        <>
            {vanDetail}
        </>
    )
}

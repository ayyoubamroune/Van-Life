import { useOutletContext } from "react-router-dom"
import type { VanType } from "../../types"

export default function HostVanPhotos() {

    const { van } = useOutletContext<{ van: VanType }>()
    return (
        <>
            {van ? <img className="van-host-images" src={van.imageUrl} alt={van.name} /> : <h2>Loading...</h2>}
        </>
    )
}
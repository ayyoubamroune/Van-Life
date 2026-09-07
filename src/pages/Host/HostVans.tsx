import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import type { VanType } from "../../types"


function Van({ vanData }: { vanData: VanType }) {
    return (
        <Link to={`/host/vans/${vanData.id}`}>
            <div className="host-van">
                <img src={vanData.imageUrl} />
                <div className="host-van-info">
                    <h2>{vanData.name}</h2>
                    <p>${vanData.price}/day</p>
                </div>
            </div>
        </Link>
    )
}


export default function HostVans() {
    const [vans, setVans] = useState<VanType[]>([])
    useEffect(() => {
        fetch("/api/host/vans").then(data => data.json()).then(data => setVans(data.vans))
    }, [])

    const vansComponent = vans.map(van => <Van key={van.id} vanData={van} />)

    return (
        <div className="host-vans">
            {vans.length ? vansComponent : <h2>Loading...</h2>}
        </div>
    )
}
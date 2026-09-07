import { useEffect, useState } from "react";
import '../../server'
import {
    Link
} from 'react-router-dom'
import type { VanType } from "../../types"


function Van({ vanData }: { vanData: VanType }) {
    return (
        <Link to={`/vans/${vanData.id}`} className="vans-link">
            <div className="van">
                <img src={vanData.imageUrl} alt={vanData.name} />
                <div className="van-info">
                    <h3>{vanData.name}</h3>
                    <p>${vanData.price}<br /><span>/day</span></p>
                </div>
                <i className={`van-type ${vanData.type} selected`}>{vanData.type}</i>
            </div>
        </Link>
    )
}

export default function Vans() {
    const [vans, setVans] = useState<VanType[]>([])

    useEffect(() => {
        fetch("/api/vans").then(data => (data.json())).then(data => setVans(data.vans))
    }, [])
    return (

        <div className="vans-container" >
            <h1>Explore our van options</h1>
            <div className="vans-title">
                {vans.length ? [...new Set(vans.map(van => van.type))].map(type => <button>{type}</button>) : null}
                <Link to="/vans" className="clear-btn">Clear filters</Link>
            </div>
            <div className="vans">
                {vans.length ? vans.map(van => <Van key={van.id} vanData={van} />) : null}
            </div>
        </div>
    )

}

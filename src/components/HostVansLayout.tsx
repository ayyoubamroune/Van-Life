import { useEffect, useState } from "react"
import { Link, NavLink, Outlet, useParams } from "react-router-dom"
import type { VanType } from "../types"

export default function HostVansLayout() {
    const params = useParams()
    const [van, setVan] = useState<VanType | null>(null)
    useEffect(() => {
        fetch(`/api/host/vans/${params.id}`).then(data => data.json())
            .then(data => setVan(data.vans[0]))
    },
        [params.id])

    return (
        <div className="host-van-detail-container">
            {van ? (
                <section >
                    <Link
                        to=".."
                        relative="path"
                        className="back-button"
                    >
                        &larr;<span>Back to all vans</span>
                    </Link>
                    <div className="host-van-detail">
                        <div>
                            <img alt={van.name} src={van.imageUrl} />
                            <div>
                                <i className={`van-type ${van.type} selected`}>
                                    {van.type}
                                </i>
                                <section>
                                    <h1>{van.name}</h1>
                                    <p className="van-price"><span>${van.price}</span>/day</p>
                                </section>
                            </div>
                        </div>
                        <nav>
                            <NavLink to={`/host/vans/${params.id}`}
                                end
                                className={({ isActive }) => isActive ? 'selected' : undefined}>
                                Details
                            </NavLink>
                            <NavLink to={`/host/vans/${params.id}/pricing`}
                                className={({ isActive }) => isActive ? 'selected' : undefined}>
                                Pricing
                            </NavLink>
                            <NavLink to={`/host/vans/${params.id}/photos`}
                                className={({ isActive }) => isActive ? 'selected' : undefined}>
                                Photos
                            </NavLink>
                        </nav>
                        <Outlet context={{ van }} />
                    </div>
                </section>
            ) : <h2>Loading...</h2>}
        </div>
    )
}
import { useOutletContext } from "react-router-dom"
import type { VanType } from "../../types"

export default function HostVanPricing() {


    const { van } = useOutletContext<{ van: VanType }>()

    const vanPricing = van ? <p>
        <p className="host-van-pricing"><span>${van.price}.00</span>/day</p>
    </p>
        : <h2>Loading...</h2>
    return (
        <>
            {vanPricing}
        </>
    )
}
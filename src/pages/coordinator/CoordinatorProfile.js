import React from 'react'
import { useSearchParams } from "react-router-dom";

const CoordinatorProfile = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [[keyId, id], [keyToken, token]] = searchParams;

    return (
        <div>
            <div>CoordinatorProfile</div>
        </div>
    )
}

export default CoordinatorProfile
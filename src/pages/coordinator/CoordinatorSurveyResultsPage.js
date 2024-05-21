import React from 'react'
import { useSearchParams } from "react-router-dom";

const CoordinatorSurveyResultsPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [[keyId, id], [keyToken, token]] = searchParams;

    return (
        <div>
            <div>CoordinatorSurveyResultsPage</div>
        </div>
    )
}

export default CoordinatorSurveyResultsPage
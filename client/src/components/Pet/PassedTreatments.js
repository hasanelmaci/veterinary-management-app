import React from 'react'

function PassedTreatments({passedtreatments}) {
    return (
        <>
            <tr>
                <td>
                    {passedtreatments.type}
                </td>
                <td>
                {passedtreatments.medicine}
                </td>
                <td>
                {passedtreatments.number}
                </td>
                <td>
                {passedtreatments.date}
                </td>
            </tr>
        </>
    )
}

export default PassedTreatments

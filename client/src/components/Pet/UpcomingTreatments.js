import React from 'react'

function UpcomingTreatments({upcomingtreatments}) {
    return (
        <>
            <tr>
                <td>
                    {upcomingtreatments.type}
                </td>
                <td>
                {upcomingtreatments.medicine}
                </td>
                <td>
                {upcomingtreatments.number}
                </td>
                <td>
                {upcomingtreatments.date}
                </td>
                <td>
                    <button>Sil</button>
                </td>
            </tr>
        </>
    )
}

export default UpcomingTreatments

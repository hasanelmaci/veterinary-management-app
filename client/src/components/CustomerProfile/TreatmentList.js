import UpcomingTreatments from './UpcomingTreatments'
import PastTreatments from './PastTreatments'

function TreatmentList({pet}) {
    return (
        <div className="treatment-container">
        <div className="treatment-header "></div>

        <h2>Gelecek Tedaviler</h2>
       
        <table className="treatment-table">
            <thead>
                <tr>
                    <th>Tedavi Türü</th>
                    <th>İlaç</th>
                    <th>Adet</th>
                    <th>Tarih</th>
                    <th>Sil</th>
                </tr>
            </thead>
            <tbody>
                {pet.upcomingtreatments?.map((item) => (
                    <UpcomingTreatments key={item._id} upcomingtreatments={item} pet={pet} />
                ))}
            </tbody>
        </table>
        <h2>Geçmiş Tedaviler</h2>
      
        <table className="treatment-table">
            <thead>
                <tr>
                    <th>Tedavi Türü</th>
                    <th>İlaç</th>
                    <th>Adet</th>
                    <th>Tarih</th>
                    <th>Sil</th>
                </tr>
            </thead>
            <tbody>
                {pet.pasttreatments?.map((item) => (
                    <PastTreatments key={item._id} pasttreatments={item} pet={pet} />
                ))}
            </tbody>
        </table>
    </div>
    )
}

export default TreatmentList

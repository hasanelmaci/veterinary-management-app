import {useState} from 'react';
import UpcomingTreatments from "./UpcomingTreatments";
import PassedTreatments from "./PassedTreatments"

function TreatmentList({pet}) {

    const [treatmentType,setTreatmentType] = useState('upcoming')

    const handleType = (e) =>{
        setTreatmentType(e.target.className)
    }

    return (
        <div className="treatment-container">
            <div className="treatment-header">
            <h2 className='passed' name='passed' onClick={(e)=>handleType(e)}>Geçmiş Tedaviler</h2>
            <h2 className='upcoming' onClick={(e)=>handleType(e)}>Gelecek Tedaviler</h2>
            </div>
            <table className="treatment-table">
                <thead>
                    <tr>
                        <th>Tedavi Türü</th>
                        <th>Kullanılan İlaç</th>
                        <th>Adet</th>
                        <th>Tarih</th>
                    </tr>
                </thead>
                <tbody>
                  {
                    treatmentType === 'upcoming' ? 
                  pet.upcomingtreatments.map((item)=>(
                     <UpcomingTreatments upcomingtreatments={item}/>
                  ))
                  :
                  pet.passedtreatments.map((item)=>(
                    <PassedTreatments passedtreatments={item}/>
                 ))
                  
                  }
                </tbody>
            </table>
        </div>
    );
}

export default TreatmentList;

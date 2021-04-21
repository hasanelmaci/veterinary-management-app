import {useState} from 'react';
import UpcomingTreatments from "./UpcomingTreatments";
import PassedTreatments from "./PassedTreatments"
import AddTreatment from './AddTreatment';

function TreatmentList({pet}) {

    const [treatmentType,setTreatmentType] = useState('upcoming')

    const handleType = (e) =>{
        setTreatmentType(e.target.className)
    }

    return (
        <div className="treatment-container">
            <div className="treatment-header">
            <h2 className='passed' style={{textDecoration:treatmentType==='passed' && 'underline'}} onClick={(e)=>handleType(e)}>Geçmiş Tedaviler</h2>
            <h2 className='upcoming' style={{textDecoration:treatmentType==='upcoming' && 'underline'}} onClick={(e)=>handleType(e)}>Gelecek Tedaviler</h2>
            </div>
            <AddTreatment treatmentType={treatmentType} pet={pet}/>
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

import React from 'react'
import './Available.css';
function Available() {

    const audiData = [
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGoph0Z1QKNLYGj1vSdkZY7l4GFEgL9OWVsQ&s",
            name : "K.S.Auditorium",
            location : "B-Block",
            maxStrength : "400",
            chargingFacility : "NO",
            FreqUsage : "Workshops and Club Events"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGoph0Z1QKNLYGj1vSdkZY7l4GFEgL9OWVsQ&s",
            name : "A.P.J Abdul Kalam Auditorium",
            location : "D-Block",
            maxStrength : "150",
            chargingFacility : "Yes",
            FreqUsage : "Workshops and Club Events"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGoph0Z1QKNLYGj1vSdkZY7l4GFEgL9OWVsQ&s",
            name : "B-block Seminar Hall",
            location : "B-Block",
            maxStrength : "100",
            chargingFacility : "NO",
            FreqUsage : "Speakers"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGoph0Z1QKNLYGj1vSdkZY7l4GFEgL9OWVsQ&s",
            name : "PEB-Seminar Hall",
            location : "PEB-Block",
            maxStrength : "150",
            chargingFacility : "YES",
            FreqUsage : "Workshops"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGoph0Z1QKNLYGj1vSdkZY7l4GFEgL9OWVsQ&s",
            name : "MBA Seminar Hall",
            location : "MBA-Block",
            maxStrength : "200",
            chargingFacility : "NO",
            FreqUsage : "Talks/Speakers"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGoph0Z1QKNLYGj1vSdkZY7l4GFEgL9OWVsQ&s",
            name : "PG SEMINAR HALL",
            location : "PG_BLOCK",
            maxStrength : "200",
            chargingFacility : "NO",
            FreqUsage : "Talks/Speakers"
        },

    ]
  return (
    <div className='d-flex justify-content-center align-items-center'>
        <div className=' hall'>
            {
                audiData.map((audi)=>(
                    <div className='card w-25 mx-z mt-5 mb-5'>
                        <div className='card-body '>
                        {/* <div className='border border-solid border-dark'> */}
                        <div className='text-center'>
                        <a className='btn'><img src={audi.image} alt=""/></a>
                        </div>
                        <h6 className='text-center'>{audi.name}</h6>
                        {/* </div> */}
                        </div>
                    </div>
                ))
            }
        </div>
        
    </div>
  )
}

export default Available
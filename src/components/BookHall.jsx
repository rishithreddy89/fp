import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import "./BookHall.css"
function BookHall() {
    const {register,handleSubmit}=useForm();
    const navigate=useNavigate();
    function handleFormSubmit(obj){
        console.log(obj);
        fetch('http://localhost:3000/data',
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(obj)
            }
        ).
        then(res=>{
            console.log(res)
        })
        .catch(err=>console.log(err));
    }
  return (
    <div>
        <div className="grid-container ">
            <div className="first">
                <img src="https://img.freepik.com/free-vector/usability-testing-concept-illustration_114360-1592.jpg?ga=GA1.1.218069351.1723573712&semt=ais_hybrid" style={{width:'100%', height:'100vh'}} alt="" />
            </div>
            <div className="second d-flex align-items-center justify-content-center" style={{height:"80vh"}}>
                <form className="w-75" onSubmit={handleSubmit(handleFormSubmit)}>
                    <div className="form-group mb-4">
                        <label className="form-label text-secondary mb-2">Date</label>
                        <input type="date" {...register('date')} id="date" className="form-control"/>
                    </div>
                    <div className="form-group text-secondary mb-4">
                        <label htmlFor="strength" className="form-label mb-2">Strength</label>
                        <input type="number" {...register('strength')} id="strength" className="form-control"/>
                    </div>
                    <div className="form-group text-secondary mb-4">
                        <label className="form-label mb-2">Purpose</label>
                        <textarea className="form-control" {...register('purpose')} rows="3"></textarea>
                    </div>
                    <div className="d-flex justify-content-center ">
                        <button type="submit" className="btn btn-primary w-50" onClick={()=>{navigate('/available')}}>Next</button>
                    </div>

                </form>
                
            </div>
        </div>
    </div>
  )
}

export default BookHall
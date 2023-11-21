import React, { useState } from 'react'
import axios from "axios";
import { API_URL } from '../Env';
import { useNavigate } from 'react-router-dom';
function Create() {
    const [success, setSuccess] = useState("")
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [time, setTime] = useState("");
    const [message, setMessage] = useState("");
  
    const redirect = useNavigate();
    const listdata = { firstName, lastName, email, phone,time,message }
    const addData = async (e) => {
        e.preventDefault();
        await axios.post(API_URL, listdata)
            .then((res) => {
                setSuccess("Data added successfully...!")
                setTimeout(() => {
                    redirect("/read")
                }, 1000)
            })
            .catch((err)=>{
                console.log(err);
             })
    }
    return (
        <div>
            <div className="container">
                <div className="row py-3 mt-2 mb-2">
                    <div className="col-md-6 offset-md-3">
                        <h3>Add User Details</h3>
                        <form onSubmit={addData}>
                            <div className="col-md-6 offset-md-3">
                                <input type="text" placeholder='Enter Firstname' className='form-control' onChange={e => setFirstname(e.target.value)} />
                            </div>
                            <div className="form-group py-2">
                                <input type="text" placeholder='Enter Lastname' className='form-control' onChange={e => setLastname(e.target.value)} />
                            </div>
                            <div className="form-group py-2">
                                <input type="text" placeholder='Enter Email' className='form-control' onChange={e => setEmail(e.target.value)} />
                            </div>
                            <div className="form-group py-2">
                                <input type="text" placeholder='Enter Phone Number' className='form-control' onChange={e => setPhone(e.target.value)} />
                            </div>
                            <div className="form-group py-2">
                                <input type="text" placeholder='Enter Address' className='form-control' onChange={e => setTime(e.target.value)} />
                            </div>

                            <div className="form-group py-2">
                                <input type="text" placeholder='Enter City' className='form-control'  onChange={e => setMessage(e.target.value)} />
                          
                            </div>
                        
                           
                        
                       
                           

                            <button type='submit' className='btn btn-primary'>SUBMIT DETAILS</button>
                        </form>


                        {success && <div class="alert alert-success mt-3" role="alert">
                            {success}
                        </div>}


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Create
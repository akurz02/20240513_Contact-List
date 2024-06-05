import React,{useContext} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Context} from "../store/appContext.js";


const AddContact = () => {

    const navigate = useNavigate();
    const {store, actions} = useContext(Context);
    function handleSubmit(e){
        e.preventDefault()
        const fullName = e.target.name.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        const address = e.target.address.value;
        actions.contactCreate(fullName,phone,email,address,navigate)
    }
    
    return (
        <div className="container">
            <h1 className="text-center">Create a New Contact</h1>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="FullName" class="form-label">Full Name</label>
                    <input type="text" name="name" class="form-control" id="FullName" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" name ="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="PhoneNumber" class="form-label">Phone Number</label>
                    <input type="text" name="phone" class="form-control" id="PhoneNumber" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="Address" class="form-label">Address</label>
                    <input type="text" name="address" class="form-control" id="Address" aria-describedby="emailHelp" />
                </div>
                <button type="submit" class="btn btn-primary">Save</button>
                <br></br>
                <Link to="/">Or get back to Contacts</Link>
            </form>
        </div>
    )

}

export default AddContact;
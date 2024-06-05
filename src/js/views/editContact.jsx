import React,{useContext} from "react";
import {Link, useSearchParams, useNavigate} from "react-router-dom";
import {Context} from "../store/appContext.js";

const EditContact = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const {store, actions} = useContext(Context); // returns ==> {store: {...}, actions: {...}}
    function handleSubmit(e){
        e.preventDefault()
        const fullName = e.target.name.value.length && e.target.name.value || searchParams.get("name");
        const email = e.target.email.value.length && e.target.email.value || searchParams.get("email"); 
        const phone = e.target.phone.value.lentgh && e.target.phone.value || searchParams.get("phone");
        const address = e.target.address.value.length && e.target.address.value || searchParams.get("address");
        actions.editContact(searchParams.get("id"),fullName,phone,email,address,navigate)
    }
    
    return (
        <div className="container">
            <h1 className="text-center">Contact Editor</h1>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="FullName" class="form-label">Full Name</label>
                    <input type="text" name="name" class="form-control" id="FullName" aria-describedby="emailHelp" placeholder={searchParams.get("name")} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" name ="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={searchParams.get("email")} />
                </div>
                <div class="mb-3">
                    <label for="PhoneNumber" class="form-label">Phone Number</label>
                    <input type="text" name="phone" class="form-control" id="PhoneNumber" aria-describedby="emailHelp" placeholder={searchParams.get("phone")} />
                </div>
                <div class="mb-3">
                    <label for="Address" class="form-label">Address</label>
                    <input type="text" name="address" class="form-control" id="Address" aria-describedby="emailHelp" placeholder={searchParams.get("address")} />
                </div>
                <button type="submit" class="btn btn-primary">Save</button>
                <br></br>
                <Link to="/">Or get back to Contacts</Link>
            </form>
        </div>
    )

}

export default EditContact;
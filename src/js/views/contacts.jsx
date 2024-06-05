import React, {useContext} from "react";
import ContactCard from "../component/contactCard.jsx";
import {Context} from "../store/appContext.js";
import { Link } from "react-router-dom";

const Contacts = () => {
    const {store, actions} = useContext(Context);

    return (
        <>
            <div>
                {
                    store.contacts.map(contact => {

                        return (
                            <div className="contact-card text-center" key={contact.id}>
                                <ContactCard name={contact.name} address={contact.address} phone={contact.phone} email={contact.email} />
                                <Link to={`/contacts/edit?name=${contact.name}&address=${contact.address}&phone=${contact.phone}&email=${contact.email}&id=${contact.id}`}>
                                    <button onClick={() => actions.editContact(contact.id)}>Update</button>
                                </Link>
                                <button onClick={() => actions.deleteContact(contact.id)}>Delete</button>
                            </div>
                        )

                    })

                }

            </div>

        </>
    )

}

export default Contacts;
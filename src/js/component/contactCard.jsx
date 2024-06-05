import React from "react";

const ContactCard = ({name, address, phone, email}) => {

    return (
        <>
            <div className="contact">
                <img />
                <div className="contact-info">
                    <p className="contact-name">{name}</p>
                    <p className="contact-phone">{phone}</p>
                    <p className="contact-email">{email}</p>
                    <p className="contact-address">{address}</p>
                </div>
            </div>
        </>
    )
}

export default ContactCard;
import React from "react";
import Contacts from "./contacts.jsx";
import AddContact from "./addContact.jsx";
import "../../styles/home.css";

export const Home = () => (
	<div className="text-center mt-5">
		<div>
			<Contacts />
		</div>
		<div>
			<AddContact />
		</div>
	</div>
);

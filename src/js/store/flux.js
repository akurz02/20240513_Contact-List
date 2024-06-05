const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
		},
		actions: {

			loadAgendaContacts: async () => {
				const response = await fetch("https://playground.4geeks.com/contact/agendas/akurz02");
				if(!response.ok) {
					const requestOptions = {
						method: "POST",
						redirect: "follow"
					  };
					fetch("https://playground.4geeks.com/contact/agendas/akurz02", requestOptions)
					//getActions().loadAgendaContacts()
				}
				const data = await response.json();
				setStore({contacts: data.contacts});
			},

			contactCreate: async (name,phone,email,address,navigate) => {
				const store = getStore();
				const response = await fetch(`https://playground.4geeks.com/contact/agendas/akurz02/contacts/`, {
					method: "POST",
					headers: { "Content-Type": "application/json"},
					body: JSON.stringify({
						name: name,
						phone: phone,
						email: email,
						address: address,
					}),
				});
				if(!response.ok) {
					throw new Error(response.status, response.statusText)
				}
				
				getActions().loadAgendaContacts();
				const data = await response.json();
		  		setStore({ contacts: [...store.contacts, data] });
				navigate("/");
			},
			
			deleteContact: async (id) => {
				const store = getStore();
				const response = await fetch(
				  "https://playground.4geeks.com/contact/agendas/akurz02/contacts/" + id,
				  {
					method: "DELETE",
					headers: { "Content-Type": "application/json" },
				  }
				);
				if(!response.ok) {
					throw new Error(response.status, response.statusText)
				}
				const data = await response.text();
				setStore({
				  contacts: store.contacts.filter((contact) => contact.id !== id),
				});
			},
			editContact: async (id, name, phone, email, address, navigate) => {
				const store = getStore(id);
				const response = await fetch(
				  "https://playground.4geeks.com/contact/agendas/akurz02/contacts/" + id,
				  {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
					  name: name,
					  phone: phone,
					  email: email,
					  address: address,
					}),
				  }
				);
				const data = await response.json();

				//setStore({ contacts: [...store.contacts, data] });
				getActions().loadAgendaContacts()

				navigate("/");
				// return data;
			}
		}
	};
};

export default getState;

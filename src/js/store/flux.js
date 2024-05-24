const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
		},
		actions: {

			loadAgendaContacts: async () => {
				const response = await fetch("https://playground.4geeks.com/contact/agenda/akurz02");
				if(!response.ok) {
					throw new Error(response.status, response.statusText)
				}
				const data = await response.json();
				setStore({contacts: data.contacts});
			},

			contactCreate: async (name,phone,email,address) => {
				const store = getStore();
				const response = await fetch(`https://playground.4geeks.com/contact/agendas/akurz02/contacts/`, {
					method: "POST",
					headers: { "Content-Type": "application/json"},
					body: JSON.stringify({
						full_name: name,
						phone: phone,
						email: email,
						address: address,
						agenda_slug: "akurz02",
					}),
				});
				if(!response.ok) {
					throw new Error(response.status, response.statusText)
				}
				
				getActions().loadAgendaContacts();
				const data = await response.json();
		  		setStore({ contacts: [...store.contacts, data] });
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
				const data = await response.json();
				setStore({
				  contacts: store.contacts.filter((contact) => contact.id !== id),
				});
			},
			editContact: async (id, name, phone, email, address) => {
				const store = getStore();
				const response = await fetch(
				  "https://playground.4geeks.com/contact/agendas/akurz02/contacts/" + id,
				  {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
					  full_name: name,
					  phone: phone,
					  email: email,
					  address: address,
					  agenda_slug: "akurz02",
					}),
				  }
				);
				const data = await response.json();
				setStore({ contacts: [...store.contacts, data] });
			}
		}
	};
};

export default getState;

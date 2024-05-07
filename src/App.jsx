import { useState, useEffect } from 'react'
import initialContacts from './Contacts.json'
import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import ContactList from './components/ContactList/ContactList'

function App() {

const [contacts, setContacts] = useState(initialContacts);

const addContact = (newContact) =>{
  setContacts((prevContact)=>{
   return [...prevContact,newContact];
  });
};


  return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAdd ={addContact}/>
        {/* <SearchBox /> */}
        <ContactList contacts ={contacts} />
      </div>
  )
}

export default App

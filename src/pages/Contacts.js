import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllContacts } from "../redux/contacts/operations";
import { ContactForm } from "components/ContactForm/ContactForm";
import { Loader } from "../components/Loader";

import { ContactList } from "components/ContactList/ContactList";
import { selectError, selectIsLoading } from "../redux/contacts/selectors";
import { Filter } from "components/Filter/Filter";
import { Container } from "@mui/material";

const Contacts = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    
    useEffect(() => {
        dispatch(fetchAllContacts());
      }, [dispatch]);
  
  
    return (
        <div style={{
          background: "#f2f3f4"
        }}>
          <Container maxWidth="sm">
            <h1>Phonebook</h1>
            <ContactForm />
            {loading && !error && <Loader />}
            <h2>Contacts</h2>
            <Filter />
            {error && <h2>{error}</h2>}
            <ContactList  />  
            </Container>
        </div>
  )
}

export default Contacts
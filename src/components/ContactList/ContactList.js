import { useDispatch, useSelector } from "react-redux"
import { Contact, List, ListItems } from "./ContactList.styled"
import {selectVisibleContacts } from "../../redux/contacts/selectors";
import { deleteContact } from "../../redux/contacts/operations";
import { Button } from "@mui/material";

export const ContactList = () => {
    const dispatch = useDispatch();
    const visibleCardItems = useSelector(selectVisibleContacts)
    
    return (
        <List>
            {visibleCardItems.map(item => (
             <ListItems key={item.id}>
                <Contact>{item.name} : {item.number}</Contact>
                <Button 
                variant="outlined"
                color="secondary" 
                onClick={() => dispatch(deleteContact(item.id))}
                size="small"
                >Delete</Button>
             </ListItems>   
            )
                )}
        </List>
    )
    
};
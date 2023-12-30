import { useAuth } from "../../hooks/useAuth";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { Button } from "@mui/material";
import { Container, Text } from "./UserMenu.styled";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    return (
        <Container>
            <Text>Welcome, {user.name}</Text>
            <div style={{
                margin:'auto 5px'
            }}>
            <Button 
            variant="outlined"
            size="medium" 
            color="error"
            onClick={() => dispatch(logOut())}>
            Logout
            </Button>
            </div>
        </Container>
      );
}
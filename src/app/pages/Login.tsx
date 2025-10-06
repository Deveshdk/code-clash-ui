import React, { useState } from "react";
import { LoginBox, LoginGrid, LoginModalGrid, StyledButton } from "../styles/LoginStyle";
import { LOGIN_BUTTON, REGISTER_USER } from "../constants/CodeClashLoginConstants";
import LoginIcon from "@mui/icons-material/Login";
import { LoginModal } from "../components";



export const Login: React.FC = () => {
    const [isLogInModalOpen, setIsLogInModalOpen] = useState<boolean>(false);

    const handleOnClose = () => {
        setIsLogInModalOpen(false);
    }

    return (
        <LoginGrid>
            <LoginBox>
                <StyledButton onClick={()=> setIsLogInModalOpen(true)}><LoginIcon sx={{ mr: 1 }}/>{LOGIN_BUTTON}</StyledButton>
                <StyledButton onClick={()=> setIsLogInModalOpen(true)}><LoginIcon sx={{ mr: 1 }}/>{REGISTER_USER}</StyledButton>
                <LoginModal isModalOpen={isLogInModalOpen} onClose={handleOnClose} />
            </LoginBox>
        </LoginGrid>
    );
};
import React from "react";
import { LoginGrid, StyledButton } from "../styles/LoginStyle";
import { LOGIN_BUTTON } from "../constants/CodeClashLoginConstants";


export const Login: React.FC = () => {

    return (
        <LoginGrid>
            <StyledButton onClick={() => {}}>{LOGIN_BUTTON}</StyledButton>
        </LoginGrid>
    );
};
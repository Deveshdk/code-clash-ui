import { Button, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Login = styled('h1')(({theme}) => ({
    fontSize: '2.5rem',
    fontWeight: 300,
    textAlign: "center",
    color: "black",
    backgroundColor: theme.palette.grey[200]
}));

export const LoginGrid = styled(Grid)(({theme}) => ({
    marginTop: '4rem',
    display: "flex",
    justifyContent: "right",
    marginRight: '2rem'
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#ed7979ff",
  color: "#fff",
  padding: theme.spacing(1.5, 2),
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#622d2dff",
  },
}));

export const LoginModalGrid = styled(Grid)(({theme}) => ({
    marginTop: '4rem',
    display: "flex",
    justifyContent: "center",
    marginRight: '2rem'
}));
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
    marginTop: '10rem',
    display: "flex",
    justifyContent: "center",
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: "#fff",
  padding: theme.spacing(1.5, 4),
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: theme.palette.secondary.dark,
  },
}));
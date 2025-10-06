import { Box, Button, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Login = styled('h1')(({theme}) => ({
    fontSize: '2.5rem',
    fontWeight: 300,
    textAlign: "center",
    color: "black",
    backgroundColor: theme.palette.grey[200]
}));

export const LoginGrid = styled(Grid)(({theme}) => ({
    minHeight: '100vh',
    backgroundColor: 'grey.50',   // bg-gray-50 (MUI theme color)
    display: 'flex',              // flex
    alignItems: 'center',         // items-center
    justifyContent: 'center',     // justify-center
    px: 4,                        // px-4 (theme.spacing(4) = 32px by default)
    py: 8,                        // py-8
}));

export const LoginBox = styled(Box)(() => ({
  width: '100%',
  maxWidth: '24rem',
  marginLeft: 'auto',
  marginRight: 'auto'
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#ed7979ff",
  color: "#fff",
  padding: theme.spacing(1.5, 2),
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#622d2dff",
  },
  paddingRight: "1rem",
  display: "flex"
}));

export const LoginModalGrid = styled(Grid)(({theme}) => ({
    marginTop: '4rem',
    display: "flex",
    justifyContent: "center",
    marginRight: '2rem'
}));
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Dashboard
                </Typography>
                <Button color="inherit" component={Link} to="/users">
                    Users
                </Button>
                <Button color="inherit" component={Link} to="/posts">
                    Posts
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
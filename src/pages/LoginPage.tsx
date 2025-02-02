import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, TextField, Button, Typography, Box, Paper } from "@mui/material";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username.trim() === "" || password.trim() === "") {
            setError("Username and password are required!");
            return;
        }

        const user = { username, isAuthenticated: true };
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/users");
    };

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} sx={{ padding: 4, mt: 5 }}>
                <Box sx={{ textAlign: "center" }}>
                    <Typography variant="h4" gutterBottom>
                        Login
                    </Typography>
                </Box>
                {error && <Typography color="error">{error}</Typography>}
                <TextField
                    fullWidth
                    label="Username"
                    variant="outlined"
                    margin="normal"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    variant="outlined"
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={handleLogin}>
                    Login
                </Button>
            </Paper>
        </Container>
    );
};

export default LoginPage;
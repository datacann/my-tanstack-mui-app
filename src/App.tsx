import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DataProvider } from "./context/DataContext";
import Navbar from "./components/Navbar";
import Users from "./pages/Users";
import Posts from "./pages/Posts";
import LoginPage from "./pages/LoginPage.tsx";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <DataProvider>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/users" element={<Users />} />
                        <Route path="/posts" element={<Posts />} />
                    </Routes>
                </Router>
            </DataProvider>
        </QueryClientProvider>
    );
}

export default App;
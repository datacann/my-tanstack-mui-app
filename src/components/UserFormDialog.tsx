import React, { useState, useEffect } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from "@mui/material";
import { useUsers } from "../hooks/useUsers";

interface UserFormDialogProps {
    open: boolean;
    onClose: () => void;
    user?: { id: number; name: string; email: string } | null;
}

const UserFormDialog: React.FC<UserFormDialogProps> = ({ open, onClose, user }) => {
    const { addUser, updateUser } = useUsers();
    const [form, setForm] = useState({ id: 0, name: "", email: "" });

    useEffect(() => {
        if (user) setForm(user);
        else setForm({ id: 0, name: "", email: "" });
    }, [user]);

    const handleSubmit = () => {
        if (user) updateUser.mutate(form);
        else addUser.mutate(form);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{user ? "Edit User" : "Add User"}</DialogTitle>
            <DialogContent>
                <TextField label="Name" fullWidth value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                <TextField label="Email" fullWidth value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={handleSubmit} color="primary">Save</Button>
            </DialogActions>
        </Dialog>
    );
};

export default UserFormDialog;
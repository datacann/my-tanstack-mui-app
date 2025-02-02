import { useState } from "react";
import { useFetchUsers } from "../hooks/useFetch";
import { useDataContext } from "../context/DataContext";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
`;

const ActionButton = styled(Button)`
  margin-right: 8px;
  padding: 10px 20px;
  font-size: 14px;
  text-transform: none;

  &:hover {
    opacity: 0.9;
  }
`;

interface User {
    id: number;
    name: string;
    email: string;
}

const Users = () => {
    const { users, setUsers } = useDataContext();
    const { isLoading, isError } = useFetchUsers();
    const [newUser, setNewUser] = useState({ name: "", email: "" });
    const [editingUser, setEditingUser] = useState<User | null>(null);
    const [openDialog, setOpenDialog] = useState(false);


    const columns: GridColDef[] = [
        { field: "id", headerName: "ID", width: 90 },
        { field: "name", headerName: "Name", width: 200 },
        { field: "email", headerName: "Email", width: 250 },
        {
            field: "action",
            headerName: "Actions",
            width: 200,
            renderCell: (params) => (
                <div>
                    <ActionButton variant="outlined" color="primary" onClick={() => handleEdit(params.row)}>
                        Edit
                    </ActionButton>
                    <ActionButton variant="outlined" color="secondary" onClick={() => handleDelete(params.row.id)}>
                        Delete
                    </ActionButton>
                </div>
            ),
        },
    ];

    const handleAddUser = () => {
        const newId = users.length + 1;
        const newUserData = { id: newId, ...newUser };
        setUsers([...users, newUserData]);
        setNewUser({ name: "", email: "" });
    };

    const handleEdit = (user:User) => {
        setEditingUser(user);
        setNewUser({ name: user.name, email: user.email });
        setOpenDialog(true);
    };

    const handleSaveEdit = () => {
        if (editingUser) {
            const updatedUsers = users.map((item) =>
                item.id === editingUser.id ? { ...item, ...newUser } : item
            );
            setUsers(updatedUsers);
            setOpenDialog(false);
            setNewUser({ name: "", email: "" });
            setEditingUser(null);
        } else {
            console.error("No user to edit");
        }
    };

    const handleDelete = (id: number) => {
        const updatedUsers = users.filter((user) => user.id !== id);
        setUsers(updatedUsers);
    };

    const handleDialogClose = () => {
        setOpenDialog(false);
        setEditingUser(null);
        setNewUser({ name: "", email: "" });
    };

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching users</div>;

    return (
        <div>
            <h2>Users</h2>
            <FormContainer>
                <TextField
                    label="Name"
                    variant="outlined"
                    value={newUser.name}
                    onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                />
                <TextField
                    label="Email"
                    variant="outlined"
                    value={newUser.email}
                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                />
                <ActionButton variant="contained" color="primary" onClick={handleAddUser}>
                    Add User
                </ActionButton>
            </FormContainer>
            <div style={{ width: "100%" }}>
                <DataGrid rows={users || []} columns={columns}  checkboxSelection />
            </div>
            <Dialog open={openDialog} onClose={handleDialogClose}>
                <DialogTitle>Edit User</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Name"
                        variant="outlined"
                        value={newUser.name}
                        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        value={newUser.email}
                        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                        fullWidth
                        margin="normal"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={handleSaveEdit} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Users;
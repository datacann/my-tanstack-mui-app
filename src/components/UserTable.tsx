import React, { useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { useUsers } from "../hooks/useUsers";
import UserFormDialog from "./UserFormDialog";

const UserTable: React.FC = () => {
    const { users, isLoading, deleteUser } = useUsers();
    const [selectedUser, setSelectedUser] = useState<any>(null);
    const [open, setOpen] = useState(false);

    const columns: GridColDef[] = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "name", headerName: "Name", width: 200 },
        { field: "email", headerName: "Email", width: 250 },
        {
            field: "actions",
            headerName: "Actions",
            width: 250,
            renderCell: (params) => (
                <>
                    <Button variant="contained" color="primary" onClick={() => handleEdit(params.row)}>
                        Edit
                    </Button>
                    <Button variant="contained" color="secondary" onClick={() => deleteUser.mutate(params.row.id)} style={{ marginLeft: 10 }}>
                        Delete
                    </Button>
                </>
            ),
        },
    ];

    const handleEdit = (user: any) => {
        setSelectedUser(user);
        setOpen(true);
    };

    return (
        <div style={{ height: 400, width: "100%" }}>
            <Button variant="contained" color="success" onClick={() => setOpen(true)}>
                Add New
            </Button>
            <DataGrid rows={users || []} columns={columns} loading={isLoading} />
            <UserFormDialog open={open} onClose={() => setOpen(false)} user={selectedUser} />
        </div>
    );
};

export default UserTable;
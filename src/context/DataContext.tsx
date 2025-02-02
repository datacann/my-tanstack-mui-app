import React, { createContext, useContext, useState } from "react";

interface User {
    id: number;
    name: string;
    email: string;
}

interface Post {
    id: number;
    title: string;
    body: string;
}

interface DataContextType {
    users: User[];
    posts: Post[];
    setUsers: (users: User[]) => void;
    setPosts: (posts: Post[]) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [users, setUsers] = useState<User[]>([]);
    const [posts, setPosts] = useState<Post[]>([]);

    return (
        <DataContext.Provider value={{ users, posts, setUsers, setPosts }}>
            {children}
        </DataContext.Provider>
    );
};

export const useDataContext = () => {
    const context = useContext(DataContext);
    if (!context) throw new Error("useDataContext must be used within a DataProvider");
    return context;
};
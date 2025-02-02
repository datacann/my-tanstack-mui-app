import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export const useUsers = () => {
    const queryClient = useQueryClient();

    const { data: users, isLoading } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const response = await axios.get(API_URL);
            return response.data;
        },
    });

    const addUser = useMutation({
        mutationFn: async (newUser: { name: string; email: string }) => {
            const response = await axios.post(API_URL, newUser);
            return response.data;
        },
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] }),
    });

    const updateUser = useMutation({
        mutationFn: async (updatedUser: { id: number; name: string; email: string }) => {
            const response = await axios.put(`${API_URL}/${updatedUser.id}`, updatedUser);
            return response.data;
        },
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] }),
    });

    const deleteUser = useMutation({
        mutationFn: async (id: number) => {
            await axios.delete(`${API_URL}/${id}`);
        },
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] }),
    });

    return { users, isLoading, addUser, updateUser, deleteUser };
};
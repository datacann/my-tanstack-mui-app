import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useDataContext } from "../context/DataContext";

const API_USERS = "https://jsonplaceholder.typicode.com/users";
const API_POSTS = "https://jsonplaceholder.typicode.com/posts";

export const useFetchUsers = () => {
    const { setUsers } = useDataContext();

    return useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const { data } = await axios.get(API_USERS);
            setUsers(data);
            return data;
        },
    });
};

export const useFetchPosts = () => {
    const { setPosts } = useDataContext();
    return useQuery({
        queryKey: ["posts"],
        queryFn: async () => {
            const { data } = await axios.get(API_POSTS);
            setPosts(data);
            return data;
        },
    });
};
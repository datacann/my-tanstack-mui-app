import { useFetchPosts } from "../hooks/useFetch";
import { useDataContext } from "../context/DataContext";

const Posts = () => {
    const { posts } = useDataContext();
    const { isLoading, isError } = useFetchPosts();

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching posts</div>;

    return (
        <div>
            <h2>Posts</h2>
            <ul>
                {posts?.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Posts;
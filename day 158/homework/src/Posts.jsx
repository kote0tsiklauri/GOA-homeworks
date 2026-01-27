import { useEffect, useState } from "react";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [showPosts, setShowPosts] = useState(false);

    const handleShowPosts = () => {
        setShowPosts(prev => !prev);
    };
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            setPosts(data.slice(0, 5));
        })
        .catch((error) => {
            console.error("There was a problem fetching posts:", error);
        })
        .finally(() => {
            console.log("Fetch attempt finished (success or failure)");
        });
    }, []);

    return (
        <div>
            <h1>Posts</h1>
            <button onClick={handleShowPosts}>{showPosts ? "Hide" : "Show"} Posts</button>
            {showPosts && (
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Posts;
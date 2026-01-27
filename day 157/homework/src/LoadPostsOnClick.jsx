import { useState } from "react";

function LoadPostsOnClick() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadPost = () => {
    setLoading(true);
    setError(null);
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  return (
    <div className="p-4 border rounded-lg w-fit space-y-2">
      <button
        className="px-4 py-1 bg-blue-500 text-white rounded"
        onClick={loadPost}
      >
        Load Post
      </button>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {post && (
        <div>
          <h2 className="font-bold">{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
}

export default LoadPostsOnClick;
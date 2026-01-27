import { useState, useEffect } from "react";

function SinglePost() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => console.error(err));
  }, []);

  if (!post) return <p className="text-gray-500">Loading...</p>;

  return (
    <div className="p-4 border rounded-lg w-fit">
      <h2 className="font-bold text-lg mb-2">{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

export default SinglePost;
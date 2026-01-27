import SinglePost from "./SinglePost";
import UsersListWithError from "./UsersListWithError";
import LoadPostsOnClick from "./LoadPostsOnClick";
import PostsList from "./PostsList";

function App() {
  return (
    <div className="min-h-screen p-6 bg-gray-100 space-y-6">
      <SinglePost />
      <UsersListWithError />
      <LoadPostsOnClick />
      <PostsList />
    </div>
  );
}

export default App;
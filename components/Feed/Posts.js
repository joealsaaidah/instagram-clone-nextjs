import { useEffect, useState } from "react";
import Post from "./Post";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );

  return (
    <section>
      {posts.map((post) => (
        <Post
          key={post.id}
          username={post.data().username}
          userImage={post.data().profileImg}
          postImage={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </section>
  );
};

export default Posts;

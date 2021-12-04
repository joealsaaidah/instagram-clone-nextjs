import Post from "./Post";

const DUMMY_DATA = [
  {
    id: "1",
    username: "joe",
    img: "/images/posts/1.jpg",
    userImg: "/images/profiles/6.jpg",
    caption: "this is a post no.1 ",
  },
  {
    id: "2",
    username: "john",
    img: "/images/posts/2.png",
    userImg: "/images/profiles/8.jpg",
    caption: "this is a post no.2",
  },
  {
    id: "3",
    username: "Mo",
    img: "/images/posts/3.webp",
    userImg: "/images/profiles/17.jpg",
    caption: "this is a post no.3",
  },
  {
    id: "4",
    username: "sameer",
    img: "/images/posts/4.jpg",
    userImg: "/images/profiles/15.jpg",
    caption: "this is a post no.4",
  },
];

const Posts = () => {
  return (
    <section>
      {DUMMY_DATA.map((post) => (
        <Post
          key={post.id}
          username={post.username}
          userImage={post.userImg}
          postImage={post.img}
          caption={post.caption}
        />
      ))}
    </section>
  );
};

export default Posts;

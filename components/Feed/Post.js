import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";

import Image from "next/image";
import { useSession } from "next-auth/react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import Comment from "./Comment";

const Post = ({ id, username, userImage, postImage, caption }) => {
  const { data: session } = useSession();

  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "posts", id, "comments"),
          orderBy("timestamp", "asc")
        ),
        (snapshot) => setComments(snapshot.docs)
      ),
    [db, id]
  );
  useEffect(
    () =>
      onSnapshot(collection(db, "posts", id, "likes"), (snapshot) =>
        setLikes(snapshot.docs)
      ),
    [db, id]
  );

  useEffect(
    () =>
      setHasLiked(
        likes.findIndex((like) => like.id === session?.user?.uid) !== -1
      ),
    [likes]
  );

  const sendComment = async (e) => {
    e.preventDefault();
    const commentToSend = comment;
    setComment("");
    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });
  };

  const likePost = async () => {
    if (hasLiked) {
      await deleteDoc(doc(db, "posts", id, "likes", session.user.uid));
    } else {
      await setDoc(doc(db, "posts", id, "likes", session.user.uid), {
        username: session.user.username,
      });
    }
  };

  return (
    <div className='bg-white my-7 border rounded-sm'>
      {/* header */}
      <div className='flex items-center p-5'>
        <div className='flex justify-center items-center  border rounded-full p-1 mr-3 h-14 w-14'>
          <div className='relative h-12 w-12'>
            <Image
              src={userImage}
              layout='fill'
              object-fit='contain'
              className='rounded-full'
            />
          </div>
        </div>
        <p className='flex-1 font-bold'>{username}</p>
        <DotsHorizontalIcon className='h-5' />
      </div>
      {/* img */}
      <div className='relative h-96 w-full'>
        {postImage && <Image src={postImage} layout='fill' objectFit='cover' />}
      </div>
      {/* icons */}
      {session && (
        <div className='flex justify-between px-4 pt-4'>
          <div className='flex space-x-4 '>
            {hasLiked ? (
              <HeartIconFilled
                onClick={likePost}
                className='btn text-red-500'
              />
            ) : (
              <HeartIcon onClick={likePost} className='btn' />
            )}

            <ChatIcon className='btn' />
            <PaperAirplaneIcon className='btn' />
          </div>
          <BookmarkIcon className='btn' />
        </div>
      )}

      {/* likes */}
      {/* caption */}
      <p className='p-5 truncate'>
        {likes.length > 0 && (
          <p className='font-bold mb-1'>{likes.length} likes</p>
        )}
        <span className='font-bold mr-1'>{username}</span>
        {caption}
      </p>
      {/* comments */}
      {comments.length > 0 && (
        <div className='ml-10 max-h-32 overflow-y-scroll scrollbar-thumb-black scrollbar-thin'>
          {comments.map((comment) => (
            <Comment
              key={comment.id}
              image={comment.data().userImage}
              comment={comment.data().comment}
              username={comment.data().username}
              timestamp={comment.data().timestamp}
            />
          ))}
        </div>
      )}
      {/* input box */}
      {session && (
        <form className='flex items-center p-4'>
          <EmojiHappyIcon className='h-7' />
          <input
            type='text'
            placeholder='Add a comment...'
            className='flex-1 border-none focus:ring-0 outline-none'
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            type='submit'
            disabled={!comment.trim()}
            className='font-semibold text-blue-400'
            onClick={sendComment}
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
};

export default Post;

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

const Post = ({ id, username, userImage, postImage, caption }) => {
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
        <Image src={postImage} layout='fill' objectFit='cover' />
      </div>
      {/* icons */}
      <div className='flex justify-between px-4 pt-4'>
        <div className='flex space-x-4 '>
          <HeartIcon className='btn' />
          <ChatIcon className='btn' />
          <PaperAirplaneIcon className='btn' />
        </div>
        <BookmarkIcon className='btn' />
      </div>
      {/* likes */}
      {/* caption */}
      <p className='p-5 truncate'>
        <span className='font-bold mr-1'>{username}</span>
        {caption}
      </p>
      {/* comments */}
      {/* input box */}
      <form className='flex items-center p-4'>
        <EmojiHappyIcon className='h-7' />
        <input
          type='text'
          placeholder='Add a comment...'
          className='flex-1 border-none focus:ring-0 outline-none'
        />
        <button className='font-semibold text-blue-400'>Post</button>
      </form>
    </div>
  );
};

export default Post;

import Moment from "react-moment";
import Image from "next/image";

const Comment = ({ image, comment, username, timestamp }) => {
  return (
    <div className='flex items-center space-x-2 mb-3 '>
      <div className='relative h-7 w-7 rounded-full'>
        <Image
          src={image}
          layout='fill'
          objectFit='contain'
          className='rounded-full'
        />
      </div>
      <p className='text-sm flex-1'>
        <span className='font-bold'>{username}</span> {comment}
      </p>
      <Moment fromNow className='pr-5 text-sm'>
        {timestamp?.toDate()}
      </Moment>
    </div>
  );
};

export default Comment;

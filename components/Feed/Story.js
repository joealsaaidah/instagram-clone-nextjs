import Image from "next/image";
const Story = ({ img, username }) => {
  console.log(img);
  return (
    <div className=''>
      <div className='flex justify-center items-center h-16 w-16 rounded-full border-red-500 border-2 p-[1.5px] hover:scale-110 transition transform duration-200 ease-out'>
        <div className='relative h-14 w-14 rounded-full overflow-hidden'>
          <Image
            className='rounded-full object-cover cursor-pointer  '
            src={img.toString()}
            alt={username}
            layout='fill'
          />
        </div>
      </div>
      <p className='text-xs w-14 truncate text-center'>{username}</p>
    </div>
  );
};

export default Story;

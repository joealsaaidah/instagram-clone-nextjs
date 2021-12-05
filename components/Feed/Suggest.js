import Image from "next/image";
const Suggest = ({ id, avatar, username, company }) => {
  return (
    <section key={id} className='flex items-center justify-between mt-3'>
      <div className='flex items-center justify-center h-11 w-11 rounded-full border p-[1px]'>
        <div className='relative h-10 w-10 rounded-full border overflow-hidden'>
          <Image src={avatar} layout='fill' objectFit='contain' />
        </div>
      </div>
      <div className='flex-1 ml-4'>
        <h2 className='font-semibold text-sm'>{username}</h2>
        <h3 className='text-xs text-gray-400 truncate'>Work at {company}</h3>
      </div>
      <button className='text-blue-400 text-xs font-bold '>Follow</button>
    </section>
  );
};

export default Suggest;

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
const MiniProfile = () => {
  const { data: session } = useSession();

  return (
    <section className='flex items-center justify-between mt-14 ml-10'>
      <div className='flex items-center justify-center h-16 w-16 border rounded-full p-[2px]'>
        <div className='relative w-14 h-14 rounded-full overflow-hidden '>
          <Image src={session?.user?.image} layout='fill' objectFit='contain' />
        </div>
      </div>
      <div className='flex-1 mx-4'>
        <h2 className='font-bold'>{session?.user.username}</h2>
        <h3 className='text-sm text-gray-400 '>Welcome to Instagram</h3>
      </div>
      <button onClick={signOut} className='text-blue-500 font-semibold'>
        Sign out
      </button>
    </section>
  );
};

export default MiniProfile;

import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/dist/client/router";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

const Header = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  return (
    <header className='shadow-sm border-b bg-white stucky top-0 z-50'>
      <div className='flex justify-between max-w-6xl mx-5 lg:mx-auto'>
        {/* Left */}
        <div
          onClick={() => router.push("/")}
          className='relative hidden cursor-pointer lg:inline-grid w-24'
        >
          <Image src='/images/logo.png' layout='fill' objectFit='contain' />
        </div>
        <div
          onClick={() => router.push("/")}
          className='relative w-10 cursor-pointer lg:hidden flex-shrink-0'
        >
          <Image src='/images/logo2.png' layout='fill' objectFit='contain' />
        </div>
        {/* Middle - search field*/}
        <div className='max-w-xs'>
          <div className='relative mt-1 p-3 rounded-md'>
            <div className='absolute inset-y-0  pl-3 flex items-center'>
              <SearchIcon className='h-5 w-5 text-gray-500' />
            </div>
            <input
              className='bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md'
              type='text'
              placeholder='Search...'
            />
          </div>
        </div>

        {/* Right */}
        <div className='flex items-center justify-end space-x-4'>
          <HomeIcon onClick={() => router.push("/")} className='navBtn' />
          <MenuIcon className='h-6 md:hidden cursor-pointer' />

          {session ? (
            <>
              <div className='relative navBtn'>
                <PaperAirplaneIcon className='navBtn rotate-45' />
                <div className='absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white'>
                  3
                </div>
              </div>
              <PlusCircleIcon
                onClick={() => setOpen(true)}
                className='navBtn'
              />
              <UserGroupIcon className='navBtn' />
              <HeartIcon className='navBtn' />
              <div className='relative h-10 w-10 '>
                <Image
                  onClick={signOut}
                  src={session.user.image}
                  layout='fill'
                  alt='profile pic'
                  objectFit='cover'
                  className='rounded-full cursor-pointer'
                />
              </div>
            </>
          ) : (
            <button onClick={signIn}>Sign in</button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

import { getProviders, signIn as signInWithProvider } from "next-auth/react";
import Image from "next/image";
import { EmojiHappyIcon } from "@heroicons/react/outline";

const signin = ({ providers }) => {
  return (
    <>
      <div className='flex flex-col items-center justify-center min-h-screen py-2 -mt-40 px-14 text-center'>
        <div className='relative w-80 h-28 '>
          <Image src='/images/logo.png' layout='fill' objectFit='contain' />
        </div>
        <p>
          This is a not REAL app, it is a clone, enjoy your journy{" "}
          <EmojiHappyIcon className='h-5 w-5 text-purple-600 inline-block' />
        </p>
        <div className='mt-40'>
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className='p-3 bg-blue-500 rounded-lg text-white'
                onClick={() =>
                  signInWithProvider(provider.id, { callbackUrl: "/" })
                }
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default signin;

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

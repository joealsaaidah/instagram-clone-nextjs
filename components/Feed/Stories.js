import Story from "./Story";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

const Stories = ({ profiles }) => {
  const { data: session } = useSession();
  return (
    <section className='flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black '>
      {session && (
        <Story img={session.user.image} username={session.user.username} />
      )}

      {profiles.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </section>
  );
};

export default Stories;

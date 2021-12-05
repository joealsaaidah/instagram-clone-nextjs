import Story from "./Story";
import { useSession } from "next-auth/react";
import { useRecoilValue } from "recoil";
import { profilesState } from "../../atoms/profilesAtom";

const Stories = () => {
  const { data: session } = useSession();
  const profiles = useRecoilValue(profilesState);
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

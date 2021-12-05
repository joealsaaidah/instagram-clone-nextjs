import { useEffect, useState } from "react";
import Image from "next/image";
import Suggest from "./Suggest";
import { profilesState } from "../../atoms/profilesAtom";
import { useRecoilValue } from "recoil";

const Suggestions = () => {
  const profiles = useRecoilValue(profilesState);
  return (
    <div className='mt-4 ml-10'>
      <div className='flex justify-between items-center text-sm mb-5'>
        <h3 className='font-bold text-gray-400'>Suggestions for you</h3>
        <button className='text-gray-600 font-semibold'>See All</button>
      </div>
      {profiles.map(
        (profile, i) =>
          i < 5 && (
            <Suggest
              id={profile.id}
              avatar={profile.avatar}
              username={profile.username}
              company={profile.company}
            />
          )
      )}
    </div>
  );
};

export default Suggestions;

import Story from "./Story";
import { useEffect, useState } from "react";

const Stories = ({ profiles }) => {
  return (
    <section className='flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black '>
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

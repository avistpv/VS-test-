import React from 'react';
import ForYourSpaceContent from '../molecules/ForYourSpaceContent';

const ForYourSpaceSection: React.FC = () => {
  return (
    <section
      className="
      w-full [background:rgba(249,187,210,0.20)] 
      flex justify-center 
      mb-[50px] md:mb-[80px] lg:mb-[100px]"
    >
      <ForYourSpaceContent />
    </section>
  );
};

export default ForYourSpaceSection;

/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: Skills.jsx
   Version: I
   Creation: 02/06/2023
   Last modification: 03/06/2023
*/

import MarqueeCards from "../Components/MarqueeCards";
import SectionTitle from "../Components/SectionTitle";
import SkillsCards from "../Components/SkillsCards";

const Skills = () => {
  return (
    <div id="skills" className="w-full overflow-hidden-web flex justify-center">
      <div className="w-full min-h-[800px] flex flex-col xl:w-[70%]" style={{borderColor: "rgba(230, 230, 237, 0)"}}>
        <div className="w-full">
          <SectionTitle title="SKILLS" subtitle="WHAT I CAN DO" />
        </div>
        <div className="xl:border-l-2 xl:border-r-2 xl:border-primary-400 h-full" style={{borderColor: "rgba(230, 230, 237, 0)"}}>
          <div className="relative">
            <MarqueeCards direction="left">
              <SkillsCards />
            </MarqueeCards>
          </div>
          <div className="relative">
            <MarqueeCards direction="right">
              <SkillsCards />
            </MarqueeCards>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

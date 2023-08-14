import React from "react"
  import { Chrono } from "react-chrono";

  const Experience = () => {
    const items = [{
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg"
        }
      }
    },]

    return (
      <div id="experience" className="w-full flex justify-center overflow-hidden-web">
      <div className="w-full xl:w-[70%] flex flex-col pb-16">
        <div className="w-full">
          <SectionTitle title="EXPERIENCE" subtitle="What I've Done Before" />
        </div>
        <div style={{ width: "500px", height: "400px" }}>
          <Chrono items={items} />
        </div>
      </div>
      </div>
    )
  }

export default Experience;
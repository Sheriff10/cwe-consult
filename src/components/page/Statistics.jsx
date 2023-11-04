import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function Statistics() {
  const [awards, setAwards] = useState(0);
  const [projectsPromoted, setProjectsPromoted] = useState(0);
  const [twitterFollowers, setTwitterFollowers] = useState(0);
  const [yearsOfExperience, setYearsOfExperience] = useState(0);

  const yearsOfExperienceTarget = 11;
  const awardsTarget = 14;
  const projectsPromotedTarget = 1400;
  const twitterFollowersTarget = 50000;

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    const startCounting = () => {
      let yearsOfExperienceCounter = 0;
      let awardsCounter = 0;
      let projectsPromotedCounter = 0;
      let twitterFollowersCounter = 0;

      const interval = setInterval(() => {
        if (yearsOfExperienceCounter < yearsOfExperienceTarget) {
          setYearsOfExperience(yearsOfExperienceCounter);
          yearsOfExperienceCounter++;
        }

        if (awardsCounter < awardsTarget) {
          setAwards(awardsCounter);
          awardsCounter++;
        }

        if (projectsPromotedCounter < projectsPromotedTarget) {
          setProjectsPromoted(projectsPromotedCounter);
          projectsPromotedCounter += 10;
        }

        if (twitterFollowersCounter < twitterFollowersTarget) {
          setTwitterFollowers(twitterFollowersCounter);
          twitterFollowersCounter += 100;
        }

        if (awardsCounter >= awardsTarget) {
          clearInterval(interval);
          setAwards(awardsTarget);
          setProjectsPromoted(projectsPromotedTarget);
          setTwitterFollowers(twitterFollowersTarget);
        }
      }, 200);
    };

    if (inView) {
      startCounting();
    }
  }, [inView]);

  return (
    <section className="bg-dark py-14">
      <div className="w-full container mx-auto px-4 md:px-8">
        <div
          className="flex flex-col gap-4 justify-between items-start md:flex-row md:items-center"
          ref={ref}
        >
          <div>
            <span className="text-3xl md:text-4xl lg:text-5xl font-bold">
              {yearsOfExperience}+{" "}
            </span>{" "}
            Years of Experience
          </div>
          <div>
            <span className="text-3xl md:text-4xl lg:text-5xl font-bold">
              {awards}
            </span>{" "}
            Award Winner
          </div>
          <div>
            <span className="text-3xl md:text-4xl lg:text-5xl font-bold">
              {projectsPromoted}
            </span>{" "}
            Project promoted
          </div>
          <div>
            <span className="text-3xl md:text-4xl lg:text-5xl font-bold">
              {twitterFollowers}+{" "}
            </span>
            X/Twitter followers
          </div>
        </div>
      </div>
    </section>
  );
}

export default Statistics;

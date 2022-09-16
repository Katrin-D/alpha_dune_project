import React from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import S from "../styles/TeamMembers.module.scss";
import TeamCard from "./team_ui/TeamCard.jsx";
import { team } from "../data/teamData";

function TeamMembers() {
  const { scroll } = useLocomotiveScroll();
  return (
    <div className={S.team_members} id="team_members">
      <div data-scroll data-scroll-speed="1" className={S.background} />
      <div className="container">
        <h2 className="lineTitle">
          <span data-scroll data-scroll-class="lineAnim" data-scroll-repeat>
            Team
          </span>
        </h2>
        <div className={S.content}>
          {team &&
            team.map((item, index) => (
              <div className={S.card}>
                <TeamCard key={index} card={item} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default TeamMembers;

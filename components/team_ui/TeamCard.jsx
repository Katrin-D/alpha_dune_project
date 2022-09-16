import React from "react";
import S from "../../styles/TeamCard.module.scss";

function TeamCard({ card }) {
  return (
    <div className={S.card} id="team_card">
      <div
        className={S.photo}
        style={{ "background-image": `url(${card.photo.src})` }}
      />
      <p className={S.name}>{card.name}</p>
      <p className={S.position}>{card.position}</p>
    </div>
  );
}

export default TeamCard;

import React from "react";
import { CardType } from "../services";
import '../styles.css'

interface Props {
  card: CardType;
}

export default function Card({ card }: Props) {
  return (
    <div className="profile-card">
      <img
        src={card.profilePhotoUrl}
        alt="Profile"
        className="profile-img"
      />

      <div className="profile-content">
        <h2 className="name">{card.name}</h2>
        <p className="bio">{card.subtitle}</p>
      </div>

      <div className="profile-footer">
        <div className="friends">
          <img
            className="icon"
            src="src/Assets/profile.png"
            alt="Vector"
          />
          <span>
            {card.numberOfFriends}{" "}friends
          </span>
        </div>

        <span className="joined">
          Joined in{" "}
          {card.yearOfJoining}
        </span>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import fetchCardList, { cardType } from "../services";
import "../styles.css";
export default function Card() {
  const [cards, setCards] = useState<cardType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    fetchCardList().then((data) => {
      setCards(data);
      setLoading(false);
    });
  }, []);
  if (loading) {
    return <h2>Loading</h2>;
  }

  return (
    <div className="mainContainer">
      <div className="container">
        {cards.map((card) => (
          <div className="profile-card " key={card.id}>
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
                <span className="error">
                  {
                    card.numberOfFriends
                  }
                  {" "}
                  friends
                </span>
              </div>
              <span className="joined">
                Joined in{" "}
                {card.yearOfJoining}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

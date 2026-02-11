import React, { useState, useEffect } from "react";
import fetchCardList, { cardType } from "./services";
import Card from "../src/component/Card";

export default function CardList() {
  const [cards, setCards] = useState<cardType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCardList()
      .then((data) => {
        setCards(data);
      })
      .catch(() => {
        setError("Failed to load cards");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="mainContainer">
      <div className="container">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

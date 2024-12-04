import React from 'react';
import { CardData } from "@innovative_troublemaker/campus_information_system/model/card/CardProps";
import Card from "./Card";

export interface CardListProps {
  cards: CardData[];
}

const CardList: React.FC<CardListProps> = ({ cards }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <Card key={index} data={card} />
      ))}
    </div>
  );
};

export default CardList;
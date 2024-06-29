import { Card } from "../card/Card";

export const Column = ({ title, cards }) => {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {cards.map((card) => {
          return (
            <Card
              key={card.id}
              category={card.theme}
              topic={card.title}
              date={card.date}
            />
          );
        })}
      </div>
    </div>
  );
};

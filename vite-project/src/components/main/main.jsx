import { Column } from "../column/Column";
import { statusList } from "../../data";

export const Main = ({ cards }) => {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {statusList.map((status, id) => (
              <Column 
              key={id}
              title={status} 
              cards={cards.filter((card) => card.status === status)}
              />
            ))};
          </div>
        </div>
      </div>
    </main>
  );
};

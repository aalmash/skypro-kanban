import { Card } from "../card/Card";
import { Column } from "../column/Column";

export const Main = () => {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            <Column
              columnTitle={"БЕЗ СТАТУСА"}
              cards={
                <>
                  <Card color={"_orange"} category={"Web Design"} />
                  <Card color={"_green"} category={"Research"} />
                  <Card color={"_orange"} category={"Web Design"} />
                  <Card color={"_purple"} category={"Copywriting"} />
                  <Card color={"_orange"} category={"Web Design"} />
                </>
              }
            />

            <Column
              columnTitle={"НУЖНО СДЕЛАТЬ"}
              cards={
                <>
                  <Card color={"_green"} category={"Research"} />
                </>
              }
            />

            <Column
              columnTitle={"В РАБОТЕ"}
              cards={
                <>
                  <Card color={"_green"} category={"Research"} />
                  <Card color={"_purple"} category={"Copywriting"} />
                  <Card color={"_orange"} category={"Web Design"} />
                </>
              }
            />

            <Column
              columnTitle={"ТЕСТИРОВАНИЕ"}
              cards={
                <>
                  <Card color={"_green"} category={"Research"} />
                </>
              }
            />

            <Column
              columnTitle={"ГОТОВО"}
              cards={
                <>
                  <Card color={"_green"} category={"Research"} />
                </>
              }
            />
          </div>
        </div>
      </div>
    </main>
  );
};

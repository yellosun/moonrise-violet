import React, { useState } from "react";
import Grow from "@material-ui/core/Grow";
import { projects } from "./constants";

export function Card({ actions, name, description, img, stack }) {
  const [hover, setHover] = useState(false);

  return (
    <div className={card}>
      <div
        className={demoImg}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        {hover && (
          <div
            className={
              "flex justify-center items-center w-full h-full absolute bg-black text-white"
            }
          >
            <div className="flex justify-around w-full items-center">
              {actions.view && (
                <a
                className={linkAction}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={actions.view.link}
                >
                  view
                </a>
              )}
              {actions.code && (
                <a
                className={linkAction}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={actions.code.link}
                >
                  code
                </a>
              )}
            </div>
          </div>
        )}
        <img
          src={img}
          className={"w-[250px] max-w-none"}
          alt={`screenshot of ${name} project`}
        />
      </div>
      <div className="md:pl-8 pt-4 md:pt-0">
        <div className="text-md font-semibold">{name}</div>
        <div className="font-normal mt-2">{description}</div>
        <div className={actionContainer}>
          <div className="flex items-center flex-wrap">
            {stack.map((item, i) => (
              <div className={stackStyle} key={i}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const projectValues = Object.values(projects);
  const [cards, setCards] = useState(projectValues);

  const nextCard = (id) => {
    const selectedCard = projects[id];
    let newCards;

    if (selectedCard) {
      const filteredCards = cards.filter((card) => card.id !== id);
      newCards = [...filteredCards, selectedCard];
    } else {
      const last = cards.pop();
      newCards = [last, ...cards];
    }

    setCards(newCards);
  };

  return (
    <Grow in={true} {...{ timeout: 700 }}>
      <div className={container}>
        {cards.map((card, index) => {
          const lastCard = projectValues.length - 1 === index;
          const cardProps = { ...card, lastCard, nextCard };
          return <Card {...cardProps} key={card.name} />;
        })}
      </div>
    </Grow>
  );
}

const card = "flex flex-col md:flex-row md:h-[200px] pb-10 bg-white w-3/4";
const demoImg = "relative cursor-pointer rounded-sm md:w-[250px] h-[145px]";
const actionContainer = "flex flex-col w-full";
const linkAction = "h-full w-[40px] ml-[5px]";

const stackStyle =
  "italic flex whitespace-nowrap text-xs bg-[#a9a9a942] rounded-sm py-2 px-4 mr-2 mt-2";
const container =
  "flex flex-col flex-nowrap items-center justify-start mt-20 h-full w-full";

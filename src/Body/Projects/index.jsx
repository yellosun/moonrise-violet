import React, { useState } from "react";
import Grow from "@material-ui/core/Grow";
import { projects } from "./constants";

export function Links({ actions }) {
  const [viewHover, setViewHover] = useState(false);
  const [codeHover, setCodeHover] = useState(false);

  const viewLinkStyle = {
    ...linkAction,
    transform: viewHover ? "scale(1.2)" : "",
  };

  const codeLinkStyle = {
    ...linkAction,
    transform: codeHover ? "scale(1.2)" : "",
  };

  return (
    <div className='flex'>
      {actions.view && (
        <a target="_blank" rel="noopener noreferrer" href={actions.view.link}>
          <img
            rel="preload"
            className={linkAction}
            onMouseOver={() => setViewHover(true)}
            onMouseOut={() => setViewHover(false)}
            src={actions.view.img}
            alt={"hand-written `view` inside box"}
          />
        </a>
      )}
      {actions.code && (
        <a target="_blank" rel="noopener noreferrer" href={actions.code.link}>
          <img
            rel="preload"
            className={linkAction}
            onMouseOver={() => setCodeHover(true)}
            onMouseOut={() => setCodeHover(false)}
            src={actions.code.img}
            alt={"hand-written `code` inside box"}
          />
        </a>
      )}
    </div>
  );
}

export function Card(props) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      className={card}
    >
      <img
        src={props.img}
        className={demoImg}
        alt={`screenshot of ${props.name} project`}
      />

      <div className="md:pl-8 pt-4 md:pt-0">
        <div className="text-md font-semibold">{props.name}</div>
        <div className="font-normal mt-2">{props.description}</div>
        <div className={actionContainer}>
          <div className="flex items-center flex-wrap md:flex-nowrap">
            {props.stack.map((item, i) => (
              <div className={stack} key={i}>
                {item}
              </div>
            ))}
          </div>
          {/* <Links actions={props.actions} /> */}
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

const card = "flex flex-col md:flex-row md:h-[200px] pb-10 bg-white";
const demoImg = "cursor-pointer rounded-sm md:w-1/3 h-[fit-content]";
const actionContainer = "flex flex-col w-full md:pt-[10px]";
const linkAction = "h-full w-[40px] ml-[5px]";

const stack =
"italic flex whitespace-nowrap text-xs bg-[#a9a9a942] rounded-sm py-2 px-4 mr-2 mt-2 md:mt-0";
const container =
  "flex flex-col flex-nowrap items-center justify-center h-full w-3/4 mt-[1800px] sm:mt-[2000px] md:mt-[400px]";
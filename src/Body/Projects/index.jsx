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
    <div className={linkContainer}>
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

  // const cardStyle = card + ` -mt-[${ hover ? '50px' : '200px'}] ${!props.lastCard && 'mt-0'}`

  const onCardClick = () => {
    return !props.lastCard && props.nextCard(props.id);
  };

  return (
    <div
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      //   onClick={onCardClick}
      className={card}
    >
      <img
        src={props.img}
        className={demoImg}
        alt={`screenshot of ${props.name} project`}
      />

      <div className={cardText}>
        <div className="text-md font-semibold">{props.name}</div>
        <div className={desc}>{props.description}</div>
        <div className={actionContainer}>
          <div className={stackContainer}>
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

const container =
  "flex flex-col flex-nowrap items-center justify-center h-full w-3/4 mt-[400px]";

const card = "flex h-[200px] pt-10 bg-white";
const cardText = "pl-8";
const demoImg = "cursor-pointer w-1/3 h-auto";
const desc = "font-normal mt-2";

const actionContainer = "flex flex-col w-full pt-[10px]";
const stackContainer = "flex items-center";
const stack =
  "italic flex whitespace-nowrap flex-nowrap text-xs bg-[#a9a9a942] rounded-sm py-2 px-4 mr-2";
const linkContainer = "flex";
const linkAction = "h-full w-[40px] ml-[5px]";

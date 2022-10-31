import React, { useState } from 'react';
import Grow from '@material-ui/core/Grow'
import { projects } from './constants'

const Paper = require('../../assets/paper.jpg')

export function Links({ actions }) {
    const [viewHover, setViewHover] = useState(false)
    const [codeHover, setCodeHover] = useState(false)

    const viewLinkStyle = {
        ...linkAction,
        transform: viewHover ? 'scale(1.2)' : ''
    }

    const codeLinkStyle = {
        ...linkAction,
        transform: codeHover ? 'scale(1.2)' : ''
    }

    return (
        <div
            style={linkContainer}
        >
            {actions.view && (
                <a target='_blank' rel='noopener noreferrer' href={actions.view.link}>
                    <img
                        rel='preload'
                        style={viewLinkStyle}
                        onMouseOver={() => setViewHover(true)}
                        onMouseOut={() => setViewHover(false)}
                        src={actions.view.img}
                        alt={'hand-written `view` inside box'}
                    />
                </a>
            )}
            {actions.code && (
                <a target='_blank' rel='noopener noreferrer' href={actions.code.link}>
                    <img
                        rel='preload'
                        style={codeLinkStyle}
                        onMouseOver={() => setCodeHover(true)}
                        onMouseOut={() => setCodeHover(false)}
                        src={actions.code.img}
                        alt={'hand-written `code` inside box'}
                    />
                </a>
            )}
        </div>
    )
}

export function Card(props) {
    const [hover, setHover] = useState(false)

    const cardStyle = {
        ...card,
        marginBottom: !props.lastCard && hover ? -50 : -200,
    }

    const onCardClick = () => {
        return !props.lastCard && props.nextCard(props.id)
    }

    return (
        <div
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
            onClick={onCardClick}
            style={cardStyle}
        >
            <div>
                <img
                    src={props.img}
                    style={demoImg}
                    alt={`screenshot of ${props.name} project`}
                />
            </div>
            {props.lastCard && (
                <div style={cardText}>
                    <div>{props.name}</div>
                    <div style={desc}>{props.description}</div>
                    <div style={actionContainer}>
                        <div style={stackContainer}>
                            {props.stack.map((item) => <div style={stack}>{item}</div>)}
                        </div>
                        <Links actions={props.actions} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default function Projects() {
    const projectValues = Object.values(projects)
    const [cards, setCards] = useState(projectValues)

    const nextCard = (id) => {
        const selectedCard = projects[id]
        let newCards

        if (selectedCard) {
            const filteredCards = cards.filter((card) => card.id !== id)
            newCards = [...filteredCards, selectedCard]
        } else {
            const last = cards.pop()
            newCards = [last, ...cards]
        }

        setCards(newCards)
    }

    return (
        <div style={container}>
        <Grow in={true} {...({ timeout: 700 })}>
            <div>
                {cards.map((card, index) => {
                    const lastCard = projectValues.length - 1 === index
                    const cardProps = {...card, lastCard, nextCard}
                    return <Card {...cardProps} />
                })}
            </div>
        </Grow>
        </div>
    );
}

const container = {
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    marginTop: -200,
    transition: 'all ease 3s',
    background: `center / contain no-repeat url(${Paper})`
}

const card = {
    display: 'flex',
    flexDirection: 'column',
    width: 450,
    backgroundColor: 'white',
    transition: 'all ease .5s',
    boxShadow: '-1px 1px 10px .1px rgba(0, 0, 0, 0.14)'
}

const cardText = {
    padding: 15,
}

const demoImg = {
    width: 450,
    cursor: 'pointer',
}

const desc = {
    fontWeight: 500,
    marginTop: 5
}

const actionContainer = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingTop: 10
}

const stackContainer = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}

const stack = {
    ...desc,
    fontStyle: 'italic',
    fontSize: 11,
    backgroundColor: '#dcbf7c',
    borderRadius: 10,
    padding: '3px 7px',
    marginRight: 5
}

const linkContainer = {
    marginBottom: -10,
    transition: 'all ease .3s',
}

const linkAction = {
    height: '100%',
    width: 60,
    marginLeft: 5
}

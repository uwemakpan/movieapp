import React from 'react'
import './index.css'
import { useState } from 'react'

export default function App() {
  return (
    <div>
      <TextExpander
        collapsedNumWords={100}
        expandButtonText='...Show more'
        collapseButtonText='Collapse text'
        buttonColor='#ff6622'
        className='box'
      >
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        collapsedNumWords={130}
        expandButtonText='...Show text'
        collapseButtonText='Collapse text'
        buttonColor='blue'
        className='box'
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander
        collapsedNumWords={165}
        expandButtonText='...Show more'
        collapseButtonText='Collapse text'
        buttonColor='#ff6622'
        className='box'
      >
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  )
}

function TextExpander({
  collapsedNumWords,
  expandButtonText,
  collapseButtonText,
  buttonColor = '1f09cd',
  children,
  className,
}) {
  const [expanded, setExpanded] = useState(false)
  const btnStyle = {
    color: buttonColor,
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    font: 'inherit',
    marginLeft: '6px',
  }
  return (
    <div className={className}>
      {expanded ? children : children.slice(0, collapsedNumWords + 1)}
      <button
        className='expand'
        style={btnStyle}
        onClick={() => setExpanded((expanded) => !expanded)}
      >
        {expanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  )
}

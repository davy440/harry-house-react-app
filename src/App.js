import { useState, createContext } from 'react';
import './App.css';
import { animated, config, useTransition } from '@react-spring/web';
import { Banner } from './Banner';
import { House } from './house';

export const userContext = createContext()

export const App = () => {

  const [isShowing, setIsShowing] = useState(true)

  const transitions = useTransition(isShowing, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    duration: 1000,
  })
  
  return (
    transitions((style, item) => 
      item
      ? <animated.div style={style}><Banner setIsShowing={ setIsShowing } /></animated.div>
      : <animated.div style={style}><House /></animated.div>
    )
  )
}
import { useState, createContext } from 'react';
import './App.css';
import { Banner } from './Banner';
import { House } from './house';

export const userContext = createContext()

export const App = () => {

  const [isShowing, setIsShowing] = useState(true)
  
  return (
      <userContext.Provider value={isShowing}>
        <div>
          {
            isShowing
            ? <Banner setIsShowing={ setIsShowing } />
            : <House />
          }
        </div>
      </userContext.Provider>
  )
}
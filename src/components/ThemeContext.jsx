import React, {useState, createContext, useEffect } from 'react'
import '../css/ThemeContext.css'

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState('light');

    useEffect(() => {
        if (
            localStorage.getItem('theme') === 'dark' ||
            (!('theme' in localStorage) &&
              window.matchMedia('(prefers-color-scheme: dark)').matches)
          ) {
            document.querySelector('body').classList.add('dark')
            setTheme('dark')
          } else {
            document.querySelector('body').classList.remove('dark')
            setTheme('light')
          }
    }, [])

    const toggleThemeMode = () => {
        if ( !localStorage.getItem('theme') || localStorage.getItem('theme') === 'light') {
            localStorage.theme = 'dark';
            document.querySelector('body').classList.add('dark');
            document.querySelector('.title-principal').classList.add('dark');
            document.querySelector('.sub-title').classList.add('dark');

            {/* card top */}
            const cardTop = document.querySelectorAll('.card-top');
            for (let i = 0; i < cardTop.length; i++) {
              cardTop[i].classList.add('dark');
            }

            {/* card bottom */}
            const cardBottom = document.querySelectorAll('.card-bottom');
            for (let i = 0; i < cardBottom.length; i++) {
              cardBottom[i].classList.add('dark');
            }

            setTheme('dark');
        } else {
            localStorage.theme = 'light'
            document.querySelector('body').classList.remove('dark');
            document.querySelector('.title-principal').classList.remove('dark');
            document.querySelector('.sub-title').classList.remove('dark');

            {/* card top */}
            const cardTop = document.querySelectorAll('.card-top');
            for (let i = 0; i < cardTop.length; i++) {
              cardTop[i].classList.remove('dark');
            }

            {/* card bottom */}
            const cardBottom = document.querySelectorAll('.card-bottom');
            for (let i = 0; i < cardBottom.length; i++) {
              cardBottom[i].classList.remove('dark');
            }

            setTheme('light');
        }
    }

  return (
    <>
    <ThemeContext.Provider value={{ theme, toggleThemeMode }}>
        { children }
    </ThemeContext.Provider>
    </>
  )
}

export default ThemeProvider

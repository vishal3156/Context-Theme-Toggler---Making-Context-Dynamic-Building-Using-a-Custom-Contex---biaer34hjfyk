import React,{useContext, useEffect, useState} from 'react';
import {ThemeContext}from './ThemeProvider';

const LocalThemedBox = () => {
    const{theme} = useContext(ThemeContext);
    const [localTheme, setLocalTheme] = useState(theme);

    useEffect(() => {
        setLocalTheme(theme);
        let iniTheme = theme === 'dark'? 'Toggle local theme to light' : 'Toggle local theme to dark';
        setLocalBtn(iniTheme);
    }, [theme])
    const initial = localTheme === 'dark'? 'Toggle local theme to light' : 'Toggle local theme to dark';
    const [localBtn,setLocalBtn] = useState(initial)

    let localThemefn = () => {
        if(localBtn === 'Toggle local theme to dark'){
            // theme = 'dark';
            setLocalTheme('dark');
            setLocalBtn('Toggle local theme to light');
        }
        else{
            // theme = 'light';
            setLocalTheme('light');
            setLocalBtn('Toggle local theme to dark');
        }
    }

    return(
        <div style={{width:'200px',height:'200px', border:'2px solid green'}} id="local-themed-box" className={'bg-'+ localTheme}>
            <p id="local-themed-text-container" className={'txt-'+ localTheme}>hello</p>
            <button id="local-theme-toggler" onClick={localThemefn} className={`btn btn-${localTheme} txt-${localTheme}`}>{localBtn}</button>
        </div>
    )
}

export { LocalThemedBox }

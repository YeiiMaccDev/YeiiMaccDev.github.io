import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Theme.css'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import { useThemeContext } from '../context/ThemeProvider';

export const Theme = () => {
    const { systemDarkTheme, darkTheme, handleChangeTheme } = useThemeContext();
    console.log("Theme");

    return (
        <div className="switcher-container">
            <input
                type="checkbox"
                name="switcher"
                id="switcher-input"
                className="switcher-input"
                checked={darkTheme}
                onChange={handleChangeTheme}
            />
            <label htmlFor="switcher-input" className="switcher-label">
                <FontAwesomeIcon icon={darkTheme ? faSun : faMoon} className={darkTheme ? "icon-faSun" : "icon-faMoon"} />
            </label>
        </div>
    )
}

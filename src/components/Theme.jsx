import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Theme.css'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

export const Theme = () => {
    const isSystemDarkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDarkOrLight = (theme) => theme ? "dark" : "light";
    console.log("Theme");

    // Theme used in the system to set a light or dark favicon.
    const [systemDarkTheme, setSystemDarkTheme] = useState(isSystemDarkTheme)

    // selected theme for the page
    const [darkTheme, setDarkTheme] = useState(() => {
        const selectedTheme = localStorage.getItem("selectedTheme") || isDarkOrLight(systemDarkTheme);
        return (selectedTheme === "dark");
    });

    // Update page theme
    const setTheme = () => {
        document.getElementById("body").setAttribute("data-theme", isDarkOrLight(darkTheme));
        localStorage.setItem("selectedTheme", isDarkOrLight(darkTheme));
    }

    // Change the theme of the page according to the theme change of the system.
    const handleChangeSystemTheme = () => {
        const windowDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setDarkTheme(windowDarkTheme);
        setSystemDarkTheme(windowDarkTheme);
    }

    // Change the theme of the page according to the user
    const handleChangeTheme = () => {
        setDarkTheme(!darkTheme);
    }

    // Change the theme of the page according to the user
    useEffect(() => {
        setTheme();
    }, [darkTheme])

    // Change the theme of the page according to the theme change of the system.
    useEffect(() => {
        const darkModeListener = window.matchMedia('(prefers-color-scheme: dark)');
        darkModeListener.addEventListener('change', handleChangeSystemTheme);

        return () => {
            darkModeListener.removeEventListener('change', handleChangeSystemTheme);
        };
    }, []);


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

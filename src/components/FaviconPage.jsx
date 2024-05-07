import { useThemeContext } from "../context/ThemeProvider";

import darkFavicon from '../assets/img/faviconDark.ico';
import lightFavicon from '../assets/img/faviconLight.ico';

export const FaviconPage = () => {
    console.log("FaviconPage")

    const { systemDarkTheme } = useThemeContext();

    const faviconHref = (systemDarkTheme) ? lightFavicon : darkFavicon;
    // Update favicon dynamically
    document.querySelector("link[rel='icon']").href = faviconHref;

    return null;
}

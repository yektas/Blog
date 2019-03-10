import themes from '../themes';

const root = document.getElementById('root');

export function changeTheme(theme, init) {
    if(init){
        setTheme(theme);
        localStorage.setItem('userTheme', theme);
    } else {
        setTheme(theme);
        if(theme === 'dark') {
            localStorage.setItem('userTheme', 'light');
        } else {
            localStorage.setItem('userTheme', 'dark');
        }
    }
}

function setTheme(theme){
    root.style.setProperty('--background', themes[theme].background);
    root.style.setProperty('--text-color', themes[theme].textColor);
    root.style.setProperty('--secondary-text-color', themes[theme].secondaryTextColor);
    root.style.setProperty('--heading-color', themes[theme].headingColor);
}
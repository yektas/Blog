import themes from '../themes';

export function changeTheme(theme, init) {
	if (init) {
		setTheme(theme);
		localStorage.setItem('userTheme', theme);
	} else {
		setTheme(theme);
		localStorage.setItem('userTheme', theme);
	}
}
function setTheme(theme) {
	Object.keys(themes[theme]).forEach((key) => {
		const cssKey = `--${key}`;
		const cssValue = themes[theme][key];
		document.body.style.setProperty(cssKey, cssValue);
	});
}

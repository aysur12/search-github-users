import { useEffect, useState } from 'react';
import { ReactComponent as MoonIcon } from 'assets/icon-moon.svg';
import { ReactComponent as SunIcon } from 'assets/icon-sun.svg';
import styles from './ThemeSwitcher.module.scss';

export const ThemeSwitcher = () => {
  const [isDark, setDark] = useState(false);

  useEffect(()=> {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const themeText = isDark ? 'Light' : 'Dark';

  const ThemeIcon = isDark ? SunIcon : MoonIcon;

  const toggleThemeHandler = () => {
    setDark(!isDark);
  };

  return (
    <div className={styles.switcher} onClick={toggleThemeHandler}>
      <span>{themeText}</span>
      <ThemeIcon className={styles.icon} />
    </div>
  );
};

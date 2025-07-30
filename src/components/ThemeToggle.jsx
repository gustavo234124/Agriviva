import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = darkMode ? "light" : "dark";
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <>
      <label htmlFor="theme" className="theme">
        <span className="theme__toggle-wrap">
          <input
            id="theme"
            className="theme__toggle"
            type="checkbox"
            role="switch"
            name="theme"
            value="dark"
            checked={darkMode}
            onChange={toggleTheme}
          />
          <span className="theme__fill"></span>
          <span className="theme__icon">
            <span className="theme__icon-part"></span>
            <span className="theme__icon-part"></span>
            <span className="theme__icon-part"></span>
            <span className="theme__icon-part"></span>
            <span className="theme__icon-part"></span>
            <span className="theme__icon-part"></span>
            <span className="theme__icon-part"></span>
            <span className="theme__icon-part"></span>
            <span className="theme__icon-part"></span>
          </span>
        </span>
      </label>

<style jsx>{`
  .theme {
    display: flex;
    align-items: center;
    -webkit-tap-highlight-color: transparent;
    width: 4.5em;     /* ancho fijo del contenedor */
    height: 1.9;      /* alto fijo */
    position: relative;
  }

  .theme__fill,
  .theme__icon {
    transition: 0.3s;
  }

  .theme__fill {
    background-color: var(--bg);
    display: block;
    mix-blend-mode: difference;
    position: fixed;
    inset: 0;
    height: 100%;
    transform: translateX(-100%);
  }

  .theme__icon,
  .theme__toggle {
    z-index: 1;
  }

  .theme__icon,
  .theme__icon-part {
    position: absolute;
  }

  .theme__icon {
    display: block;
    top: 0.2em;      /* ajustado para tamaño pequeño */
    left: 0.2em;
    width: 1.1em;
    height: 1.1em;
  }

  .theme__icon-part {
    border-radius: 50%;
    box-shadow: 0.3em -0.3em 0 0.4em hsl(0, 0%, 100%) inset;
    top: calc(50% - 0.4em);
    left: calc(50% - 0.4em);
    width: 0.8em;
    height: 0.8em;
    transition: box-shadow var(--transDur) ease-in-out,
      opacity var(--transDur) ease-in-out,
      transform var(--transDur) ease-in-out;
    transform: scale(0.5);
  }

  .theme__icon-part ~ .theme__icon-part {
    background-color: hsl(0, 0%, 100%);
    border-radius: 0.05em;
    top: 50%;
    left: calc(50% - 0.05em);
    transform: rotate(0deg) translateY(0.4em);
    transform-origin: 50% 0;
    width: 0.1em;
    height: 0.15em;
  }

  /* Las demás reglas de icon-part se mantienen, ajusta valores si quieres */

  .theme__label,
  .theme__toggle,
  .theme__toggle-wrap {
    position: relative;
  }

  .theme__toggle,
  .theme__toggle:before {
    display: block;
  }

  .theme__toggle {
    background-color: hsl(48, 90%, 85%);
    border-radius: 25% / 50%;
    box-shadow: 0 0 0 0.125em var(--primaryT);
    padding: 0.2em;
    width: 4em;
    height: 2em;
    -webkit-appearance: none;
    appearance: none;
    transition: background-color var(--transDur) ease-in-out,
      box-shadow 0.15s ease-in-out,
      transform var(--transDur) ease-in-out;
  }

  .theme__toggle:before {
    background-color: hsl(48, 90%, 55%);
    border-radius: 50%;
    content: "";
    width: 1.5em;
    height: 1.5em;
    transition: 0.3s;
  }

  .theme__toggle:focus {
    box-shadow: 0 0 0 0.125em var(--primary);
    outline: transparent;
  }

  /* Checked */
  .theme__toggle:checked {
    background-color: hsl(198, 90%, 15%);
  }

  /* Aquí limitamos el translateX para que no salga del contenedor */
  .theme__toggle:checked:before,
  .theme__toggle:checked ~ .theme__icon {
    transform: translateX(2.1em); /* ajustado a 2.5em para que quepa */
  }

  .theme__toggle:checked:before {
    background-color: hsl(198, 90%, 55%);
  }

  .theme__toggle:checked ~ .theme__fill {
    transform: translateX(0);
  }

  /* ... resto igual ... */

  .theme__toggle-wrap {
    margin: 0 0.75em;
  }

  @supports selector(:focus-visible) {
    .theme__toggle:focus {
      box-shadow: 0 0 0 0.125em var(--primaryT);
    }

    .theme__toggle:focus-visible {
      box-shadow: 0 0 0 0.125em var(--primary);
    }
  }
`}</style>


    </>
  );
}

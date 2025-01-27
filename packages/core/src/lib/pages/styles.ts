export default `:root {
  --border-width: 1px;
  --border-radius: 0.5rem;
  --color-error: #c94b4b;
  --color-info: #157efb;
  --color-info-text: #fff;
}

.__next-auth-theme-auto,
.__next-auth-theme-light {
  --color-background: #fff;
  --color-text: #000;
  --color-primary: #444;
  --color-control-border: #bbb;
  --color-button-active-background: #f9f9f9;
  --color-button-active-border: #aaa;
  --color-seperator: #ccc;
}

.__next-auth-theme-dark {
  --color-background: #000;
  --color-text: #fff;
  --color-primary: #ccc;
  --color-control-border: #555;
  --color-button-active-background: #060606;
  --color-button-active-border: #666;
  --color-seperator: #444;
}

@media (prefers-color-scheme: dark) {
  .__next-auth-theme-auto {
    --color-background: #000;
    --color-text: #fff;
    --color-primary: #ccc;
    --color-control-border: #555;
    --color-button-active-background: #060606;
    --color-button-active-border: #666;
    --color-seperator: #444;
  }
}

body {
  background-color: var(--color-background);
  margin: 0;
  padding: 0;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

h1 {
  font-weight: 400;
  margin-bottom: 1.5rem;
  padding: 0 1rem;
  color: var(--color-text);
}

p {
  color: var(--color-text);
}

form {
  margin: 0;
  padding: 0;
}

label {
  font-weight: 500;
  text-align: left;
  margin-bottom: 0.25rem;
  display: block;
  color: var(--color-text);
}

input[type] {
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: 0.5rem 1rem;
  border: var(--border-width) solid var(--color-control-border);
  background: var(--color-background);
  font-size: 1rem;
  border-radius: var(--border-radius);
  box-shadow: inset 0 0.1rem 0.2rem rgba(0, 0, 0, 0.2);
  color: var(--color-text);
}

input[type]:focus {
    box-shadow: none;
  }

p {
  margin: 0 0 1.5rem 0;
  padding: 0 1rem;
  font-size: 1.1rem;
  line-height: 2rem;
}

a.button {
  text-decoration: none;
  line-height: 1rem;
}

a.button:link,
  a.button:visited {
    background-color: var(--color-background);
    color: var(--color-primary);
  }

button,
a.button {
  margin: 0 0 0.75rem 0;
  padding: 0.75rem 1rem;
  color: var(--provider-color, var(--color-primary));
  background-color: var(--provider-bg, var(--color-background));
  font-size: 1.1rem;
  min-height: 62px;
  border-color: rgba(0, 0, 0, 0.1);
  border-radius: var(--border-radius);
  transition: all 0.1s ease-in-out;
  box-shadow: #000 0px 0px 0px 0px, #000 0px 0px 0px 0px,
    rgba(0, 0, 0, 0.2) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px;
  font-weight: 500;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

button:has(img), a.button:has(img) {
    justify-content: unset;
  }

button:has(img) span, a.button:has(img) span {
      flex-grow: 1;
    }

button:hover, a.button:hover {
    cursor: pointer;
  }

button:active, a.button:active {
    box-shadow: 0 0.15rem 0.3rem rgba(0, 0, 0, 0.15),
      inset 0 0.1rem 0.2rem var(--color-background),
      inset 0 -0.1rem 0.1rem rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

button #provider-logo, a.button #provider-logo {
    display: block;
  }

button #provider-logo-dark, a.button #provider-logo-dark {
    display: none;
  }

@media (prefers-color-scheme: dark) {
  button,
  a.button {
    color: var(--provider-dark-color, var(--color-primary));
    background-color: var(--provider-dark-bg, var(--color-background));
    border: 1px solid #0d0d0d;
    box-shadow: #000 0px 0px 0px 0px, #ccc 0px 0px 0px 0px,
      rgba(255, 255, 255, 0.01) 0px 5px 5px -3px,
      rgba(255, 255, 255, 0.05) 0px 4px 6px -4px;
  }
  #provider-logo {
    display: none !important;
  }
  #provider-logo-dark {
    display: block !important;
  }
}

a.site {
  color: var(--color-primary);
  text-decoration: none;
  font-size: 1rem;
  line-height: 2rem;
}

a.site:hover {
    text-decoration: underline;
  }

.page {
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  margin: 0;
  padding: 0;
}

.page > div {
    text-align: center;
    padding: 0.5rem;
  }

.error a.button {
    display: inline-block;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-top: 0.5rem;
  }

.error .message {
    margin-bottom: 1.5rem;
  }

.signin input[type="text"] {
    margin-left: auto;
    margin-right: auto;
    display: block;
  }

.signin hr {
    display: block;
    border: 0;
    border-top: 1px solid var(--color-seperator);
    margin: 1.5em auto 0 auto;
    overflow: visible;
  }

.signin hr::before {
      content: "or";
      background: var(--color-background);
      color: #888;
      padding: 0 0.4rem;
      position: relative;
      top: -0.6rem;
    }

.signin .error {
    background: #f5f5f5;
    font-weight: 500;
    border-radius: 0.3rem;
    background: var(--color-info);
  }

.signin .error p {
      text-align: left;
      padding: 0.5rem 1rem;
      font-size: 0.9rem;
      line-height: 1.2rem;
      color: var(--color-info-text);
    }

.signin > div,
  .signin form {
    display: block;
  }

.signin > div input[type], .signin form input[type] {
      margin-bottom: 0.5rem;
    }

.signin > div button, .signin form button {
      width: 100%;
    }

.signin > div,
  .signin form {

    max-width: 300px;
}
.signout .message {
    margin-bottom: 1.5rem;
  }

.logo {
  display: inline-block;
  margin-top: 100px;
  max-width: 300px;
  max-height: 150px;
}

.card {
  max-width: -moz-max-content;
  max-width: max-content;
  border: 1px solid var(--color-control-border);
  border-radius: 5px;
  padding: 20px 50px;
  margin: 50px auto;
}

.card .header {
    color: var(--color-primary);
  }

.section-header {
  color: var(--brand-color, var(--color-text));
}
`
// Generated by `pnpm css`
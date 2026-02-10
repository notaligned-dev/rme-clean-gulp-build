# Rem Markup Engine — Clean Gulp Build

[:ru: Русская версия](README.ru.md)

Full project changelog is [available here :bookmark_tabs:](CHANGELOG.md)

> [!NOTE] 
> Build is in **beta stage**. APIs and structure may change slightly until the first stable release.

This Gulp build is designed to make website development faster and more comfortable. No excessive packages, clean minimalistic kit for no frontend-framework websites.

Who is this built for?
- CMS themes (primarily Wordpress and OpenCart)
- No-framework websites
- Static pages

## Getting started

Before you begin, ensure you have met the requirements.
- Node.js >= 24
- npm >= 11

> [!TIP]
> Listed requirements represent the system this project was created on and worked properly so there are pretty fresh software versions. Everything should run smoothly on earlier Node.js and npm versions.

### Step 1 — Downloading.

You have two options: 
1. **Recommended**: download latest release [here](https://github.com/notaligned-dev/rme-clean-gulp-build/releases).
2. Clone repository via HTTPS into desired folder. To do it, run next command in the terminal:
 
```
git clone --recurse-submodules https://github.com/notaligned-dev/rme-clean-gulp-build.git
```

### Step 2 — Installing packages.

Open terminal in folder with project files and run next command:

```
npm install
```

Wait for the installation to finish. Make sure everything installed properly.

### Step 3 (Optional) — Customize configuration.

Configuration is a set of settings that let you change workflow for your needs. 

Gulp uses configurations from `./gulp/config/`, you can either:
1) Change existing configuration (`custom.config.js` is recommended so you will not loose any options on updates)
2) Create your own configuration and name it by example: `your-name.config.js`

Every configuration extends `./gulp/globals/base.config.js`. You can look at all customizable options there or in [Configuration Options section](#user-content-configuration-options).

### Step 4 — Starting.

You are ready to go! To launch Gulp run one of the NPM Scripts (you can also run Gulp manually from terminal):
- `dev` — runs development process
- `build` — builds files for production
- `lint` — lint JS files

There are same scripts with postfixes like `build:custom`. Name after colon refers to used configuration name (more in previous step).

Gulp should work from now on. It's **highly recommended** to read next section about [how it works](#user-content-how-it-works)

## How it Works

On launch Gulp process your files to make them optimal for development or production.

*Development task* rebuilds files on every change. SCSS turns into CSS, JS gets processed through Babel for older browser support.
It also turns on browser hot reload. To use it either open `browser-sync` server URL from console logs or open your domain and add port of this URL to the end of your local domain (before parameters).  

*Production task* builds files one time, then optimize them. In addition to dev script, CSS also gets minified and prefixed for cross-browser support and images are converted to `.webp` format.

To run different configurations, you should run Gulp with environment variable `BUILD_CONFIG=name`, where `name` refers to configuration file name. For example `custom` is the name of `custom.config.js` file.

## Features and tools
This build includes:
- SCSS
    1. Autoprefixing and minification for production
    2. Sourcemaps
- JS
    1. ESBuild bundler
    2. Babel for compatibility with older browsers
    3. Linting script (runs manually)
- Configuration system
- Browsers hot reload
- Image conversion to `webp`
- Error logging

Project uses [Rem Markup Engine Theme](https://github.com/notaligned-dev/rem-markup-engine-theme) as a submodule for source assets (totally optional).

> [!NOTE]
> If you are not familiar with SCSS or Babel, you should check out the relevant documentation in the official sources.

## Configuration Options

All configuration properties (listed in `./gulp/globals/base.config.js`):
1. `sourceFolder` — folder for source assets
2. `buildFolder` — folder for output assets
3. `isProxy` — set to `true` if you already have local server running and want to use browser hot reload on it
4. `localWebsiteURL` — works only with `isProxy`: `true`. Insert your local server website URL

## Folder Structure

This is folder structure that required for this build to work properly. You can change paths and logic in Gulp files.

```powershell
rme-clean-gulp-build
├───gulp                # all Gulp related files
│   ├───config          # configurations
│   ├───globals
│   ├───tasks 
│   └───index.js        # Gulp entry point 
├───src
│   ├───assets          # default source assets structure
│   │   ├───fonts
│   │   ├───img
│   │   ├───js
│   │   │   └───libs
│   │   ├───scss        # recommended DART SASS 3.0 structure
│   │   └───videos
│   └───theme           # rme-theme submodule (optional)
├───.eslintrc.json      # js linter configuration
├───babel.config.js     # babel configuration
├───CHANGELOG.md
├───LICENSE
├───package-lock.json
├───package.json 
└───README.md           # You are here
```

## License

GNU General Public License v3.0
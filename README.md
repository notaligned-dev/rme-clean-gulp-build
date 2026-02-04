# Rem Markup Engine — Clean Gulp Build

[:ru: Русская версия](README.ru.md)

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

### Step 1.

You have two options: 
1. **Recommended**: download latest release [here](https://github.com/notaligned-dev/rme-clean-gulp-build/releases).
2. Clone repository via HTTPS into desired folder. To do it, run next command in the terminal:
 
```
git clone --recurse-submodules https://github.com/notaligned-dev/rme-clean-gulp-build.git
```

### Step 2.

Open terminal in folder with project files and run next command:

```
npm install
```

Wait for the installation to finish. Make sure everything installed properly.

### Step 3 (Optional)

Set up configuration (file in path `gulpfile.js/config.js`) by changing constant values.

1. `sourceFolder` — folder for source assets
2. `buildFolder` — folder for output assets
3. `isProxy` — set to `true` if you already have local server and want to use browser hot reload on it
    1. `localWebsiteURL` — change it to your local server domain URL if you turned on `isProxy`

### Step 4.

You are ready to go! To launch Gulp run one of the commands (tasks) below in the terminal:
- `gulp` — runs `dev` (development) task by default
- `gulp build` — builds files for production
- `gulp lint` — lint JS files

Gulp should work from now on. It's **highly recommended** to read next section about [how it works](#user-content-how-it-works)

## How it Works

On launch Gulp process your files to make them optimal for development or production.

*Development task* rebuilds files on every change. SCSS turns into CSS, JS gets processed through Babel for older browser support.
It also turns on browser hot reload. To use it either open `browser-sync` server URL from console logs or open your domain and add port of this URL to the end of your local domain (before parameters).  

*Production task* builds files one time, then optimize them. In addition to dev script, CSS also gets minified and prefixed for cross-browser support and images are converted to `.webp` format.

## Features and tools
This build includes:
- SCSS
    1. Autoprefixing and minification for production
    2. Sourcemaps
- JS
    1. ESBuild bundler
    2. Babel for compatibility with older browsers
    3. Linting script (runs manually)
- Browsers hot reload
- Image conversion to `webp`
- Error logging

Project uses [Rem Markup Engine Theme](https://github.com/notaligned-dev/rem-markup-engine-theme) as a submodule for source assets (totally optional).

> [!NOTE]
> If you are not familiar with SCSS or Babel, you should check out the relevant documentation in the official sources.

## Folder Structure

This is folder structure that required for this build to work properly. You can change paths and logic in Gulp files.

```powershell
rme-clean-gulp-build
├───gulpfile.js         # all gulp related files
│   ├───globals
│   ├───tasks 
│   ├───config.js       # build configuration
│   └───index.js        # gulp entry point 
├───src
│   └───assets
│       ├───fonts
│       ├───img
│       ├───js
│       │   └───libs
│       ├───scss        # recommended DART SASS 3.0 structure
│       ├───theme       # rme-theme submodule (optional)
│       └───videos
├───.eslintrc.json      # esbuild configuration
├───babel.config.js     # babel configuration
├───LICENSE
├───package-lock.json
├───package.json 
└───README.md           # You are here
```

## License

GNU General Public License v3.0
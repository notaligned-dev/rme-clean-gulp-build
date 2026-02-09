# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/).

## [Unreleased]

### Added

- Installed `cross-env` package for cross-environment scripts

### Changed

- New RME theme submodule directory: `src/assets/theme` → `src/rem-markup-engine-theme`
- Example source files replaces with `.gitkeep` to save folder structure
- Gulp entry point
- Path resolution variables for `browser-sync`

### Fixed

- Scripts watch process

### Removed

- Unused variables in `glp/globals/paths.js`

## [0.1-beta.1] — 2026-02-05

### Fixed

- Fixed path resolution for gulp task (was broken)

## [0.1-beta.0] — 2026-02-04

### Added

- Initial public release
- Gulp build system for SCSS, JavaScript and assets
- ESBuild integration for JavaScript bundling
- SCSS compilation with sourcemaps and production optimization
- BrowserSync live reload support
- Optional Rem Markup Engine Theme submodule
- Linting configuration for JS

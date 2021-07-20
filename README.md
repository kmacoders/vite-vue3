

# Vue 3 Starter Setup ⚡
## Feature

> Based on Vite 

- 💡 Vue 3 
- 💡 VueX 4
- 🛠️ Typescript support ( SFC )
- 🛠️ SCSS  support ( SFC )
- ⚡️ Eslint ( support Vue 3, base extends Airbnb for Typescript ), Stylelint
- ⚡️ CommitLint ( with Husky )
- ⚡️ Babel
- 📦 Support generate docs from JSDocs ( only src/helpers || src/type modify in ./typedocs.json )
- 📦 Support alias
- 📦 Build with 7 in 1 SCSS folder pattern
- 📦 Hot reload
- 📦 Optimized Build
- 📦 Bundle Analyzer
- ...
- Updating...

### Commit code

#### Commitlint Config Conventional

-   `build` : Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm).
-   `ci` : Changes to our CI configuration files and scripts (example scopes: Gitlab CI, Circle, BrowserStack, SauceLabs).
-   `chore` : add something without touching production code (Eg: update npm dependencies)
-   `docs` : Documentation only changes
-   `feat` : A new feature
-   `fix` : A bug fix
-   `perf` : A code change that improves performance
-   `refactor` : A code change that neither fixes a bug nor adds a feature
-   `revert` : Reverts a previous commit
-   `style` : Changes that do not affect the meaning of the code (Eg: adding white-space, formatting, missing semi-colons, etc)
-   `test` : Adding missing tests or correcting existing tests

```
git commit -m "fix textfield" # fails
git commit -m "fix: fix textfield" # passes
```
### SCSS

-   Only import on main.scss
-   On child folder, import child file to `*-dir.scss` , and import `*-dir.scss` in `main.scss`

Example :

`_utils.scss`

```
@import 'variables.scss' # Sass Variables
@import 'functions.scss' # Sass Functions
@import 'mixins.scss' # Sass Mixins
@import 'helpers.scss' # Class & placeholders helpers
```
`main.scss`

```
/*
 * Utils
*/
@import  './utils/utils-dir';
```

### ⚡️ Happy Coding !!! 
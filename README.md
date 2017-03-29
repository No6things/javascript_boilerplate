#JavaScript Development Environment

This is a generic JavaScript development environment that I build from scratch in ["Building a JavaScript Development Environment" on Pluralsight](https://app.pluralsight.com/library/courses/javascript-development-environment/table-of-contents). This isn't tied to any specific JS framework.

## Get Started
1. **Install [Node 6](https://nodejs.org)**. Need to run multiple versions of Node? Use [nvm](https://github.com/creationix/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows)
2. **Clone this repository.** - `git clone https://github.com/coryhouse/javascript-development-environment.git` or [download the zip](https://github.com/coryhouse/javascript-development-environment/archive/master.zip)
3. **Make sure you're in the directory you just created.** - `cd javascript-development-environment`
4. **Install Node Packages.** - `npm install`
5. **Run the app.** - `npm start -s`
This will run the automated build process, start up a webserver, and open the application in your default browser. When doing development with this kit, this command will continue watching files all your files. Every time you hit save the code is rebuilt, linting runs, and tests run automatically. Note: The -s flag is optional. It enables silent mode which suppresses unnecessary messages during the build.
6. Having issues? See below.

## Having Issues? Try these things first:
1. Run `npm install` - If you forget to do this, you'll see this: `babel-node: command not found`.
2. Make sure you're running the latest version of Node. Or, at least [Node 4.4.6](https://nodejs.org/en/download/releases/) if you're having issues on Windows. Node 7 has issues on some Windows machines.
3. Make sure files with names that begin with a dot (.babelrc, .editorconfig, .eslintrc) are copied to the project directory root. This is easy to overlook if you copy this repository manually.
4. Don't run the project from a symbolic link. It will cause issues with file watches.
5. Having linting issues? Delete any .eslintrc that you're storing in your user directory. Also, disable any ESLint plugin / custom rules that you've enabled within your editor. These will conflict with the ESLint rules defined in the course.
6. Check Webpack2 configs are resolving the expected modules and loaders needed are installed.
7. Nothing above work? Delete your node_modules folder and re-run npm install.

### Features
1. Sass preprocessor.
2. Minification with delete of spaces, comments, etc.
3. Develop and Production environments with `npm start` and `npm run build`.
4. Local server for development purpose.
4. Javascript Linter watch.
5. Angular 1.6.3 initial scaffolding.
6. Mocha environment.
7. Javascript ES6 transpilation.
8. Mocked up server API.
9. Webpack route aliases.
10. Node modules security check.

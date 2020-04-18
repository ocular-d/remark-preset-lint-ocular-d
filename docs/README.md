# Update NPM Packages

Install `npm-check-updates`

```shell
sudo npm install -g npm-check-updates
```

Run in $PROJECT dir

```shell
ncu -u
npm install
```

## Install

Add the package as development dependency to your project:

```sh
npm install --save-dev remark-preset-lint-ocular-d
```

Run `npm install` from within the project root to bootstrap the project and install the development- and runtime dependencies.
Note that **this will not install the required package for the remark CLI** which is defined as
[peer dependency](https://nodejs.org/en/blog/npm/peer-dependencies "Link to blog post about peer dependencies").
It must be installed separately as described below.

## Peer Dependencies

*remark-lint* can be used to process markdown using plugins with the CLI for *remark*.
Therefore this package depends on the [remark-cli](https://www.npmjs.com/package/remark-cli "Link to remark-cli") package defined
as [peer dependency](https://nodejs.org/en/blog/npm/peer-dependencies "Link to blog post about peer dependencies").

If using **npm 5** or higher (pre-bundled with [Node.js 8+](https://nodejs.org/en/download "Link to Node.js download page"),
all peer dependencies can be installed using the [npx](https://www.npmjs.com/package/npx "Link to npx package") tool
which comes pre-bundled with **npm 5+**:

```sh
npx install-peerdeps --dev remark-preset-lint-ocular-d
```

If using **npm < 5**, the *npx* tool is not pre-bundled, but users can either simply install [npx](https://www.npmjs.com/package/npx "Link to npx package")
globally and then run the above command or install the [install-peerdeps](https://www.npmjs.com/package/install-peerdeps "Link to peerdeps package")
package locally/globally to let it handle the installation of all peer dependencies.

```sh
npm install install-peerdeps
./node_modules/.bin/install-peerdeps --dev remark-preset-lint-ocular-d
```

Or via global installation:

```sh
npm install -g install-peerdeps
install-peerdeps --dev remark-preset-lint-ocular-d
```

Linux & macOS user can install all peer dependencies can be installed using the new [npx](https://www.npmjs.com/package/npx "Link to npx package")
tool which comes pre-bundled with **npm 5+**:

```sh
npx install-peerdeps --dev remark-preset-lint-ocular-d
```

### Manually

All peer dependencies can also be installed manually by installing the correct version of each package:

```sh
npm info "remark-preset-lint-ocular-d@latest" peerDependencies
```

Or with Yarn

```sh
yarn add --peer remark-cli
```

## Usage

This remark-lint configuration preset can be used by adding it to the plugins within the [remark-lint configuration file](https://github.com/remarkjs/remark-lint#configuring-remark-lint "Link to remark.js docs") of your project.

Add `remark-preset-lint-ocular-d` to the `plugins` array in your `.remarkrc.js` or `.remarkrc` file:

```js
module.exports = {
  plugins: ["remark-preset-lint-ocular-d"]
};
```

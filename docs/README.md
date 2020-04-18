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

## Usage

This remark-lint configuration preset can be used by adding it to the plugins within the [remark-lint configuration file](https://github.com/remarkjs/remark-lint#configuring-remark-lint "Link to remark.js docs") of your project.

Add `remark-preset-lint-ocular-d` to the `plugins` array in your `.remarkrc.js` or `.remarkrc` file:

```js
module.exports = {
  plugins: ["remark-preset-lint-ocular-d"]
};
```

/*
 * Based on Arctic Ice Studio remark-lint Preset
 * Repository: https://github.com/arcticicestudio/remark-preset-lint-arcticicestudio
 * License:    MIT
 */

/**
 * @file Official remark-lint core rules for raw HTML document nodes.
 * @author Arctic Ice Studio <development@arcticicestudio.com> and ocular-d
 * @see {@link https://github.com/remarkjs/remark-lint/blob/master/doc/rules.md#list-of-rules remark-lint Core Rules}
 */

/**
 * Disallow using raw HTML nodes.
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-html no-html}
 */
const noHtml = require("remark-lint-no-html");

module.exports = {
  plugins: [
    [noHtml, false]
  ]
};

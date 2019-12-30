/*
 * Based on Arctic Ice Studio remark-lint Preset
 * Repository: https://github.com/arcticicestudio/remark-preset-lint-arcticicestudio
 * License:    MIT
 */

/**
 * @file Official remark-lint core rules for blockquote document nodes.
 * @author Arctic Ice Studio <development@arcticicestudio.com> and ocular-d
 * @see {@link https://github.com/remarkjs/remark-lint/blob/master/doc/rules.md#list-of-rules remark-lint Core Rules}
 */

/**
 * Enforce correct indentation for blockquotes.
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-blockquote-indentation blockquote-indentation}
 * @see {@link https://ocular-d.github.io/styleguide-markdown/blockquotes.html#indentation Style Guide: "Blockquotes - Indentation"}
 */
const blockquoteIndentation = require("remark-lint-blockquote-indentation");
/**
 * Disallow blank lines without markers ('>') in blockquotes.
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-blockquote-without-marker remark-lint-no-blockquote-without-marker}
 * @see {@link https://ocular-d.github.io/styleguide-markdown/blockquotes.html#multi-line Style Guide: "Blockquotes - Multi Line"}
 */
const noBlockquoteWithoutMarker = require("remark-lint-no-blockquote-without-marker");

module.exports = {
  plugins: [
    [blockquoteIndentation, ["error", 2]],
    [noBlockquoteWithoutMarker, ["warn"]]
  ]
};

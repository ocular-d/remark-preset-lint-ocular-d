/*
 * Based on Arctic Ice Studio remark-lint Preset
 * Repository: https://github.com/arcticicestudio/remark-preset-lint-arcticicestudio
 * License:    MIT
 */

/**
 * @file Official remark-lint core rules for paragraph document nodes.
 * @author Arctic Ice Studio <development@arcticicestudio.com> and ocular-d
 * @see {@link https://github.com/remarkjs/remark-lint/blob/master/doc/rules.md#list-of-rules remark-lint Core Rules}
 */

/**
 * Disallow the content of paragraphs to be indented.
 *
 * @since 0.1.0
 * @see {@link https://github.com/remarkjs/remark-lint/tree/master/packages/remark-lint-no-paragraph-content-indent no-paragraph-content-indent}
 * @see {@link https://ocular-d.github.io/styleguide-markdown/paragraphs.html#no-indentation Style Guide: "Paragraphs - No Indentation"}
 */
const noParagraphContentIndent = require("remark-lint-no-paragraph-content-indent");

module.exports = {
  plugins: [
    [noParagraphContentIndent, ["error"]]
  ]
};

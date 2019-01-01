# How to contribute

The files in this repository are used as the starting point for all students. Because we want students to write the majority of the code themselves, pull requests (most likely) will _not_ be merged into the project.

## 如果你真的想要为开源项目贡献
## 你必须遵循代码风格

我们使用[JSDoc](http://usejsdoc.org/) with [TypeScript](https://github.com/Microsoft/TypeScript/wiki/JSDoc-support-in-JavaScript). 

## Pull request titles
标题必须明了，用简练的语言描述：
**该pull request解决了哪些问题**
在提交之前务必去issues看下该功能是否已经实现？

> type(scope): message subject

* The `type` must be one of: `new_audit` `core` `tests` `docs` `deps` `report` `cli` `extension` `misc`. (See [`.cz-config`](https://github.com/GoogleChrome/lighthouse/blob/master/.cz-config.js#L13))
* The `scope` is optional, but recommended. Any string is allowed; it should indicate what the change affects.
* The `message subject` should be pithy and direct.
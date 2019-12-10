[English](./README.md) | 简体中文

# Web Console Boilerplate

[![LGTM Alerts](https://img.shields.io/lgtm/alerts/github/NicolasSchwarzer/web-console-boilerplate)](https://lgtm.com/projects/g/NicolasSchwarzer/web-console-boilerplate/alerts/) [![LGTM Grade](https://img.shields.io/lgtm/grade/javascript/github/NicolasSchwarzer/web-console-boilerplate)](https://lgtm.com/projects/g/NicolasSchwarzer/web-console-boilerplate/alerts/) [![Dependencies](https://img.shields.io/david/NicolasSchwarzer/web-console-boilerplate)](https://david-dm.org/NicolasSchwarzer/web-console-boilerplate) [![Dev Dependencies](https://img.shields.io/david/dev/NicolasSchwarzer/web-console-boilerplate)](https://david-dm.org/NicolasSchwarzer/web-console-boilerplate?type=dev) [![GitHub Issues](https://img.shields.io/github/issues/NicolasSchwarzer/web-console-boilerplate)](https://github.com/NicolasSchwarzer/web-console-boilerplate/issues) [![GitHub Pull Requests](https://img.shields.io/github/issues-pr/NicolasSchwarzer/web-console-boilerplate)](https://github.com/NicolasSchwarzer/web-console-boilerplate/pulls) [![GitHub License](https://img.shields.io/github/license/NicolasSchwarzer/web-console-boilerplate)](https://github.com/NicolasSchwarzer/web-console-boilerplate/blob/master/LICENSE) [![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FNicolasSchwarzer%2Fweb-console-boilerplate.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FNicolasSchwarzer%2Fweb-console-boilerplate?ref=badge_shield) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING_zh-CN.md#%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%B4%A1%E7%8C%AE)

Web 控制台项目模板，节省你的项目初始化时间。

## 特性

* **Web 项目模板**，为 React 开发者定制，目前集成了 React Router 和 Ant Design。
* **大量使用 React 新特性**，包括严格模式、错误边界、懒加载、memoization、fragments、Hooks 等等...
* **Webpack 配置最佳实践**，支持 tree shaking、代码分割、持久化缓存、热重载、bundle 大小分析等等...
* **代码风格检查**，在代码提交时会自动运行 ESLint 和 StyleLint，检查规则基于 `eslint-config-airbnb` 和 `stylelint-config-standard`。
  * **注意**：ESLint 仍然使用 5.x.x 版本，最新的 6.x.x 版本和 [VSCode ESLint 插件](https://github.com/microsoft/vscode-eslint) 存在兼容性问题，详情请参见插件 issue [#696](https://github.com/microsoft/vscode-eslint/issues/696) 和评论 [#507855728](https://github.com/microsoft/vscode-eslint/issues/696#issuecomment-507855728)。

## 开始

```shell
# 安装依赖。
$ npm install

# 本地开发。
$ npm start

# 构建应用。
$ npm run build

# 代码风格检查。
$ npm run lint

# 代码风格修复。
$ npm run lint-fix
```

## 使用

拷贝本项目模板，基于该模板来开发你自己的项目。**注意：请移除 `.npmrc` 文件，这样可以在安装依赖时生成 `package-lock.json`，以保证依赖安装的可靠性**。

## 参与共建

请参考[贡献指南](./CONTRIBUTING_zh-CN.md)。

## License

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FNicolasSchwarzer%2Fweb-console-boilerplate.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FNicolasSchwarzer%2Fweb-console-boilerplate?ref=badge_large)

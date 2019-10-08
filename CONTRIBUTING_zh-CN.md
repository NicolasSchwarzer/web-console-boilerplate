[English](./CONTRIBUTING.md) | 简体中文

# 参与共建

想要给 Web Console Boilerplate 贡献自己的一份力量？

本文档会指导你如何为 Web Console Boilerplate 贡献一份自己的力量，请在你要提 issue 或者 pull request 之前花几分钟来阅读一遍本文档。

## 行为准则

这里有一份[行为准则](./CODE_OF_CONDUCT.md)，希望所有的贡献者都能遵守，请花时间阅读一遍全文以确保你能明白哪些是可以做的，哪些是不可以做的。

## Bugs

本仓库使用 [GitHub Issues](https://github.com/NicolasSchwarzer/web-console-boilerplate/issues) 来做 bug 追踪。在你报告一个 bug 之前，请先确保已经搜索过已有的 issue。

## 新增功能

如果你有新增功能的想法，我同样推荐你提 feature request issue。

## 第一次贡献

如果你还不清楚怎么在 GitHub 上提 pull request，可以通过下列免费视频来学习：

[如何为 GitHub 上的开源仓库贡献代码](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)

## Pull Request

作者会关注所有的 pull request，并 review 以及合并你的代码，也有可能要求你做一些修改或者告诉你为什么不能接受这样的修改。

**在你发送 pull request 之前**，请确认你是按照下面的步骤来做的：

1. Fork 该仓库并基于 `master` 分支新建你自己的分支。
2. 在项目根目录下运行了 `npm install`。
3. 确保你的代码通过了 Lint 检查 `npm run lint`。小贴士：Lint 会在你 git commit 的时候自动运行。

## 开发流程

在你 clone 了 Web Console Boilerplate 的代码并且使用 `npm install` 安装完依赖后，你还可以运行下面几个常用的命令：

1. `npm start` 在本地运行 Web Console Boilerplate。
2. `npm run lint` 检查代码风格。
3. `npm run lint-fix` 检查并修复代码风格。
4. `npm run build` 构建 Web Console Boilerplate 的 production 版本到 build 目录。
5. `npm run analyze` 可视化分析 bundle 大小。

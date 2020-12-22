- [介绍](#介绍)
  - [使用](#使用)
  - [主要依赖](#主要依赖)
- [规范](#规范)
  - [Git 提交规范](#git-提交规范)
  - [书写顺序](#书写顺序)
- [其他](#其他)
  - [Dev 依赖](#dev-依赖)

## 介绍

DFC 前端工程，基于 Vue3 + Vite + Ant-design-vue2 + Typescript4

### 使用

```
# 克隆项目并安装依赖
git clone https://github.com/DragonFlyXD/dfcf.git
cd dfcf
yarn

# 初始化 husky
yarn husky install

# 运行
yarn dev
```

### 主要依赖

-   [vue3](https://github.com/vuejs/vue)
-   [vite](https://github.com/vitejs/vite)
-   [vue-router4](https://github.com/vuejs/vue-router)
-   [vuex4](https://github.com/vuejs/vuex)
-   [ant-design-vue2](https://github.com/vueComponent/ant-design-vue)
-   [axios](https://github.com/axios/axios)
-   [dayjs](https://github.com/iamkun/dayjs)
-   [nprogress](https://github.com/rstacruz/nprogress)

## 规范

代码提交、书写的规范

### Git 提交规范

参考 [vue - angular](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md)

-   feat：新功能
-   fix：修复 bug
-   docs：文档
-   style：代码风格变更，不影响程序运行
-   refactor：重构
-   perf：性能
-   test：测试
-   workflow：工作流
-   ci：持续集成
-   chore：依赖更新
-   revert：撤销提交

### 书写顺序

-   vue，参考 [vue 官网](https://v3.vuejs.org/style-guide/#priority-c-rules-recommended-minimizing-arbitrary-choices-and-cognitive-overhead)
-   css，参考 [腾讯 alloy](http://alloyteam.github.io/CodeGuide/#css-declaration-order)
-   html，参考 [腾讯 alloy](http://alloyteam.github.io/CodeGuide/#html-attribute-order)

## 其他

列举 Dev 依赖

### Dev 依赖

-   [sass](https://github.com/sass/sass)
-   [husky](https://github.com/typicode/husky/tree/next)
-   [lint-staged](https://github.com/okonet/lint-staged)
-   [commitlint](https://github.com/conventional-changelog/commitlint)
-   [typescript4](https://github.com/microsoft/TypeScript)
-   [prettier](https://github.com/prettier/prettier)
-   [eslint](https://github.com/eslint/eslint)
-   [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue)
-   [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
-   [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
-   [vue-eslint-parser](https://github.com/vuejs/vue-eslint-parser)
-   [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)

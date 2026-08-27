# dsh-skin-typora-forest

Typora [Forest](https://github.com/sylviaxgj/typora-forest-theme) 主题的 DeepSeek Harness（DSH）Web GUI 皮肤插件：以森林绿为主色调，内置明亮 / 深色两套主题，并支持界面字体切换。

## 特性

- **Forest 明亮**：纸白底 + 森林绿强调色，代码块沿用 Forest 标志性的深青底 + 高亮 token；
- **Forest 深色**：深绿夜色调的暗色主题，同样全量重映射 `--dsw-*` token 阶梯；
- **跟随系统**：叠加层模式，随 DSH 内置外观偏好与操作系统明暗自动切换；
- **字体可选**：思源黑体 + JetBrains Mono（Forest 原版字体栈）/ 系统默认 / 衬线 / 等宽，通过 CSS 变量覆盖全局生效；
- **即选即生效**：设置行位于「设置 → 常规」，选择实时应用并持久化，无需重启。

## 安装

```sh
dsh plugin --profile web add dsh-skin-typora-forest
```

或从 GitHub 安装：

```sh
dsh plugin --profile web add github:QSyingSQ/dsh-skin-typora-forest
```

安装后重启 `dsh web`（插件集合在启动时装配），然后在 设置 → 常规 → Forest 主题（Typora） 中选择模式与字体。

## 说明

- 主题色取自 [typora-forest-theme](https://github.com/sylviaxgj/typora-forest-theme)（MIT），深色模式为同色系推导；
- 字体栈按本地已有字体回退，不会下载字体文件；如需原版观感，请本机安装「思源黑体（Source Han Sans SC）」与「JetBrains Mono」；
- 在外观设置里显式选择内置 明亮/深色 时，皮肤会自动让位（切换为关闭），避免与用户选择打架。

## License

MIT

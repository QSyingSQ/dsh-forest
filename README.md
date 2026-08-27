# Forest

DeepSeek Harness（DSH）Web GUI 的皮肤插件：以森林绿为主色调，提供明亮 / 深色两套主题与可选界面字体。

## 特性

- **Forest 明亮**：纸白底色 + 森林绿强调色；代码块沿用原版标志性的深青底 + 高亮语法色；
- **Forest 深色**：深绿夜色调暗色主题；
- **跟随系统**：叠加层模式，随 DSH 内置外观偏好与操作系统明暗自动切换；
- **字体可选**：思源黑体 + JetBrains Mono（原版字体栈）/ 系统默认 / 衬线 / 等宽，全局生效；
- **即选即生效**：设置行位于「设置 → 常规」，选择实时应用并持久化，无需重启；
- 全量重映射 78 个 `--dsw-alias-*` token 与 11 个 shiki 代码高亮 token。

## 安装

```sh
dsh plugin --profile web add dsh-forest
```

或从 GitHub 安装：

```sh
dsh plugin --profile web add github:QSyingSQ/dsh-forest
```

安装后重启 `dsh web`（插件集合在启动时装配），然后在 设置 → 常规 → Forest 主题 中选择模式与字体。

## 使用

- **模式**：跟随系统（推荐，随外观偏好与系统明暗自适应）／明亮／深色／关闭；
- **字体**：思源黑体 + JetBrains Mono ／默认 ／衬线 ／等宽；
- 在外观设置里显式选择内置 明亮/深色 时，皮肤会自动让位（切换为关闭），避免与用户选择冲突。

## 来源与致谢

本插件是 [Typora Forest 主题](https://github.com/sylviaxgj/typora-forest-theme)（MIT License）向 DSH 的移植：

- **直接采用**：主题名称、设计理念与配色色值（forest.css 中的森林绿色系、深青代码块、语法高亮色等）；
- **自行推导**：暗色模式（原版无暗色）为同色系推导的「森林之夜」配色；
- **自行实现**：DSH 主题系统接入（token 重映射、模式切换、字体系统、设置行），参考 DSH 官方 `dsh-client-ui-theme` 与社区皮肤插件的标准形态。

字体栈按本地已装字体回退，不随插件下载字体；如需原版观感，请本机安装「思源黑体（Source Han Sans SC）」与「JetBrains Mono」。

## License

MIT

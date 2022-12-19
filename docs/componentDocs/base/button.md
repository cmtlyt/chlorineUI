# button 按钮

常用的操作按钮

## 基础用法

基础的按钮用法

<vue-example file="button/base" />

## 禁用状态

按钮不可用状态

<vue-example file="button/disabled" />

## 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）

<vue-example file="button/icon" />

## 加载状态

点击按钮后进行数据加载操作，在按钮上显示加载状态

<vue-example file="button/loading" />

## 文字按钮

没有边框和背景色的按钮

<vue-example file="button/text" />

## Attributes

| 参数     | 说明       | 类型          | 可选值                                                   | 默认值 |
| -------- | ---------- | ------------- | -------------------------------------------------------- | ------ |
| type     | 按钮类型   | string        | text/base/primary/success/info/warning/danger/el-primary | base   |
| round    | 是否圆角   | boolean       | –                                                        | false  |
| circle   | 是否圆形   | boolean       | –                                                        | false  |
| plain    | 是否朴素   | boolean       | –                                                        | false  |
| loading  | 是否加载中 | boolean       | –                                                        | false  |
| disabled | 是否禁用   | boolean       | –                                                        | false  |
| icon     | 按钮图标   | string        | –                                                        | –      |
| iconSize | 图标大小   | string/number | –                                                        | –      |

## Slots

| name | 说明             |
| ---- | ---------------- |
| –    | 按钮中显示的内容 |


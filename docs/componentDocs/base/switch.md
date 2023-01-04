# switch 开关

## 基础用法

<vue-example file="switch/base" />

## 禁用状态

<vue-example file="switch/disabled" />

## 文字描述

<vue-example file="switch/text" />

## 扩展value类型

<vue-example file="switch/valueType" />

## Attributes

| 参数                | 说明                    | 类型                      | 可选值 | 默认值       |
| :------------------ | :---------------------- | :------------------------ | :----- | :----------- |
| value / v-model     | 绑定值                  | boolean / string / number | –      | –            |
| disabled            | 是否禁用                | boolean                   | –      | false        |
| width               | switch 的宽度           | number / string           | –      | 40           |
| height              | switch 的高度           | number / string           | –      | 25           |
| active-text         | switch 打开时的文字描述 | string                    | –      | –            |
| inactive-text       | switch 关闭时的文字描述 | string                    | –      | –            |
| active-value        | switch 打开时的值       | boolean / string / number | –      | true         |
| inactive-value      | switch 关闭时的值       | boolean / string / number | –      | false        |
| active-color        | switch 打开时的背景色   | string                    | –      | yellowgreen  |
| inactive-color      | switch 关闭时的背景色   | string                    | –      | #c0ccdaa0    |
| active-text-color   | switch 打开时的文字颜色 | string                    | –      | active-color |
| inactive-text-color | switch 关闭时的文字颜色 | string                    | –      | currentColor |

## Events

| 方法名称 | 说明                            | 参数       |
| :------- | :------------------------------ | :--------- |
| change   | switch 状态发生变化时的回调函数 | 新状态的值 |

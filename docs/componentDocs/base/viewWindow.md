# viewWindow 展示窗口

一个用来展示内容的窗口

## 使用方法

<vue-example file="viewWindow/base" />

## 显示隐藏的内容

<vue-example file="viewWindow/hide" />

## 自定义按钮栏

<vue-example file="viewWindow/btns" />

## Attributes

| 参数        | 说明           | 类型    | 可选值 | 默认值 |
| ----------- | -------------- | ------- | ------ | ------ |
| showBtnText | 显示按钮的文本 | string  | –      | 显示     |
| hideBtnText | 隐藏按钮的文本 | string  | –      | 隐藏     |
| showBtnBox  | 是否显示按钮栏 | boolean | –      | false   |

## Slots

| name | 说明                 |
| ---- | -------------------- |
| –    | 展示框默认显示的内容 |
| hide | 展示框隐藏显示的内容 |
| btns | 显示框底部按钮栏     |
# manu 导航菜单

## 基础用法

<vue-example file="manu/base" />

## 侧边栏

<vue-example file="manu/mode" />

## 折叠

<vue-example file="manu/collapse" />

## Attributes

| 参数              | 说明                                               | 类型    | 可选值              | 默认值     |
| ----------------- | -------------------------------------------------- | ------- | ------------------- | ---------- |
| manuData          | 菜单数据                                           | object  | –                   | –          |
| backgroundColor   | 背景颜色                                           | string  | –                   | –          |
| textColor         | 文本颜色                                           | string  | –                   | –          |
| activeTextColor   | 激活文本颜色                                       | string  | –                   | –          |
| hoverColor        | 鼠标悬停文本颜色                                   | string  | –                   | –          |
| disabledColor     | 禁用颜色                                           | string  | –                   | –          |
| activeBorderColor | 激活边框颜色                                       | string  | –                   | –          |
| hoverBackground   | 鼠标悬停背景色                                     | string  | –                   | –          |
| collapse          | 是否水平折叠收起菜单(仅在 mode 为 vertical 时可用) | boolean | –                   | false      |
| mode              | 模式                                               | string  | horizontal/vertical | horizontal |

## Events

| 方法名称 | 说明         | 参数                    |
| -------- | ------------ | ----------------------- |
| select   | 菜单激活回调 | 选中菜单项的 index path |

## ManuItem Attributes

| 参数     | 说明     | 类型          | 可选值 | 默认值 |
| -------- | -------- | ------------- | ------ | ------ |
| idx      | 唯一标识 | string/number | –      | –      |
| icon     | 图标     | string        | –      | –      |
| disabled | 是否禁用 | boolean       | –      | false  |

## Submanu Attribute

| 参数     | 说明     | 类型          | 可选值 | 默认值 |
| -------- | -------- | ------------- | ------ | ------ |
| idx      | 唯一标识 | string/number | –      | –      |
| icon     | 图标     | string        | –      | –      |
| disabled | 是否禁用 | boolean       | –      | false  |

## ManuData Options

| 参数            | 说明     | 类型   | 可选值 | 默认值 |
| --------------- | -------- | ------ | ------ | ------ |
| backgroundColor | 背景颜色 | string | –      | –      |
| textColor         | 文本颜色                                           | string  | –                   | –          |
| activeTextColor   | 激活文本颜色                                       | string  | –                   | –          |
| hoverColor        | 鼠标悬停文本颜色                                   | string  | –                   | –          |
| disabledColor     | 禁用颜色                                           | string  | –                   | –          |
| activeBorderColor | 激活边框颜色                                       | string  | –                   | –          |
| hoverBackground   | 鼠标悬停背景色                                     | string  | –                   | –          |
| collapse          | 是否水平折叠收起菜单(仅在 mode 为 vertical 时可用) | boolean | –                   | false      |
| mode              | 模式                                               | string  | horizontal/vertical | horizontal |
| manuList | 菜单列表 | array | – | [] |

## ManuList Options

| 参数     | 说明     | 类型          | 可选值 | 默认值 |
| -------- | -------- | ------------- | ------ | ------ |
| idx      | 唯一标识 | string/number | –      | –      |
| icon     | 图标     | string        | –      | –      |
| disabled | 是否禁用 | boolean       | –      | false  |
| title    | 标题     | string        | –      | –      |
| submanu  | 子菜单   | array         | –      | []     |

## Submanu Options

| 参数     | 说明     | 类型          | 可选值 | 默认值 |
| -------- | -------- | ------------- | ------ | ------ |
| idx      | 唯一标识 | string/number | –      | –      |
| icon     | 图标     | string        | –      | –      |
| disabled | 是否禁用 | boolean       | –      | false  |
| submanu  | 子菜单   | array         | –      | []     |

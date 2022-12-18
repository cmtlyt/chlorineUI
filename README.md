# chlorine-ui 组件库

### 快速开始

#### 安装组件库

```bash
npm install @cmtlyt/chlorine-ui
```

#### 引用组件库

```js
// 全部引入
import '@cmtlyt/chlorine-ui/dist/style/index.css';
import chlorineUI from 'chlorine-ui';
Vue.use(chlorineUI);

// 按需引入
import '@cmtlyt/chlorine-ui/dist/style/index.css';
import { Button } from 'chlorine-ui';
Vue.use(Button)
// 或
Vue.component(Button)
```


(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{244:function(t,n,r){"use strict";r.r(n),n.default='<template>\r\n  <section class="wrap">\r\n    <div class="wrap-row">\r\n      <span>默认按钮</span>\r\n      <clButton>默认按钮</clButton>\r\n      <clButton type="success">成功按钮</clButton>\r\n      <clButton type="primary">主要按钮</clButton>\r\n      <clButton type="el-primary">el主要按钮</clButton>\r\n      <clButton type="info">信息按钮</clButton>\r\n      <clButton type="warning">警告按钮</clButton>\r\n      <clButton type="danger">危险按钮</clButton>\r\n    </div>\r\n    <div class="wrap-row">\r\n      <span>朴素按钮</span>\r\n      <clButton plain>朴素按钮</clButton>\r\n      <clButton plain type="success">成功按钮</clButton>\r\n      <clButton plain type="primary">主要按钮</clButton>\r\n      <clButton plain type="el-primary">el主要按钮</clButton>\r\n      <clButton plain type="info">信息按钮</clButton>\r\n      <clButton plain type="warning">警告按钮</clButton>\r\n      <clButton plain type="danger">危险按钮</clButton>\r\n    </div>\r\n    <div class="wrap-row">\r\n      <span>圆角按钮</span>\r\n      <clButton round>圆角按钮</clButton>\r\n      <clButton round type="success">成功按钮</clButton>\r\n      <clButton round type="primary">主要按钮</clButton>\r\n      <clButton round type="el-primary">el主要按钮</clButton>\r\n      <clButton round type="info">信息按钮</clButton>\r\n      <clButton round type="warning">警告按钮</clButton>\r\n      <clButton round type="danger">危险按钮</clButton>\r\n    </div>\r\n    <div class="wrap-row">\r\n      <span>图标按钮</span>\r\n      <clButton icon="star" circle></clButton>\r\n      <clButton icon="preview-close-one" circle type="success"></clButton>\r\n      <clButton icon="info" circle type="primary"></clButton>\r\n      <clButton icon="printer" circle type="el-primary"></clButton>\r\n      <clButton icon="down" circle type="info"></clButton>\r\n      <clButton icon="two-dimensional-code-two" circle type="warning"></clButton>\r\n      <clButton icon="close" circle type="danger"></clButton>\r\n    </div>\r\n  </section>\r\n</template>'},245:function(t,n,r){"use strict";r.r(n),n.default='<template>\r\n  <section class="wrap">\r\n    <div class="wrap-row">\r\n      <clButton disabled icon="cl-star">123</clButton>\r\n      <clButton disabled icon="cl-preview-close-one" type="success">123</clButton>\r\n      <clButton disabled icon="cl-info" type="primary">123</clButton>\r\n      <clButton disabled icon="cl-printer" type="el-primary">123</clButton>\r\n      <clButton disabled icon="cl-down" type="info">123</clButton>\r\n      <clButton disabled icon="cl-two-dimensional-code-two" type="warning">123</clButton>\r\n      <clButton disabled icon="cl-close" type="danger">123</clButton>\r\n    </div>\r\n    <div class="wrap-row">\r\n      <clButton disabled plain icon="cl-star">123</clButton>\r\n      <clButton disabled plain icon="cl-preview-close-one" type="success">123</clButton>\r\n      <clButton disabled plain icon="cl-info" type="primary">123</clButton>\r\n      <clButton disabled plain icon="cl-printer" type="el-primary">123</clButton>\r\n      <clButton disabled plain icon="cl-down" type="info">123</clButton>\r\n      <clButton disabled plain icon="cl-two-dimensional-code-two" type="warning">123</clButton>\r\n      <clButton disabled plain icon="cl-close" type="danger">123</clButton>\r\n    </div>\r\n  </section>\r\n</template>\r\n'},246:function(t,n,r){"use strict";r.r(n),n.default='<template>\r\n  <section class="wrap">\r\n    <div class="wrap-row">\r\n      <clButton icon="star"></clButton>\r\n      <clButton icon="info" type="primary"></clButton>\r\n      <clButton icon="preview-close-one" type="success">成功?</clButton>\r\n      <clButton type="el-primary">打印<clIcon name="printer" /></clButton>\r\n    </div>\r\n  </section>\r\n</template>\r\n'},247:function(t,n,r){"use strict";r.r(n),n.default='<template>\r\n  <section class="wrap">\r\n    <div class="wrap-row">\r\n      <clButton loading icon="cl-preview-close-one" type="success">123</clButton>\r\n    </div>\r\n  </section>\r\n</template>\r\n'},248:function(t,n,r){"use strict";r.r(n),n.default='<template>\r\n  <section class="wrap">\r\n    <div class="wrap-row">\r\n      <clButton type="text">文字按钮</clButton>\r\n      <clButton type="text" disabled>文字按钮</clButton>\r\n    </div>\r\n  </section>\r\n</template>\r\n'},249:function(t,n,r){"use strict";r.r(n),n.default='<template>\r\n  <section>\r\n    <cl-empty class="v-cl-remove" v-clMove />\r\n  </section>\r\n</template>\r\n\r\n<style>\r\n.v-cl-remove {\r\n  position: relative;\r\n}\r\n</style>\r\n'},250:function(t,n,r){"use strict";r.r(n),n.default="<template>\r\n  <section>\r\n    <cl-empty v-clResize />\r\n  </section>\r\n</template>\r\n"},251:function(t,n,r){"use strict";r.r(n),n.default="<template>\r\n  <section>\r\n    <cl-empty v-clResize.horizontal />\r\n    <cl-empty v-clResize.vertical />\r\n    <cl-empty v-clResize.both />\r\n  </section>\r\n</template>\r\n"},252:function(t,n,r){"use strict";r.r(n),n.default="<template>\r\n  <section>\r\n    <cl-empty />\r\n  </section>\r\n</template>\r\n"},253:function(t,n,r){"use strict";r.r(n),n.default='<template>\r\n  <section>\r\n    <cl-empty>\r\n      <template #footer>\r\n        <cl-button type="success" icon="auther">测试</cl-button>\r\n      </template>\r\n    </cl-empty>\r\n  </section>\r\n</template>\r\n'},254:function(t,n,r){"use strict";r.r(n),n.default='<template>\r\n  <section>\r\n    <cl-empty\r\n      image="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"\r\n    ></cl-empty>\r\n    <cl-empty>\r\n      <template #image>\r\n        <cl-image src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" />\r\n      </template>\r\n      自定义图片插槽\r\n    </cl-empty>\r\n  </section>\r\n</template>\r\n'},255:function(t,n,r){"use strict";r.r(n),n.default="<template></template>"},256:function(t,n,r){"use strict";r.r(n),n.default='<template>\r\n  <section class="wrap">\r\n    <div class="wrap-row">\r\n      <clIcon name="star" />\r\n      <clIcon icon="close" />\r\n      <clButton>星星<clIcon name="star" /></clButton>\r\n    </div>\r\n  </section>\r\n</template>\r\n'},257:function(t,n,r){"use strict";r.r(n),n.default='<template>\r\n  <section>\r\n    <cl-manu v-model="active" @select="selectHander">\r\n      <cl-manu-item idx="t1" icon="star" disabled>title1</cl-manu-item>\r\n      <cl-submanu idx="t2" icon="file-zip">\r\n        <template #title>title2</template>\r\n        <cl-manu-item idx="t2-1">title2-1</cl-manu-item>\r\n        <cl-manu-item idx="t2-2">title2-2</cl-manu-item>\r\n        <cl-submanu idx="t2-3" icon="star">\r\n          <template #title>title2-3</template>\r\n          <cl-manu-item idx="t2-3-1">title2-3-1</cl-manu-item>\r\n          <cl-manu-item idx="t2-3-2">title2-3-2</cl-manu-item>\r\n          <cl-manu-item idx="t2-3-3">title2-3-3</cl-manu-item>\r\n          <cl-submanu idx="t2-3-4">\r\n            <template #title>title2-3-4</template>\r\n            <cl-manu-item idx="t2-3-4-1">title2-3-4-1</cl-manu-item>\r\n            <cl-manu-item idx="t2-3-4-2">title2-3-4-2</cl-manu-item>\r\n            <cl-manu-item idx="t2-3-4-3">title2-3-4-3</cl-manu-item>\r\n          </cl-submanu>\r\n        </cl-submanu>\r\n        <cl-manu-item idx="t2-4">title2-4</cl-manu-item>\r\n      </cl-submanu>\r\n      <cl-submanu idx="t3" icon="pic">\r\n        <template #title>title3</template>\r\n        <cl-manu-item idx="t3-1">title3-1</cl-manu-item>\r\n        <cl-manu-item idx="t3-2">title3-2</cl-manu-item>\r\n        <cl-manu-item idx="t3-3">title3-3</cl-manu-item>\r\n        <cl-submanu idx="t3-2" disabled>\r\n          <template #title>title3-2</template>\r\n          <cl-manu-item idx="t3-2-1">title3-2-1</cl-manu-item>\r\n          <cl-manu-item idx="t3-2-2">title3-2-2</cl-manu-item>\r\n          <cl-manu-item idx="t3-2-3">title3-2-3</cl-manu-item>\r\n        </cl-submanu>\r\n      </cl-submanu>\r\n    </cl-manu>\r\n    <br /> <hr /> <br />\r\n    <cl-manu\r\n      :manuData="manuData"\r\n      v-model="active2"\r\n      backgroundColor="#545c64"\r\n      textColor="#fff"\r\n      active-text-color="#ffd04b"\r\n      hoverBackground="#434a50"\r\n      hoverColor="#fff"\r\n    ></cl-manu>\r\n  </section>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  data() {\r\n    return {\r\n      active: \'t2-1\',\r\n      active2: \'t2-1\',\r\n      manuData: {\r\n        manuList: [\r\n          { title: \'title1\', icon: \'cl-camera\', idx: \'t1\', disabled: true },\r\n          {\r\n            title: \'title2\',\r\n            icon: \'file-zip\',\r\n            idx: \'t2\',\r\n            submanu: [\r\n              {\r\n                title: \'title2-1\',\r\n                idx: \'t2-1\',\r\n                icon: \'editor\',\r\n                submanu: [\r\n                  { title: \'title2-1-1\', idx: \'t2-1-1\' },\r\n                  { title: \'title2-1-2\', idx: \'t2-1-2\' },\r\n                ],\r\n              },\r\n              {\r\n                title: \'title2-2\',\r\n                idx: \'t2-2\',\r\n              },\r\n            ],\r\n          },\r\n          {\r\n            title: \'title3\',\r\n            icon: \'pic\',\r\n            idx: \'t3\',\r\n            submanu: [\r\n              { title: \'title3-1\', idx: \'t3-1\', icon: \'dislike\' },\r\n              { title: \'title3-2\', idx: \'t3-2\' },\r\n            ],\r\n          },\r\n        ],\r\n      },\r\n    }\r\n  },\r\n  methods: {\r\n    selectHander(idxPath) {\r\n      console.log(\'select\', idxPath)\r\n    },\r\n  },\r\n}\r\n<\/script>\r\n'},258:function(t,n,r){"use strict";r.r(n),n.default="<template>\r\n  <section>\r\n    <div class=\"wrap-row\">\r\n      <cl-button type=\"primary\" :plain=\"collapse\" @click=\"collapse = false\">展开</cl-button>\r\n      <cl-button type=\"primary\" :plain=\"!collapse\" @click=\"collapse = true\">收起</cl-button>\r\n    </div>\r\n    <cl-manu mode=\"vertical\" :manuData=\"manuData\" v-model=\"active\" :collapse=\"collapse\"></cl-manu>\r\n  </section>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  data() {\r\n    return {\r\n      collapse: false,\r\n      active: 't2-1',\r\n      manuData: {\r\n        manuList: [\r\n          { title: 'title1', icon: 'cl-camera', idx: 't1', disabled: true },\r\n          {\r\n            title: 'title2',\r\n            icon: 'file-zip',\r\n            idx: 't2',\r\n            submanu: [\r\n              {\r\n                title: 'title2-1',\r\n                idx: 't2-1',\r\n                icon: 'editor',\r\n                submanu: [\r\n                  { title: 'title2-1-1', idx: 't2-1-1' },\r\n                  { title: 'title2-1-2', idx: 't2-1-2' },\r\n                ],\r\n              },\r\n              {\r\n                title: 'title2-2',\r\n                idx: 't2-2',\r\n              },\r\n            ],\r\n          },\r\n          {\r\n            title: 'title3',\r\n            icon: 'pic',\r\n            idx: 't3',\r\n            submanu: [\r\n              { title: 'title3-1', idx: 't3-1', icon: 'dislike' },\r\n              { title: 'title3-2', idx: 't3-2' },\r\n            ],\r\n          },\r\n        ],\r\n      },\r\n    }\r\n  },\r\n}\r\n<\/script>\r\n"},259:function(t,n,r){"use strict";r.r(n),n.default='<template>\r\n  <section class="manu-wrap">\r\n    <cl-manu v-model="active" @select="selectHander" mode="vertical">\r\n      <cl-manu-item idx="t1" icon="star" disabled>title1</cl-manu-item>\r\n      <cl-submanu idx="t2" icon="file-zip">\r\n        <template #title>title2</template>\r\n        <cl-manu-item idx="t2-1">title2-1</cl-manu-item>\r\n        <cl-manu-item idx="t2-2">title2-2</cl-manu-item>\r\n        <cl-submanu idx="t2-3" icon="star">\r\n          <template #title>title2-3</template>\r\n          <cl-manu-item idx="t2-3-1">title2-3-1</cl-manu-item>\r\n          <cl-manu-item idx="t2-3-2">title2-3-2</cl-manu-item>\r\n          <cl-manu-item idx="t2-3-3">title2-3-3</cl-manu-item>\r\n          <cl-submanu idx="t2-3-4">\r\n            <template #title>title2-3-4</template>\r\n            <cl-manu-item idx="t2-3-4-1">title2-3-4-1</cl-manu-item>\r\n            <cl-manu-item idx="t2-3-4-2">title2-3-4-2</cl-manu-item>\r\n            <cl-manu-item idx="t2-3-4-3">title2-3-4-3</cl-manu-item>\r\n          </cl-submanu>\r\n        </cl-submanu>\r\n        <cl-manu-item idx="t2-4">title2-4</cl-manu-item>\r\n      </cl-submanu>\r\n      <cl-submanu idx="t3" icon="pic">\r\n        <template #title>title3</template>\r\n        <cl-manu-item idx="t3-1">title3-1</cl-manu-item>\r\n        <cl-manu-item idx="t3-2">title3-2</cl-manu-item>\r\n        <cl-manu-item idx="t3-3">title3-3</cl-manu-item>\r\n        <cl-submanu idx="t3-2" disabled>\r\n          <template #title>title3-2</template>\r\n          <cl-manu-item idx="t3-2-1">title3-2-1</cl-manu-item>\r\n          <cl-manu-item idx="t3-2-2">title3-2-2</cl-manu-item>\r\n          <cl-manu-item idx="t3-2-3">title3-2-3</cl-manu-item>\r\n        </cl-submanu>\r\n      </cl-submanu>\r\n    </cl-manu>\r\n    <cl-manu\r\n      mode="vertical"\r\n      :manuData="manuData"\r\n      v-model="active2"\r\n      backgroundColor="#545c64"\r\n      textColor="#fff"\r\n      active-text-color="#ffd04b"\r\n      hoverBackground="#434a50"\r\n      hoverColor="#fff"\r\n    ></cl-manu>\r\n  </section>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  name: \'\',\r\n  data() {\r\n    return {\r\n      active: \'t2-1\',\r\n      active2: \'t2-1\',\r\n      manuData: {\r\n        manuList: [\r\n          { title: \'title1\', icon: \'cl-camera\', idx: \'t1\', disabled: true },\r\n          {\r\n            title: \'title2\',\r\n            icon: \'file-zip\',\r\n            idx: \'t2\',\r\n            submanu: [\r\n              {\r\n                title: \'title2-1\',\r\n                idx: \'t2-1\',\r\n                icon: \'editor\',\r\n                submanu: [\r\n                  { title: \'title2-1-1\', idx: \'t2-1-1\' },\r\n                  { title: \'title2-1-2\', idx: \'t2-1-2\' },\r\n                ],\r\n              },\r\n              {\r\n                title: \'title2-2\',\r\n                idx: \'t2-2\',\r\n              },\r\n            ],\r\n          },\r\n          {\r\n            title: \'title3\',\r\n            icon: \'pic\',\r\n            idx: \'t3\',\r\n            submanu: [\r\n              { title: \'title3-1\', idx: \'t3-1\', icon: \'dislike\' },\r\n              { title: \'title3-2\', idx: \'t3-2\' },\r\n            ],\r\n          },\r\n        ],\r\n      },\r\n    }\r\n  },\r\n  methods: {\r\n    selectHander(idxPath) {\r\n      console.log(\'select\', idxPath)\r\n    },\r\n  },\r\n}\r\n<\/script>\r\n\r\n<style>\r\n.manu-wrap {\r\n  display: flex;\r\n  gap: 30%;\r\n}\r\n</style>\r\n'},260:function(t,n,r){"use strict";r.r(n),n.default='<template>\r\n  <section>\r\n    <cl-switch v-model="switchValue" />\r\n  </section>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  data() {\r\n    return {\r\n      switchValue: true,\r\n    }\r\n  },\r\n}\r\n<\/script>\r\n'},261:function(t,n,r){"use strict";r.r(n),n.default='<template>\r\n  <section>\r\n    <div class="wrap-row">\r\n      <cl-switch v-model="switchValue" disabled />\r\n      <cl-switch v-model="switchValue2" disabled />\r\n    </div>\r\n  </section>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  data() {\r\n    return {\r\n      switchValue: true,\r\n      switchValue2: false,\r\n    }\r\n  },\r\n}\r\n<\/script>\r\n'},262:function(t,n,r){"use strict";r.r(n),n.default='<template>\r\n  <section>\r\n    <cl-switch v-model="switchValue" active-text="激活" inactive-text="未激活" />\r\n  </section>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  data() {\r\n    return {\r\n      switchValue: true,\r\n    }\r\n  },\r\n}\r\n<\/script>\r\n'},263:function(t,n,r){"use strict";r.r(n),n.default='<template>\r\n  <section>\r\n    <cl-switch\r\n      v-model="switchValue"\r\n      active-value="激活"\r\n      inactive-value="未激活"\r\n      active-text="激活"\r\n      inactive-text="未激活"\r\n      @change="change"\r\n    />\r\n  </section>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  data() {\r\n    return {\r\n      switchValue: \'激活\',\r\n    }\r\n  },\r\n  methods: {\r\n    change(v) {\r\n      console.log(v)\r\n    },\r\n  },\r\n}\r\n<\/script>\r\n'},264:function(t,n,r){"use strict";r.r(n),n.default='<template>\r\n  <section>\r\n    <clViewWindow>\r\n      <div class="content">这个是显示的内容</div>\r\n    </clViewWindow>\r\n  </section>\r\n</template>\r\n\r\n<style>\r\n.content {\r\n  padding: 20px;\r\n}\r\n</style>\r\n'},265:function(t,n,r){"use strict";r.r(n),n.default='<template>\r\n  <section>\r\n    <clViewWindow showBtnBox>\r\n      <div class="content">这个是显示的内容</div>\r\n      <template #hide>这个是隐藏的内容</template>\r\n      <template #btns>\r\n        <div class="btns">自定义的<clButton @click.stop="clickHander">按钮</clButton>栏</div>\r\n      </template>\r\n    </clViewWindow>\r\n  </section>\r\n</template>\r\n\r\n<script>\r\nexport default{\r\n  methods:{\r\n    clickHander(){\r\n      alert(\'点击了按钮\')\r\n    }\r\n  }\r\n}\r\n<\/script>\r\n\r\n<style>\r\n.content {\r\n  padding: 20px;\r\n}\r\n.btns{\r\n  box-sizing: border-box;\r\n  padding: 10px;\r\n  width:100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n</style>\r\n'},266:function(t,n,r){"use strict";r.r(n),n.default='<template>\r\n  <section>\r\n    <clViewWindow showBtnBox>\r\n      <div class="content">这个是显示的内容</div>\r\n      <template #hide>这个是隐藏的内容</template>\r\n    </clViewWindow>\r\n  </section>\r\n</template>\r\n\r\n<style>\r\n.content {\r\n  padding: 20px;\r\n}\r\n</style>\r\n'}}]);
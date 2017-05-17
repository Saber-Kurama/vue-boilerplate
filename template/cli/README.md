### 作用

生成开发过程中需要的文件

---

### 可用命令

* vt page [name]

> 创建页面文件。会根据配置项生成满足具体需要的页面文件。


#### 参数说明:

```
-c		通用页面。会作为单独的.vue文件放在views/pages/common目录下。
-x		是否为复杂页面。会以标准模块的方式创建页面文件。包括页面的目录，以及partials, constants目录。
```

#### 例子

1.创建简单页面: `vt page personal/account`

创建的目录: `views/pages/personal`

创建的文件: `views/pages/personal/Account.vue`

使用：require('@pages/personal/Account')

2.创建通用页面: `vt page reset-pwd -c`

创建的文件: `views/pages/common/ResetPwd.vue`

使用：require('@pages/common/ResetPwd.vue')

3.创建复杂页面: `vt page personal/info -x`

创建的目录:
 `views/pages/personal`
 `views/pages/personal/Info`
 `views/pages/personal/Info/partials`
 `views/pages/personal/Info/constants`

创建的文件:
 `views/pages/personal/Info/page.vue`
 `views/pages/personal/Info/index.js`

使用：
`require('@pages/personal/Info')`

---

* vt component [name]

> 创建组件

#### 参数说明:

```
-x		是否为复杂组件。会以标准模块的方式创建页面文件。包括页面的目录，以及partials, constants目录。
```

#### 例子

1.`vt component test-component`

创建的目录:
`components/TestComponent`

创建的文件:
`components/TestComponent/index.js`
`components/TestComponent/TestComponent.vue`

使用：
`require('@components/TestComponent')`

1.`vt component complex-test-component`

创建的目录:
`components/ComplexTestComponent`
`components/ComplexTestComponent/partials`
`components/ComplexTestComponent/constants`

创建的文件:
`components/ComplexTestComponent/index.js`
`components/ComplexTestComponent/TestComponent.vue`

使用：
`require('@components/ComplexTestComponent')`


---

* vt store [name]

> 创建store文件

#### 例子

1.`vt store personal-account`

创建的目录:
`store/modules/PersonalAccount`

创建的文件:
`store/modules/PersonalAccount/index.js`
`store/modules/PersonalAccount/types.json`

引入类型：
```
var types = require('@store/types')	// 会包含新引入的types内容
```

---

* vt nav [path]

> 创建导航栏文件

#### 例子

`vt nav personal/info`

创建（改写）的文件：

- `cli/lib/nav/path.json` 生成一份原始的数据结构
- `src/constants/sideNav.json` 与导航栏相对应的数据结构
- `src/locales/nav` 多语言相关的文件

---

### How to start

到达项目根目录下，执行脚本：`cd cli && npm i -g && cd -`即可。执行后，除了在当前项目，在其他相同模板生成的项目中也可以有效使用。

---

### Attention

1. 只能在项目的根目录下使用，否则会报错。
2. 文件名会自动转成驼峰式

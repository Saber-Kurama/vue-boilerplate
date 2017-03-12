### 使用步骤

# route-page

* 脚本执行权限

`chmod +x ./cli/route-page/index.js`

* 执行脚本

`./cli/route-page/index.js -p a/b/c,f/g -m main`

页面文件: 会在`src/views/pages`目录下生成`a/b/c`和`f/g`目录结构，并在目录下创建`index.js`和`page.vue`文件。其他子文件需要手动添加。
路由文件: 会在`src/router/routes`目录下生成`main.js`文件，包含了命令行中的路由。

### 参数说明

-p 路由的数组
-m 模块名
-f 是否挂载在Frame组件下(暂时未用)
-a 路由的别名

# gen-sidenav

根据JSON配置文件生成sidenav里的内容，并创建好相应的route和page文件

### 参数说明

-f 配置文件的路径，默认为`./config.js`

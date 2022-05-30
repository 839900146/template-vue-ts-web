# 基于Vue的通用网站模板

**项目特点：**
1. 内置 `sass` 样式预处理
2. 规范化代码提交
3. 自动修复代码及样式格式
4. 内置二次封装的 `axios` 请求库
5. src及子目录 alias 路径映射
6. 一键开启CDN模式
7. 开箱即用的PWA模式
8. 支持Docker一键部署
9. 配置式管理
10. 部分性能优化

### 安装依赖
```
npm install
```

### 启动
```
npm run serve
```

### 打包
```
npm run build
```

### 修复eslint问题
```
npm run lint
```

### 提交代码
```
npm run commit
```
> 提交代码一律使用 `npm run commit`

### 反向代理
在 `config/proxy.ts` 中可配置前端开发环境下的反向代理配置

### 环境变量
在根目录下，存在一个环境变量配置文件 `.env`
在 `.env` 中，可设置token的key、在请求头中的字段名、请求前缀、网站部署路径等进行配置
> 修改了环境变量后，需手动重启才会生效

### 路径映射
系统内置如下alias映射：
- `@`：`src`
- `@assets`：`src/assets`
- `@router`：`src/router`
- `@services`：`src/services`
- `@views`：`src/views`
- `@comp`：`src/components`
- `@store`：`src/store`
- `@utils`：`src/utils`

### 开发建议

#### 静态资源
- 需要被打包编译的静态资源存放至 `src/assets`
- 不需要被打包的静态资源则存放至 `public`

#### 路由
应用的所有前端路由配置均存放至 `src/router` 文件夹内，假如路由数量不多，则全部写进 `index.js` 中，否则可以根据情况分多个文件进行处理

假如需要 **路由懒加载** ，则应当以下方的写法为准
```js
	{
		path: '/xxx',
		name: 'xxx',
		component: () => import('xxx'),
	},
```

#### 组件
秉承着一切皆组件的原则，我们在开发界面的时候应当对界面做合理判断，哪些需要做成全局组件，哪些需要做成局部组件
- 全局组件：当某个组件，被2个页面以上使用时
- 局部组件：只有当前页面使用

**存放位置：**
- 全局组件：`src/components`
- 局部组件：放在各自界面目录下的 `components`

#### 全局状态
本应用采用 `pinia` 进行全局状态管理，所有的store都应当在 `src/store` 中进行配置
> store可以有多个

**创建store的方式：**
```js
import { defineStore } from 'pinia'

// id 必须有，且必须是唯一
export default defineStore('id', {
	// 必须是一个函数，然后返回一个对象
	state: () => {
		return {}
	},
	// 与vuex一致
	getters: {
        fn(state) {
            // 也可以通过this访问，如this.token
            return state.xxx
        }
    },
	// actions 可以是同步也可以是async异步，修改状态直接 this.xxx = xxx
	actions: {
        fn() {
            this.xxx = xxx
        }
    },
})

```

#### 界面
我们的所有界面组件都应该放在 `src/views` 下

除了某些特殊的界面如 `App.vue`, `Home.vue`, `404.vue` 等，其它界面文件都应该存放到各自的文件夹内

#### 请求
所有的公共请求都应该放在 `src/services` 下
非公共请求则放在各自界面目录下的 `service.ts` 中

#### 命名
- 所有的界面组件，公共组件，都应当采用 `大驼峰` 写法，包括其对应的文件名在内


### 其它
- [Vue官方文档](https://v3.cn.vuejs.org/)
- [Vue-TS开发事项](https://v3.cn.vuejs.org/guide/typescript-support.html)
- [vue.config.js配置](https://cli.vuejs.org/zh/config/)
- [pinia官网](https://pinia.vuejs.org/)
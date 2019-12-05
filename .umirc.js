
// ref: https://umijs.org/config/

export default {
  treeShaking: true,
  // outputPath:"./out",      //使用umi build后，打包的目录名称，默认./dist
  // history:"hash",          //history对象模式（默认是browser）
  // base:"/abc",             //相当于之前BrowserRouter中的basename
  // publicPath:"./publick",  //指定静态资源所在的目录
  // exportStatic:true,          //开启该配置后，会打包成多个静态页面，每个页面对应一个路由，开启多静态页面应用的前提条件是：没有动态路由
  // routes: [
  //   {
  //     path: '/',
  //     component: '../layouts/index',
  //     routes: [
  //       { path: '/', component: '../pages/index' }
  //     ]
  //   }
  // ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'react_umi',
      dll: false,

      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
}

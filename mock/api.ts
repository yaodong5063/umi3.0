export default {
    // 支持值为 Object 和 Array
    'GET /test/users': { code:0,data:{userId:1123,userName:'测试账号'},message:'登录成功' },
    // 支持自定义函数，API 参考 express@4
    'GET /test/menu': {
      code:0,
      data:[{
        name:'工作台',
        url:'workBench',
        icon:'https://fileserver.paat.com/2ca/2cabe016b88e2e39e13e829f6f9a3d0d.png',
        id:1,
        subs:[{
          name:'工作台',
          url:'workBench',
          id:2,
        },{
          name:'工作台',
          url:'workBench',
          id:3,
        },{
          name:'工作台',
          url:'workBench',
          id:4,
          subs:[{
            name:'工作台',
            url:'workBench',
            id:5,
          }]
        }]
      },{
        name:'个人中心',
        url:'/',
        icon:'https://fileserver.paat.com/b11/b11866014056d423c9afb79513d7a7c2.png',
        id:6,
      }],
      message:'查询成功'
    },
    // GET 可忽略
    'delete /test/users/logout': { code:0,data:true,message:'成功', },
  
    // 支持自定义函数，API 参考 express@4
    'POST /test/users/menu': (req, res) => {
      // 添加跨域请求头
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.end('ok');
    },
  }
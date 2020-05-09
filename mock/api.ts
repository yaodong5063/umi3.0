export default {
  // 支持值为 Object 和 Array
  'GET /test/users': {
    code: 0,
    data: { userId: 1123, userName: '测试账号' },
    message: '登录成功',
  },
  // 支持自定义函数，API 参考 express@4
  'GET /test/menu': {
    code: 0,
    data: [
      {
        id: 222,
        parentId: 0,
        name: '工作台',
        url: 'workBench',
        type: 1,
        isClass: 1,
        method: '*',
        orderNum: 1,
        icon:
          'https://fileserver.paat.com/2ca/2cabe016b88e2e39e13e829f6f9a3d0d.png',
        subs: [
          {
            id: 224,
            parentId: 222,
            name: '开疆拓土',
            url: '/workBench/home',
            type: 1,
            isClass: 0,
            method: '*',
            orderNum: 1,
            icon:
              'https://fileserver.paat.com/b11/b11866014056d423c9afb79513d7a7c2.png',
            subs: [],
          },
          {
            id: 225,
            parentId: 222,
            name: '个人中心',
            url: '/workBench/personalCenter',
            type: 1,
            isClass: 0,
            method: '*',
            orderNum: 2,
            icon:
              'https://fileserver.paat.com/b11/b11866014056d423c9afb79513d7a7c2.png',
            subs: [],
          },
        ],
      },
      {
        id: 63,
        parentId: 0,
        name: '商机管理',
        url: 'business',
        type: 1,
        isClass: 1,
        method: '*',
        orderNum: 2,
        icon:
          'https://fileserver.paat.com/b11/b11866014056d423c9afb79513d7a7c2.png',
        subs: [
          {
            id: 64,
            parentId: 63,
            name: '我的商机',
            url: '/business/myBusiness',
            type: 1,
            isClass: 0,
            method: 'GET',
            orderNum: 200,
            icon: null,
            subs: [],
          },
          {
            id: 385,
            parentId: 63,
            name: '公海线索',
            url: '/business/blueWater',
            type: 1,
            isClass: 1,
            method: 'GET',
            orderNum: 201,
            icon:
              'https://fileserver.paat.com/b11/b11866014056d423c9afb79513d7a7c2.png',
            subs: [],
          },
          {
            id: 65,
            parentId: 63,
            name: '合作客户管理',
            url: '/business/customers/list',
            type: 1,
            isClass: 0,
            method: 'GET',
            orderNum: 202,
            icon: null,
            subs: [],
          },
        ],
      },
      {
        id: 66,
        parentId: 0,
        name: '权限配置',
        url: 'auth',
        type: 1,
        isClass: 0,
        method: '*',
        orderNum: 3,
        icon:
          'https://fileserver.paat.com/88d/88dc806f25e90eb933e2b3c183626157.png',
        subs: [
          {
            id: 325,
            parentId: 66,
            name: '权限管理',
            url: '/auth/list',
            type: 1,
            isClass: 1,
            method: '*',
            orderNum: 1,
            icon:
              'https://fileserver.paat.com/88d/88dc806f25e90eb933e2b3c183626157.png',
            subs: [],
          },
          {
            id: 326,
            parentId: 66,
            name: '部门管理',
            url: '/auth/department',
            type: 1,
            isClass: 1,
            method: '*',
            orderNum: 2,
            icon:
              'https://fileserver.paat.com/88d/88dc806f25e90eb933e2b3c183626157.png',
            subs: [],
          },
        ],
      },
      {
        id: 67,
        parentId: 0,
        name: '企业线索',
        url: 'clues',
        type: 1,
        isClass: 1,
        method: '*',
        orderNum: 4,
        icon:
          'https://fileserver.paat.com/14a/14a47b2dc28ac11f9e0f18d8b4a0867e.png',
        subs: [
          {
            id: 68,
            parentId: 67,
            name: '企业线索',
            url: '/clues/enterprise/list',
            type: 1,
            isClass: 0,
            method: 'GET',
            orderNum: 401,
            icon: null,
            subs: [],
          },
          {
            id: 343,
            parentId: 67,
            name: '线索来源',
            url: '/clues/source',
            type: 1,
            isClass: 1,
            method: 'GET',
            orderNum: 402,
            icon:
              'https://fileserver.paat.com/14a/14a47b2dc28ac11f9e0f18d8b4a0867e.png',
            subs: [],
          },
          {
            id: 69,
            parentId: 67,
            name: '线索分配',
            url: '/clues/setting',
            type: 1,
            isClass: 0,
            method: 'GET',
            orderNum: 403,
            icon: null,
            subs: [],
          },
          {
            id: 70,
            parentId: 67,
            name: '合作客户',
            url: '/clues/corporateClient/list',
            type: 1,
            isClass: 0,
            method: 'GET',
            orderNum: 404,
            icon: null,
            subs: [],
          },
          {
            id: 71,
            parentId: 67,
            name: '回收商机',
            url: '/clues/invalidPage/list',
            type: 1,
            isClass: 0,
            method: 'GET',
            orderNum: 405,
            icon: null,
            subs: [],
          },
        ],
      },
      {
        id: 74,
        parentId: 0,
        name: '企业管理',
        url: 'company',
        type: 1,
        isClass: 1,
        method: '*',
        orderNum: 5,
        icon:
          'https://fileserver.paat.com/4c0/4c07b15970117308cf09c7bfc80d3dab.png',
        subs: [
          {
            id: 75,
            parentId: 74,
            name: '企业产品',
            url: '/company/manage',
            type: 1,
            isClass: 0,
            method: 'GET',
            orderNum: 501,
            icon: null,
            subs: [],
          },
          {
            id: 72,
            parentId: 74,
            name: '通话管理',
            url: '/company/businessCalls/list',
            type: 1,
            isClass: 0,
            method: 'GET',
            orderNum: 502,
            icon: null,
            subs: [],
          },
          {
            id: 440,
            parentId: 74,
            name: '员工计划',
            url: '/company/workPlan',
            type: 1,
            isClass: 1,
            method: 'GET',
            orderNum: 503,
            icon: null,
            subs: [],
          },
          {
            id: 334,
            parentId: 74,
            name: '数据报表',
            url: '/company/dashboard',
            type: 1,
            isClass: 1,
            method: '*',
            orderNum: 504,
            icon:
              'https://fileserver.paat.com/4c0/4c07b15970117308cf09c7bfc80d3dab.png',
            subs: [],
          },
          {
            id: 73,
            parentId: 74,
            name: '自定义设置',
            url: '/company/diy',
            type: 1,
            isClass: 1,
            method: 'GET',
            orderNum: 505,
            icon: null,
            subs: [],
          },
        ],
      },
      {
        id: 214,
        parentId: 0,
        name: '游戏管理',
        url: 'gameManage',
        type: 1,
        isClass: 1,
        method: '*',
        orderNum: 6,
        icon:
          'https://fileserver.paat.com/672/6724daef1cf8969a1a0f34c7ac620b29.png',
        subs: [
          {
            id: 215,
            parentId: 214,
            name: '游戏积分',
            url: '/gameManage/gameIntegral',
            type: 1,
            isClass: 0,
            method: '*',
            orderNum: 1,
            icon:
              'https://fileserver.paat.com/b11/b11866014056d423c9afb79513d7a7c2.png',
            subs: [],
          },
          {
            id: 218,
            parentId: 214,
            name: '商店设置',
            url: '/gameManage/productConfiguration',
            type: 1,
            isClass: 0,
            method: 'GET',
            orderNum: 2,
            icon:
              'https://fileserver.paat.com/b11/b11866014056d423c9afb79513d7a7c2.png',
            subs: [],
          },
          {
            id: 219,
            parentId: 214,
            name: '角色任务',
            url: '/gameManage/gameSettings',
            type: 1,
            isClass: 0,
            method: 'GET',
            orderNum: 3,
            icon:
              'https://fileserver.paat.com/b11/b11866014056d423c9afb79513d7a7c2.png',
            subs: [],
          },
          {
            id: 221,
            parentId: 214,
            name: '商店订单管理',
            url: '/gameManage/shopOrder/list',
            type: 1,
            isClass: 0,
            method: 'GET',
            orderNum: 4,
            icon:
              'https://fileserver.paat.com/b11/b11866014056d423c9afb79513d7a7c2.png',
            subs: [],
          },
        ],
      },
    ],
    message: '查询成功',
  },
  // GET 可忽略
  'delete /test/users/logout': { code: 0, data: true, message: '成功' },

  // 支持自定义函数，API 参考 express@4
  'POST /test/users/menu': (req, res) => {
    // 添加跨域请求头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end('ok');
  },
};

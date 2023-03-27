import { type RouteRecordRaw, createRouter, createWebHashHistory, createWebHistory } from "vue-router"

const Layout = () => import("@/layout/index.vue")

/** 常驻路由 */
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        component: () => import("@/views/dashboard/index.vue"),
        name: "Dashboard",
        meta: {
          title: "首页",
          svgIcon: "dashboard",
          affix: true
        }
      }
    ]
  },
  {
    path: "/basicComponents",
    component: Layout,
    redirect: "/basicComponents/proButtonInfo",
    name: "BasicComponents",
    meta: {
      title: "基础组件",
      elIcon: "Menu"
    },
    children: [
      {
        path: "proButtonInfo",
        component: () => import("@/views/proButtonInfo/index.vue"),
        name: "proButtonInfo",
        meta: {
          title: "Button 按钮"
        }
      },
      {
        path: "proRowInfo",
        component: () => import("@/views/proRowInfo/index.vue"),
        name: "proRowInfo",
        meta: {
          title: "Layout 布局"
        }
      },
      {
        path: "proTabsInfo",
        component: () => import("@/views/proTabsInfo/index.vue"),
        name: "proTabsInfo",
        meta: {
          title: "Tabs 标签页"
        }
      },
      {
        path: "proIconInfo",
        component: () => import("@/views/proIconInfo/index.vue"),
        name: "proIconInfo",
        meta: {
          title: "Icon 图标"
        }
      }
    ]
  },
  {
    path: "/formComponents",
    component: Layout,
    redirect: "/formComponents/proInputInfo",
    name: "FormComponents",
    meta: {
      title: "表单组件",
      elIcon: "Menu"
    },
    children: [
      {
        path: "proInputInfo",
        component: () => import("@/views/proInputInfo/index.vue"),
        name: "proInputInfo",
        meta: {
          title: "Input 输入框"
        }
      },
      {
        path: "proSelectInfo",
        component: () => import("@/views/proSelectInfo/index.vue"),
        name: "proSelectInfo",
        meta: {
          title: "Select 选择器"
        }
      }
    ]
  },
  {
    path: "/showDataComponents",
    component: Layout,
    redirect: "/showDataComponents/proTableInfo",
    name: "ShowDataComponents",
    meta: {
      title: "数据展示组件",
      elIcon: "Menu"
    },
    children: [
      {
        path: "proTableInfo",
        component: () => import("@/views/proTableInfo/index.vue"),
        name: "proTableInfo",
        meta: {
          title: "Table 表格"
        }
      },
      {
        path: "proCardInfo",
        component: () => import("@/views/proCardInfo/index.vue"),
        name: "proCardInfo",
        meta: {
          title: "Card 卡片"
        }
      },
      {
        path: "proCollapseInfo",
        component: () => import("@/views/proCollapseInfo/index.vue"),
        name: "proCollapseInfo",
        meta: {
          title: "Collapse 折叠面板"
        }
      }
    ]
  },
  {
    path: "/menu",
    component: Layout,
    redirect: "/menu/menu1",
    name: "Menu",
    meta: {
      title: "多级菜单",
      elIcon: "Menu"
    },
    children: [
      {
        path: "menu1",
        component: () => import("@/views/menu/menu1/index.vue"),
        redirect: "/menu/menu1/menu1-1",
        name: "Menu1",
        meta: {
          title: "menu1"
        },
        children: [
          {
            path: "menu1-1",
            component: () => import("@/views/menu/menu1/menu1-1/index.vue"),
            name: "Menu1-1",
            meta: {
              title: "menu1-1"
            }
          },
          {
            path: "menu1-2",
            component: () => import("@/views/menu/menu1/menu1-2/index.vue"),
            redirect: "/menu/menu1/menu1-2/menu1-2-1",
            name: "Menu1-2",
            meta: {
              title: "menu1-2"
            },
            children: [
              {
                path: "menu1-2-1",
                component: () => import("@/views/menu/menu1/menu1-2/menu1-2-1/index.vue"),
                name: "Menu1-2-1",
                meta: {
                  title: "menu1-2-1"
                }
              },
              {
                path: "menu1-2-2",
                component: () => import("@/views/menu/menu1/menu1-2/menu1-2-2/index.vue"),
                name: "Menu1-2-2",
                meta: {
                  title: "menu1-2-2"
                }
              }
            ]
          },
          {
            path: "menu1-3",
            component: () => import("@/views/menu/menu1/menu1-3/index.vue"),
            name: "Menu1-3",
            meta: {
              title: "menu1-3"
            }
          }
        ]
      },
      {
        path: "menu2",
        component: () => import("@/views/menu/menu2/index.vue"),
        name: "Menu2",
        meta: {
          title: "menu2"
        }
      }
    ]
  }
]


const router = createRouter({
  history:import.meta.env.VITE_ROUTER_HISTORY === "hash"
      ? createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH)
      : createWebHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes: constantRoutes
})

/** 重置路由 */
export function resetRouter() {
  // 注意：所有动态路由路由必须带有 Name 属性，否则可能会不能完全重置干净
  try {
    router.getRoutes().forEach((route) => {
      const { name, meta } = route
      if (name && meta.roles?.length) {
        router.hasRoute(name) && router.removeRoute(name)
      }
    })
  } catch (error) {
    // 强制刷新浏览器也行，只是交互体验不是很好
    window.location.reload()
  }
}

export default router

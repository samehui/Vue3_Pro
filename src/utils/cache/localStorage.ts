/** 统一处理 localStorage */

import CacheKey from "@/constants/cacheKey"

export const getSidebarStatus = () => {
  return localStorage.getItem(CacheKey.SIDEBAR_STATUS)
}
export const setSidebarStatus = (sidebarStatus: "opened" | "closed") => {
  localStorage.setItem(CacheKey.SIDEBAR_STATUS, sidebarStatus)
}

export const getActiveThemeName = () => {
  return localStorage.getItem(CacheKey.ACTIVE_THEME_NAME) as "normal" | "dark" | "dark-blue"
}
export const setActiveThemeName = (themeName: "normal" | "dark" | "dark-blue") => {
  localStorage.setItem(CacheKey.ACTIVE_THEME_NAME, themeName)
}

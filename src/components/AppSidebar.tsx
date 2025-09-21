import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  BarChart3,
  Package,
  Megaphone,
  Users,
  DollarSign,
  Settings,
  Layout,
  ChevronDown,
  Menu,
  Shield,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const menuItems = [
  {
    title: "仪表板",
    url: "/dashboard",
    icon: BarChart3,
    description: "数据概览"
  },
  {
    title: "商品运营",
    url: "/products",
    icon: Package,
    description: "商品管理"
  },
  {
    title: "营销管理",
    url: "/marketing",
    icon: Megaphone,
    description: "营销活动"
  },
  {
    title: "用户与权限",
    url: "/users",
    icon: Users,
    description: "用户管理"
  },
  {
    title: "财务管理",
    url: "/finance",
    icon: DollarSign,
    description: "财务数据"
  },
  {
    title: "展示配置",
    url: "/display",
    icon: Layout,
    description: "页面配置"
  },
  {
    title: "系统配置",
    url: "/system",
    icon: Settings,
    description: "系统设置"
  },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  return (
    <Sidebar
      className={`${collapsed ? "w-16" : "w-64"} border-r border-border bg-sidebar transition-all duration-300`}
      collapsible="icon"
    >
      <SidebarContent className="bg-sidebar">
        {/* 头部 Logo */}
        <div className="p-4 border-b border-sidebar-border">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center glow-effect">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            {!collapsed && (
              <div>
                <h2 className="text-sm font-bold text-sidebar-foreground">商城数据后台</h2>
                <p className="text-xs text-sidebar-foreground/60">管理控制台</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/80">
            {!collapsed && "主要功能"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                        isActive(item.url)
                          ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-sm"
                          : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                      }`}
                    >
                      <item.icon className="w-5 h-5 flex-shrink-0" />
                      {!collapsed && (
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium truncate">{item.title}</div>
                          <div className="text-xs text-sidebar-foreground/60 truncate">
                            {item.description}
                          </div>
                        </div>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  TrendingUp,
  ShoppingCart,
  Users,
  DollarSign,
  Package,
  Activity,
  Eye,
} from "lucide-react";

const Dashboard = () => {
  // 模拟数据
  const stats = [
    {
      title: "总销售额",
      value: "¥1,234,567",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      color: "text-success",
    },
    {
      title: "订单数量",
      value: "8,432",
      change: "+8.2%",
      trend: "up",
      icon: ShoppingCart,
      color: "text-primary",
    },
    {
      title: "用户数量",
      value: "24,531",
      change: "+5.4%",
      trend: "up",
      icon: Users,
      color: "text-accent",
    },
    {
      title: "商品数量",
      value: "1,245",
      change: "+2.1%",
      trend: "up",
      icon: Package,
      color: "text-warning",
    },
  ];

  const recentOrders = [
    {
      id: "ORD-001",
      customer: "张三",
      amount: "¥299.00",
      status: "已完成",
      time: "2分钟前",
    },
    {
      id: "ORD-002",
      customer: "李四",
      amount: "¥599.00",
      status: "处理中",
      time: "5分钟前",
    },
    {
      id: "ORD-003",
      customer: "王五",
      amount: "¥899.00",
      status: "已发货",
      time: "10分钟前",
    },
    {
      id: "ORD-004",
      customer: "赵六",
      amount: "¥199.00",
      status: "已完成",
      time: "15分钟前",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "已完成":
        return "bg-success/20 text-success";
      case "处理中":
        return "bg-warning/20 text-warning";
      case "已发货":
        return "bg-primary/20 text-primary";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* 页面头部 */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">仪表板</h1>
          <p className="text-muted-foreground mt-2">
            欢迎回来，今天的运营数据概览
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm">
            <Activity className="w-4 h-4 mr-2" />
            实时监控
          </Button>
          <Button variant="default" size="sm" className="primary-gradient">
            <BarChart3 className="w-4 h-4 mr-2" />
            生成报告
          </Button>
        </div>
      </div>

      {/* 统计卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={stat.title} className="data-card" style={{ animationDelay: `${index * 0.1}s` }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-foreground mt-2">
                    {stat.value}
                  </p>
                  <div className="flex items-center mt-2">
                    <TrendingUp className="w-3 h-3 text-success mr-1" />
                    <span className="text-xs text-success font-medium">
                      {stat.change}
                    </span>
                    <span className="text-xs text-muted-foreground ml-1">
                      vs 上月
                    </span>
                  </div>
                </div>
                <div className={`w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 内容区域 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 销售趋势图占位 */}
        <Card className="lg:col-span-2 data-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              <span>销售趋势</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80 bg-muted/20 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                <p className="text-muted-foreground">销售数据图表</p>
                <p className="text-sm text-muted-foreground/60 mt-1">
                  这里将显示详细的销售趋势图表
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 最近订单 */}
        <Card className="data-card">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center space-x-2">
                <ShoppingCart className="w-5 h-5 text-primary" />
                <span>最近订单</span>
              </CardTitle>
              <Button variant="ghost" size="sm">
                <Eye className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between p-3 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-foreground">
                        {order.customer}
                      </span>
                      <span className="text-sm font-bold text-foreground">
                        {order.amount}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {order.id}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {order.time}
                      </span>
                    </div>
                  </div>
                  <Badge
                    className={`ml-3 ${getStatusColor(order.status)}`}
                    variant="secondary"
                  >
                    {order.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 快速操作区域 */}
      <Card className="data-card">
        <CardHeader>
          <CardTitle>快速操作</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-16 flex-col space-y-2">
              <Package className="w-6 h-6" />
              <span className="text-sm">添加商品</span>
            </Button>
            <Button variant="outline" className="h-16 flex-col space-y-2">
              <Users className="w-6 h-6" />
              <span className="text-sm">用户管理</span>
            </Button>
            <Button variant="outline" className="h-16 flex-col space-y-2">
              <BarChart3 className="w-6 h-6" />
              <span className="text-sm">数据分析</span>
            </Button>
            <Button variant="outline" className="h-16 flex-col space-y-2">
              <DollarSign className="w-6 h-6" />
              <span className="text-sm">财务报表</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
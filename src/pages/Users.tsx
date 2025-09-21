import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Users,
  UserPlus,
  Search,
  Filter,
  Shield,
  Crown,
  User,
  Settings,
  MoreHorizontal,
} from "lucide-react";

const UsersPage = () => {
  // 模拟用户数据
  const users = [
    {
      id: "USR-001",
      name: "张三",
      email: "zhangsan@example.com",
      role: "管理员",
      status: "活跃",
      lastLogin: "2小时前",
      orders: 15,
      totalSpent: 12500,
    },
    {
      id: "USR-002",
      name: "李四",
      email: "lisi@example.com",
      role: "普通用户",
      status: "活跃",
      lastLogin: "1天前",
      orders: 8,
      totalSpent: 3200,
    },
    {
      id: "USR-003",
      name: "王五",
      email: "wangwu@example.com",
      role: "VIP用户",
      status: "活跃",
      lastLogin: "30分钟前",
      orders: 42,
      totalSpent: 25800,
    },
    {
      id: "USR-004",
      name: "赵六",
      email: "zhaoliu@example.com",
      role: "普通用户",
      status: "不活跃",
      lastLogin: "7天前",
      orders: 3,
      totalSpent: 890,
    },
  ];

  const getRoleIcon = (role: string) => {
    switch (role) {
      case "管理员":
        return <Shield className="w-4 h-4" />;
      case "VIP用户":
        return <Crown className="w-4 h-4" />;
      default:
        return <User className="w-4 h-4" />;
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case "管理员":
        return "bg-destructive/20 text-destructive";
      case "VIP用户":
        return "bg-warning/20 text-warning";
      default:
        return "bg-primary/20 text-primary";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "活跃":
        return "bg-success/20 text-success";
      case "不活跃":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* 页面头部 */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">用户与权限</h1>
          <p className="text-muted-foreground mt-2">
            管理用户账户、角色权限和访问控制
          </p>
        </div>
        <Button className="primary-gradient">
          <UserPlus className="w-4 h-4 mr-2" />
          添加用户
        </Button>
      </div>

      {/* 用户统计 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="data-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">总用户数</p>
                <p className="text-2xl font-bold text-foreground">24,531</p>
              </div>
              <Users className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        <Card className="data-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">活跃用户</p>
                <p className="text-2xl font-bold text-foreground">18,234</p>
              </div>
              <User className="w-8 h-8 text-success" />
            </div>
          </CardContent>
        </Card>
        <Card className="data-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">VIP用户</p>
                <p className="text-2xl font-bold text-foreground">1,245</p>
              </div>
              <Crown className="w-8 h-8 text-warning" />
            </div>
          </CardContent>
        </Card>
        <Card className="data-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">管理员</p>
                <p className="text-2xl font-bold text-foreground">8</p>
              </div>
              <Shield className="w-8 h-8 text-destructive" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 搜索和筛选 */}
      <Card className="tech-card">
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="搜索用户名、邮箱或ID..."
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              筛选
            </Button>
            <Button variant="outline">
              <Settings className="w-4 h-4 mr-2" />
              权限管理
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* 用户列表 */}
      <Card className="tech-card">
        <CardHeader>
          <CardTitle>用户列表</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>用户信息</TableHead>
                <TableHead>角色</TableHead>
                <TableHead>状态</TableHead>
                <TableHead>最后登录</TableHead>
                <TableHead>订单数</TableHead>
                <TableHead>消费金额</TableHead>
                <TableHead>操作</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id} className="hover:bg-muted/50">
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback className="bg-primary/10 text-primary">
                          {user.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-foreground">{user.name}</p>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                        <p className="text-xs text-muted-foreground">{user.id}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getRoleColor(user.role)} variant="secondary">
                      <div className="flex items-center space-x-1">
                        {getRoleIcon(user.role)}
                        <span>{user.role}</span>
                      </div>
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(user.status)} variant="secondary">
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {user.lastLogin}
                  </TableCell>
                  <TableCell className="font-medium">{user.orders}</TableCell>
                  <TableCell className="font-medium">
                    ¥{user.totalSpent.toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* 权限配置区域 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="data-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-primary" />
              <span>角色权限配置</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {["管理员", "VIP用户", "普通用户"].map((role) => (
                <div key={role} className="flex items-center justify-between p-3 rounded-lg bg-muted/20">
                  <div className="flex items-center space-x-3">
                    {getRoleIcon(role)}
                    <span className="font-medium">{role}</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Settings className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="data-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-primary" />
              <span>用户活跃度分析</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48 bg-muted/20 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Users className="w-12 h-12 text-muted-foreground/50 mx-auto mb-3" />
                <p className="text-muted-foreground">用户活跃度图表</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UsersPage;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  Calendar,
  Download,
  Receipt,
  CreditCard,
  Wallet,
  BarChart3,
} from "lucide-react";

const Finance = () => {
  // 模拟财务数据
  const transactions = [
    {
      id: "TXN-001",
      type: "收入",
      description: "订单支付 - ORD-001",
      amount: 299.00,
      method: "支付宝",
      status: "已完成",
      date: "2024-11-20 14:30",
    },
    {
      id: "TXN-002",
      type: "收入",
      description: "订单支付 - ORD-002",
      amount: 599.00,
      method: "微信支付",
      status: "已完成",
      date: "2024-11-20 13:45",
    },
    {
      id: "TXN-003",
      type: "退款",
      description: "订单退款 - ORD-003",
      amount: -199.00,
      method: "支付宝",
      status: "处理中",
      date: "2024-11-20 12:15",
    },
    {
      id: "TXN-004",
      type: "提现",
      description: "提现到银行卡",
      amount: -5000.00,
      method: "银行转账",
      status: "已完成",
      date: "2024-11-19 16:20",
    },
  ];

  const getTransactionColor = (type: string) => {
    switch (type) {
      case "收入":
        return "text-success";
      case "退款":
        return "text-warning";
      case "提现":
        return "text-primary";
      default:
        return "text-foreground";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "已完成":
        return "bg-success/20 text-success";
      case "处理中":
        return "bg-warning/20 text-warning";
      case "失败":
        return "bg-destructive/20 text-destructive";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* 页面头部 */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">财务管理</h1>
          <p className="text-muted-foreground mt-2">
            查看收入支出、交易记录和财务报表
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <Calendar className="w-4 h-4 mr-2" />
            选择时间
          </Button>
          <Button className="primary-gradient">
            <Download className="w-4 h-4 mr-2" />
            导出报表
          </Button>
        </div>
      </div>

      {/* 财务概览 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="data-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">今日收入</p>
                <p className="text-2xl font-bold text-success">¥12,345</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="w-3 h-3 text-success mr-1" />
                  <span className="text-xs text-success">+15.2%</span>
                </div>
              </div>
              <DollarSign className="w-8 h-8 text-success" />
            </div>
          </CardContent>
        </Card>
        <Card className="data-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">本月收入</p>
                <p className="text-2xl font-bold text-foreground">¥456,789</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="w-3 h-3 text-success mr-1" />
                  <span className="text-xs text-success">+8.7%</span>
                </div>
              </div>
              <Receipt className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        <Card className="data-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">待结算</p>
                <p className="text-2xl font-bold text-foreground">¥23,456</p>
                <div className="flex items-center mt-2">
                  <Calendar className="w-3 h-3 text-warning mr-1" />
                  <span className="text-xs text-warning">T+1</span>
                </div>
              </div>
              <Wallet className="w-8 h-8 text-warning" />
            </div>
          </CardContent>
        </Card>
        <Card className="data-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">账户余额</p>
                <p className="text-2xl font-bold text-foreground">¥189,234</p>
                <div className="flex items-center mt-2">
                  <CreditCard className="w-3 h-3 text-primary mr-1" />
                  <span className="text-xs text-primary">可提现</span>
                </div>
              </div>
              <CreditCard className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 收入趋势图表 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="data-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span>收入趋势</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-muted/20 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="w-12 h-12 text-muted-foreground/50 mx-auto mb-3" />
                <p className="text-muted-foreground">收入趋势图表</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="data-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CreditCard className="w-5 h-5 text-primary" />
              <span>支付方式分布</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { method: "支付宝", amount: 234567, percentage: 45, color: "bg-primary" },
                { method: "微信支付", amount: 189234, percentage: 36, color: "bg-success" },
                { method: "银行卡", amount: 67890, percentage: 13, color: "bg-warning" },
                { method: "其他", amount: 31234, percentage: 6, color: "bg-accent" },
              ].map((item) => (
                <div key={item.method} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-foreground">{item.method}</span>
                    <span className="text-muted-foreground">
                      ¥{item.amount.toLocaleString()} ({item.percentage}%)
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className={`${item.color} rounded-full h-2 transition-all duration-300`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 交易记录 */}
      <Card className="tech-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>最近交易记录</CardTitle>
            <Button variant="outline" size="sm">
              查看全部
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>交易ID</TableHead>
                <TableHead>类型</TableHead>
                <TableHead>描述</TableHead>
                <TableHead>金额</TableHead>
                <TableHead>支付方式</TableHead>
                <TableHead>状态</TableHead>
                <TableHead>时间</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id} className="hover:bg-muted/50">
                  <TableCell className="font-mono text-sm">
                    {transaction.id}
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="bg-muted text-muted-foreground">
                      {transaction.type}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {transaction.description}
                  </TableCell>
                  <TableCell className={`font-bold ${getTransactionColor(transaction.type)}`}>
                    {transaction.amount > 0 ? '+' : ''}¥{Math.abs(transaction.amount).toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{transaction.method}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(transaction.status)} variant="secondary">
                      {transaction.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {transaction.date}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* 财务报表快捷操作 */}
      <Card className="data-card">
        <CardHeader>
          <CardTitle>财务报表</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-16 flex-col space-y-2">
              <Receipt className="w-6 h-6" />
              <span className="text-sm">日报表</span>
            </Button>
            <Button variant="outline" className="h-16 flex-col space-y-2">
              <BarChart3 className="w-6 h-6" />
              <span className="text-sm">月报表</span>
            </Button>
            <Button variant="outline" className="h-16 flex-col space-y-2">
              <TrendingUp className="w-6 h-6" />
              <span className="text-sm">年报表</span>
            </Button>
            <Button variant="outline" className="h-16 flex-col space-y-2">
              <Download className="w-6 h-6" />
              <span className="text-sm">导出数据</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Finance;
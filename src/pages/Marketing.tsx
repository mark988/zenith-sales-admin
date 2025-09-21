import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Megaphone,
  Plus,
  TrendingUp,
  Users,
  Target,
  Calendar,
  BarChart3,
  Play,
  Pause,
  Edit,
  Trash2,
} from "lucide-react";

const Marketing = () => {
  // 模拟营销活动数据
  const campaigns = [
    {
      id: "CAMP-001",
      name: "双十一大促销",
      type: "限时折扣",
      status: "进行中",
      startDate: "2024-11-01",
      endDate: "2024-11-11",
      budget: 50000,
      spent: 32000,
      reach: 125000,
      conversions: 2456,
    },
    {
      id: "CAMP-002",
      name: "新用户专享",
      type: "新人优惠",
      status: "待开始",
      startDate: "2024-12-01",
      endDate: "2024-12-31",
      budget: 30000,
      spent: 0,
      reach: 0,
      conversions: 0,
    },
    {
      id: "CAMP-003",
      name: "会员日促销",
      type: "会员专享",
      status: "已结束",
      startDate: "2024-10-15",
      endDate: "2024-10-20",
      budget: 20000,
      spent: 18500,
      reach: 85000,
      conversions: 1234,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "进行中":
        return "bg-success/20 text-success";
      case "待开始":
        return "bg-warning/20 text-warning";
      case "已结束":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "进行中":
        return <Play className="w-4 h-4" />;
      case "待开始":
        return <Calendar className="w-4 h-4" />;
      case "已结束":
        return <Pause className="w-4 h-4" />;
      default:
        return <Calendar className="w-4 h-4" />;
    }
  };

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* 页面头部 */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">营销管理</h1>
          <p className="text-muted-foreground mt-2">
            创建和管理营销活动，提升用户转化率
          </p>
        </div>
        <Button className="primary-gradient">
          <Plus className="w-4 h-4 mr-2" />
          创建活动
        </Button>
      </div>

      {/* 营销概览统计 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="data-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">活跃活动</p>
                <p className="text-2xl font-bold text-foreground">3</p>
              </div>
              <Megaphone className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        <Card className="data-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">总预算</p>
                <p className="text-2xl font-bold text-foreground">¥100K</p>
              </div>
              <Target className="w-8 h-8 text-accent" />
            </div>
          </CardContent>
        </Card>
        <Card className="data-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">总覆盖</p>
                <p className="text-2xl font-bold text-foreground">210K</p>
              </div>
              <Users className="w-8 h-8 text-secondary" />
            </div>
          </CardContent>
        </Card>
        <Card className="data-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">总转化</p>
                <p className="text-2xl font-bold text-foreground">3.7K</p>
              </div>
              <TrendingUp className="w-8 h-8 text-success" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 活动列表 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {campaigns.map((campaign, index) => (
          <Card key={campaign.id} className="data-card" style={{ animationDelay: `${index * 0.1}s` }}>
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{campaign.name}</CardTitle>
                <Badge className={getStatusColor(campaign.status)} variant="secondary">
                  <div className="flex items-center space-x-1">
                    {getStatusIcon(campaign.status)}
                    <span>{campaign.status}</span>
                  </div>
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{campaign.type}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* 时间范围 */}
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">活动时间</span>
                <span className="text-foreground">
                  {campaign.startDate} ~ {campaign.endDate}
                </span>
              </div>

              {/* 预算使用情况 */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">预算使用</span>
                  <span className="text-foreground">
                    ¥{campaign.spent.toLocaleString()} / ¥{campaign.budget.toLocaleString()}
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-primary rounded-full h-2 transition-all duration-300"
                    style={{ width: `${(campaign.spent / campaign.budget) * 100}%` }}
                  />
                </div>
              </div>

              {/* 关键指标 */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">
                    {campaign.reach >= 1000 ? `${(campaign.reach / 1000).toFixed(1)}K` : campaign.reach}
                  </p>
                  <p className="text-xs text-muted-foreground">覆盖人数</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">
                    {campaign.conversions >= 1000 ? `${(campaign.conversions / 1000).toFixed(1)}K` : campaign.conversions}
                  </p>
                  <p className="text-xs text-muted-foreground">转化数量</p>
                </div>
              </div>

              {/* 操作按钮 */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <Button variant="ghost" size="sm">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  查看数据
                </Button>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 营销效果图表占位 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="data-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span>转化率趋势</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-muted/20 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-muted-foreground/50 mx-auto mb-3" />
                <p className="text-muted-foreground">转化率趋势图表</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="data-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="w-5 h-5 text-primary" />
              <span>渠道效果分析</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-muted/20 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Target className="w-12 h-12 text-muted-foreground/50 mx-auto mb-3" />
                <p className="text-muted-foreground">渠道分析图表</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Marketing;
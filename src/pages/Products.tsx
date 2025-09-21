import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  Package,
  Plus,
  Search,
  Filter,
  Edit,
  Trash2,
  Eye,
  TrendingUp,
  AlertTriangle,
} from "lucide-react";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // 模拟商品数据
  const products = [
    {
      id: "PRD-001",
      name: "iPhone 15 Pro Max",
      category: "数码电子",
      price: 9999,
      stock: 45,
      sales: 238,
      status: "在售",
      image: "/placeholder.svg",
    },
    {
      id: "PRD-002",
      name: "MacBook Air M2",
      category: "数码电子",
      price: 8999,
      stock: 23,
      sales: 156,
      status: "在售",
      image: "/placeholder.svg",
    },
    {
      id: "PRD-003",
      name: "AirPods Pro",
      category: "数码配件",
      price: 1899,
      stock: 89,
      sales: 445,
      status: "在售",
      image: "/placeholder.svg",
    },
    {
      id: "PRD-004",
      name: "iPad Pro 12.9",
      category: "数码电子",
      price: 7999,
      stock: 12,
      sales: 89,
      status: "库存不足",
      image: "/placeholder.svg",
    },
    {
      id: "PRD-005",
      name: "Apple Watch Ultra",
      category: "智能穿戴",
      price: 6299,
      stock: 0,
      sales: 67,
      status: "缺货",
      image: "/placeholder.svg",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "在售":
        return "bg-success/20 text-success";
      case "库存不足":
        return "bg-warning/20 text-warning";
      case "缺货":
        return "bg-destructive/20 text-destructive";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStockIcon = (stock: number) => {
    if (stock === 0) return <AlertTriangle className="w-4 h-4 text-destructive" />;
    if (stock < 20) return <AlertTriangle className="w-4 h-4 text-warning" />;
    return <Package className="w-4 h-4 text-success" />;
  };

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* 页面头部 */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">商品运营</h1>
          <p className="text-muted-foreground mt-2">
            管理您的商品库存、价格和销售数据
          </p>
        </div>
        <Button className="primary-gradient">
          <Plus className="w-4 h-4 mr-2" />
          添加商品
        </Button>
      </div>

      {/* 统计卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="data-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">总商品数</p>
                <p className="text-2xl font-bold text-foreground">1,245</p>
              </div>
              <Package className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        <Card className="data-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">在售商品</p>
                <p className="text-2xl font-bold text-foreground">1,156</p>
              </div>
              <TrendingUp className="w-8 h-8 text-success" />
            </div>
          </CardContent>
        </Card>
        <Card className="data-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">库存不足</p>
                <p className="text-2xl font-bold text-foreground">23</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-warning" />
            </div>
          </CardContent>
        </Card>
        <Card className="data-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">缺货商品</p>
                <p className="text-2xl font-bold text-foreground">12</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-destructive" />
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
                placeholder="搜索商品名称、SKU或分类..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              筛选
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* 商品列表 */}
      <Card className="tech-card">
        <CardHeader>
          <CardTitle>商品列表</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>商品信息</TableHead>
                <TableHead>分类</TableHead>
                <TableHead>价格</TableHead>
                <TableHead>库存</TableHead>
                <TableHead>销量</TableHead>
                <TableHead>状态</TableHead>
                <TableHead>操作</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id} className="hover:bg-muted/50">
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                        <Package className="w-6 h-6 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{product.name}</p>
                        <p className="text-sm text-muted-foreground">{product.id}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">{product.category}</Badge>
                  </TableCell>
                  <TableCell className="font-medium">¥{product.price.toLocaleString()}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      {getStockIcon(product.stock)}
                      <span className={product.stock === 0 ? "text-destructive" : product.stock < 20 ? "text-warning" : "text-foreground"}>
                        {product.stock}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>{product.sales}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(product.status)} variant="secondary">
                      {product.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Products;
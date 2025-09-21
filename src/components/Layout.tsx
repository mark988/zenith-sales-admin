import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Button } from "@/components/ui/button";
import { Bell, Search, User, LogOut } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          {/* 顶部导航栏 */}
          <header className="h-16 border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
            <div className="flex items-center justify-between px-6 h-full">
              <div className="flex items-center space-x-4">
                <SidebarTrigger className="hover:bg-muted/50" />
                <div className="hidden md:flex items-center space-x-2 bg-muted/30 rounded-lg px-3 py-2">
                  <Search className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">搜索功能...</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                {/* 通知 */}
                <Button variant="ghost" size="sm" className="relative">
                  <Bell className="w-5 h-5" />
                  <Badge className="absolute -top-2 -right-2 w-5 h-5 p-0 flex items-center justify-center bg-destructive text-destructive-foreground">
                    3
                  </Badge>
                </Button>
                
                {/* 用户信息 */}
                <div className="flex items-center space-x-3 border-l border-border pl-4">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-primary/10 text-primary text-sm">
                      管
                    </AvatarFallback>
                  </Avatar>
                  <div className="hidden md:block">
                    <p className="text-sm font-medium text-foreground">管理员</p>
                    <p className="text-xs text-muted-foreground">admin@example.com</p>
                  </div>
                  <Button variant="ghost" size="sm" onClick={handleLogout}>
                    <LogOut className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </header>
          
          {/* 主内容区域 */}
          <main className="flex-1 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
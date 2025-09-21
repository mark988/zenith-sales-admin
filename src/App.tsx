import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Marketing from "./pages/Marketing";
import Users from "./pages/Users";
import Finance from "./pages/Finance";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
          <Route path="/products" element={<Layout><Products /></Layout>} />
          <Route path="/marketing" element={<Layout><Marketing /></Layout>} />
          <Route path="/users" element={<Layout><Users /></Layout>} />
          <Route path="/finance" element={<Layout><Finance /></Layout>} />
          <Route path="/display" element={<Layout><div className="p-6"><h1 className="text-3xl font-bold">展示配置</h1><p className="text-muted-foreground mt-2">页面配置功能开发中...</p></div></Layout>} />
          <Route path="/system" element={<Layout><div className="p-6"><h1 className="text-3xl font-bold">系统配置</h1><p className="text-muted-foreground mt-2">系统设置功能开发中...</p></div></Layout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

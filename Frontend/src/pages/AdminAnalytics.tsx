
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { AnalyticsContent } from "@/components/AnalyticsContent";

const Analytics = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <main className="flex-1">
          <AnalyticsContent />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Analytics;

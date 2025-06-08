
import { SidebarTrigger } from "@/components/ui/sidebar";
import { StatsCards } from "@/components/StatsCards";
import { RecentActivity } from "@/components/RecentActivity";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import { useState } from "react";
import { NotificationDropdown } from "@/components/NotificationDropdown";

export function DashboardContent() {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div className="flex flex-col">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center gap-4 px-6">
          <SidebarTrigger className="hover:bg-accent/50" />
          
          <div className="flex-1" />

          <div className="flex items-center gap-2">
            <div className="relative">
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-accent/50 relative"
                onClick={() => setShowNotifications(!showNotifications)}
              >
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs"></span>
              </Button>
              {showNotifications && (
                <NotificationDropdown onClose={() => setShowNotifications(false)} />
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 p-6 space-y-8">
        {/* Welcome Section */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Welcome back, Admin</h1>
          <p className="text-muted-foreground">
            Monitor your educational platform and manage NGO partnerships effectively.
          </p>
        </div>

        {/* Stats Cards */}
        <StatsCards />

        {/* Recent Activity - Full Width */}
        <RecentActivity />
      </div>
    </div>
  );
}


import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { SettingsContent } from "@/components/SettingsContent";

const Settings = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <main className="flex-1">
          <SettingsContent />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Settings;

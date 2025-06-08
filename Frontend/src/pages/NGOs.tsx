
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { NGOsContent } from "@/components/NGOsContent";

const NGOs = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <main className="flex-1">
          <NGOsContent />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default NGOs;

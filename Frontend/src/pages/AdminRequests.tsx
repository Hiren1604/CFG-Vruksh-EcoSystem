
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { RequestsContent } from "@/components/RequestsContent";

const Requests = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <main className="flex-1">
          <RequestsContent />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Requests;

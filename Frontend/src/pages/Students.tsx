
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { StudentsContent } from "@/components/StudentsContent";

const Students = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <main className="flex-1">
          <StudentsContent />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Students;

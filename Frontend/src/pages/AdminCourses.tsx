
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { CoursesContent } from "@/components/CoursesContent";

const Courses = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <main className="flex-1">
          <CoursesContent />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Courses;

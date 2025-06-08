
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";

const studentGrowthData = [
  { month: 'Jan', students: 120 },
  { month: 'Feb', students: 185 },
  { month: 'Mar', students: 295 },
  { month: 'Apr', students: 450 },
  { month: 'May', students: 620 },
  { month: 'Jun', students: 820 }
];

const moduleCompletionData = [
  { module: 'Module 1', completion: 95 },
  { module: 'Module 2', completion: 87 },
  { module: 'Module 3', completion: 78 },
  { module: 'Module 4', completion: 65 },
  { module: 'Module 5', completion: 52 }
];

const feedbackSentimentData = [
  { name: 'Positive', value: 65, color: '#10B981' },
  { name: 'Neutral', value: 25, color: '#F59E0B' },
  { name: 'Negative', value: 10, color: '#EF4444' }
];

const dropoffData = [
  { stage: 'Registration', students: 1000, dropoff: 0 },
  { stage: 'Module 1', students: 950, dropoff: 50 },
  { stage: 'Module 2', students: 850, dropoff: 100 },
  { stage: 'Module 3', students: 720, dropoff: 130 },
  { stage: 'Module 4', students: 580, dropoff: 140 },
  { stage: 'Completion', students: 480, dropoff: 100 }
];

export function AnalyticsContent() {
  return (
    <div className="flex flex-col">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center gap-4 px-6">
          <SidebarTrigger className="hover:bg-accent/50" />
          
          <div className="flex-1" />

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hover:bg-accent/50">
              <Bell className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6 space-y-6">
        {/* Page Header */}
        <div className="space-y-2">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">Student Analytics</h1>
          <p className="text-muted-foreground">
            Comprehensive insights into student engagement and performance.
          </p>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Student Growth Chart */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-lg md:text-xl">Student Count Over Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 md:h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={studentGrowthData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis 
                      dataKey="month" 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                    />
                    <YAxis 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--background))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '6px'
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="students" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={2}
                      dot={{ fill: 'hsl(var(--primary))' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Module Completion Chart */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-lg md:text-xl">Module Completion Rates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 md:h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={moduleCompletionData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis 
                      dataKey="module" 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                    />
                    <YAxis 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                      domain={[0, 100]}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--background))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '6px'
                      }}
                      formatter={(value) => [`${value}%`, 'Completion Rate']}
                    />
                    <Bar 
                      dataKey="completion" 
                      fill="hsl(var(--primary))"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Feedback Sentiment Chart */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-lg md:text-xl">Feedback Sentiment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 md:h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={feedbackSentimentData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                    >
                      {feedbackSentimentData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--background))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '6px'
                      }}
                      formatter={(value) => [`${value}%`, 'Percentage']}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Drop-off Points Chart */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-lg md:text-xl">Student Drop-off Points</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 md:h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={dropoffData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis 
                      dataKey="stage" 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                      angle={-45}
                      textAnchor="end"
                      height={80}
                    />
                    <YAxis 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--background))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '6px'
                      }}
                    />
                    <Bar 
                      dataKey="students" 
                      fill="hsl(var(--primary))"
                      name="Active Students"
                      radius={[4, 4, 0, 0]}
                    />
                    <Bar 
                      dataKey="dropoff" 
                      fill="hsl(var(--destructive))"
                      name="Dropped Off"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

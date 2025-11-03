import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import {
  Activity,
  TrendingUp,
  AlertTriangle,
  Download,
  Calendar,
  FileText,
  Heart,
  Droplet,
  Brain,
  CheckCircle,
} from "lucide-react";

const Dashboard = () => {
  const recentReports = [
    {
      name: "Complete Blood Count",
      date: "2025-10-28",
      status: "analyzed",
      type: "Blood Test",
    },
    {
      name: "Lipid Profile",
      date: "2025-10-25",
      status: "analyzed",
      type: "Blood Test",
    },
    {
      name: "ECG Report",
      date: "2025-10-20",
      status: "analyzed",
      type: "Heart",
    },
  ];

  const healthMetrics = [
    {
      name: "Hemoglobin",
      value: "13.2 g/dL",
      status: "normal",
      trend: "stable",
      icon: Droplet,
    },
    {
      name: "Cholesterol",
      value: "185 mg/dL",
      status: "normal",
      trend: "down",
      icon: Heart,
    },
    {
      name: "Blood Sugar",
      value: "98 mg/dL",
      status: "normal",
      trend: "stable",
      icon: Activity,
    },
    {
      name: "Thyroid TSH",
      value: "3.2 mIU/L",
      status: "normal",
      trend: "stable",
      icon: Brain,
    },
  ];

  const insights = [
    {
      type: "success",
      message: "Your hemoglobin levels have improved by 8% in the last month",
      icon: CheckCircle,
    },
    {
      type: "warning",
      message: "Vitamin D levels are slightly low. Consider supplementation",
      icon: AlertTriangle,
    },
    {
      type: "info",
      message: "Due for annual thyroid checkup in 2 weeks",
      icon: Calendar,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 animate-slide-up">
          <h1 className="text-4xl font-bold mb-2">Health Dashboard</h1>
          <p className="text-muted-foreground">
            Your complete health overview and insights
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-gradient-card shadow-soft hover:shadow-medium transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">
                Total Reports
              </span>
              <FileText className="w-5 h-5 text-primary" />
            </div>
            <div className="text-3xl font-bold">24</div>
            <div className="text-sm text-muted-foreground mt-1">
              +3 this month
            </div>
          </Card>

          <Card className="p-6 bg-gradient-card shadow-soft hover:shadow-medium transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">
                Health Score
              </span>
              <Activity className="w-5 h-5 text-secondary" />
            </div>
            <div className="text-3xl font-bold">85/100</div>
            <div className="text-sm text-green-600 mt-1">Excellent</div>
          </Card>

          <Card className="p-6 bg-gradient-card shadow-soft hover:shadow-medium transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">
                Consultations
              </span>
              <Heart className="w-5 h-5 text-red-500" />
            </div>
            <div className="text-3xl font-bold">8</div>
            <div className="text-sm text-muted-foreground mt-1">
              Last 6 months
            </div>
          </Card>

          <Card className="p-6 bg-gradient-card shadow-soft hover:shadow-medium transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Alerts</span>
              <AlertTriangle className="w-5 h-5 text-yellow-500" />
            </div>
            <div className="text-3xl font-bold">2</div>
            <div className="text-sm text-muted-foreground mt-1">
              Needs attention
            </div>
          </Card>
        </div>

        {/* AI Insights */}
        <Card className="p-6 mb-8 bg-gradient-accent shadow-soft">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Brain className="w-6 h-6 text-primary" />
            AI-Powered Insights
          </h2>
          <div className="space-y-3">
            {insights.map((insight, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-card rounded-lg"
              >
                <insight.icon
                  className={`w-5 h-5 mt-0.5 ${
                    insight.type === "success"
                      ? "text-green-500"
                      : insight.type === "warning"
                      ? "text-yellow-500"
                      : "text-blue-500"
                  }`}
                />
                <p className="text-sm">{insight.message}</p>
              </div>
            ))}
          </div>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Health Metrics */}
            <Card className="p-6 shadow-soft bg-gradient-card">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Key Health Metrics</h2>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {healthMetrics.map((metric, index) => (
                  <Card
                    key={index}
                    className="p-4 hover:shadow-medium transition-all"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-hero flex items-center justify-center">
                          <metric.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">
                            {metric.name}
                          </div>
                          <div className="text-xl font-bold">
                            {metric.value}
                          </div>
                        </div>
                      </div>
                      {metric.trend === "down" ? (
                        <TrendingUp className="w-5 h-5 text-green-500 rotate-180" />
                      ) : (
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                      )}
                    </div>
                    <div className="text-xs text-green-600 font-medium">
                      {metric.status === "normal" ? "Within Normal Range" : ""}
                    </div>
                  </Card>
                ))}
              </div>
            </Card>

            {/* Trends */}
            <Card className="p-6 shadow-soft bg-gradient-card">
              <h2 className="text-xl font-semibold mb-6">Health Trends</h2>
              <Tabs defaultValue="3months">
                <TabsList className="mb-6">
                  <TabsTrigger value="1month">1 Month</TabsTrigger>
                  <TabsTrigger value="3months">3 Months</TabsTrigger>
                  <TabsTrigger value="6months">6 Months</TabsTrigger>
                  <TabsTrigger value="1year">1 Year</TabsTrigger>
                </TabsList>

                <TabsContent value="3months" className="space-y-4">
                  <div className="h-64 rounded-lg bg-muted/30 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <TrendingUp className="w-12 h-12 mx-auto mb-2 text-primary" />
                      <p>Interactive chart showing health trends over time</p>
                      <p className="text-sm mt-1">
                        Hemoglobin, Cholesterol, Blood Sugar tracking
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Reports */}
            <Card className="p-6 shadow-soft bg-gradient-card">
              <h2 className="text-xl font-semibold mb-4">Recent Reports</h2>
              <div className="space-y-3">
                {recentReports.map((report, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg border border-border hover:border-primary transition-all cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="font-medium text-sm">{report.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {report.type}
                        </div>
                      </div>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    </div>
                    <div className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {report.date}
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                View All Reports
              </Button>
            </Card>

            {/* Upcoming Tests */}
            <Card className="p-6 shadow-soft bg-gradient-card">
              <h2 className="text-xl font-semibold mb-4">Reminders</h2>
              <div className="space-y-3">
                <div className="p-4 rounded-lg bg-accent">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="font-medium text-sm">Thyroid Checkup</span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Due in 14 days
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-accent">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="font-medium text-sm">
                      Annual Physical Exam
                    </span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Due in 30 days
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

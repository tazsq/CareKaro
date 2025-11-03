import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import {
  User,
  Mail,
  Phone,
  Calendar,
  MapPin,
  Shield,
  Bell,
  FileText,
  Activity,
  Download,
  Settings,
  Lock,
  HardDrive,
  MessageSquare,
} from "lucide-react";

const Profile = () => {
  const consultationHistory = [
    {
      doctor: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      date: "2025-10-28",
      mode: "Video",
      status: "Completed",
    },
    {
      doctor: "Dr. Rajesh Kumar",
      specialty: "Endocrinologist",
      date: "2025-09-15",
      mode: "In-Person",
      status: "Completed",
    },
    {
      doctor: "Dr. Priya Sharma",
      specialty: "General Physician",
      date: "2025-08-20",
      mode: "Chat",
      status: "Completed",
    },
  ];

  const savedReports = [
    { name: "Complete Blood Count", date: "2025-10-28", size: "2.4 MB" },
    { name: "Lipid Profile", date: "2025-10-25", size: "1.8 MB" },
    { name: "ECG Report", date: "2025-10-20", size: "3.2 MB" },
    { name: "Chest X-Ray", date: "2025-09-15", size: "5.1 MB" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 animate-slide-up">
          <h1 className="text-4xl font-bold mb-2">My Profile</h1>
          <p className="text-muted-foreground">
            Manage your health information and settings
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <Card className="p-6 h-fit shadow-soft bg-gradient-card">
            <div className="text-center mb-6">
              <div className="w-24 h-24 rounded-full bg-gradient-hero mx-auto mb-4 flex items-center justify-center text-4xl text-white shadow-medium">
                👤
              </div>
              <h2 className="text-2xl font-bold mb-1">Rahul Sharma</h2>
              <p className="text-sm text-muted-foreground">
                Health ID: HID123456
              </p>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-accent">
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-xs text-muted-foreground">Email</div>
                  <div className="font-medium">rahul.sharma@email.com</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-accent">
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-xs text-muted-foreground">Phone</div>
                  <div className="font-medium">+91 98765 43210</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-accent">
                <Calendar className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-xs text-muted-foreground">
                    Date of Birth
                  </div>
                  <div className="font-medium">15 March 1990</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-accent">
                <MapPin className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-xs text-muted-foreground">Location</div>
                  <div className="font-medium">Mumbai, India</div>
                </div>
              </div>
            </div>

            <Button className="w-full mt-6">
              <User className="w-4 h-4 mr-2" />
              Edit Profile
            </Button>
          </Card>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="reports" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="reports">
                  <FileText className="w-4 h-4 mr-2" />
                  Reports
                </TabsTrigger>
                <TabsTrigger value="consultations">
                  <Activity className="w-4 h-4 mr-2" />
                  History
                </TabsTrigger>
                <TabsTrigger value="settings">
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </TabsTrigger>
                <TabsTrigger value="support">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Support
                </TabsTrigger>
              </TabsList>

              {/* Reports Tab */}
              <TabsContent value="reports">
                <Card className="p-6 shadow-soft bg-gradient-card">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold">Saved Reports</h2>
                    <Button variant="outline" size="sm">
                      <HardDrive className="w-4 h-4 mr-2" />
                      Cloud Storage: 45/100 MB
                    </Button>
                  </div>

                  <div className="space-y-3">
                    {savedReports.map((report, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-hero flex items-center justify-center">
                            <FileText className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="font-medium">{report.name}</div>
                            <div className="text-sm text-muted-foreground">
                              {report.date} • {report.size}
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full mt-4">
                    View All Reports
                  </Button>
                </Card>
              </TabsContent>

              {/* Consultations Tab */}
              <TabsContent value="consultations">
                <Card className="p-6 shadow-soft bg-gradient-card">
                  <h2 className="text-xl font-semibold mb-6">
                    Consultation History
                  </h2>

                  <div className="space-y-4">
                    {consultationHistory.map((consultation, index) => (
                      <Card key={index} className="p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-semibold">
                              {consultation.doctor}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {consultation.specialty}
                            </p>
                          </div>
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                            {consultation.status}
                          </span>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {consultation.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Activity className="w-4 h-4" />
                            {consultation.mode}
                          </div>
                        </div>

                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full mt-3"
                        >
                          View Details
                        </Button>
                      </Card>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              {/* Settings Tab */}
              <TabsContent value="settings">
                <Card className="p-6 shadow-soft bg-gradient-card">
                  <h2 className="text-xl font-semibold mb-6">Settings</h2>

                  <div className="space-y-6">
                    {/* Notifications */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Bell className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold">Notifications</h3>
                      </div>
                      <div className="space-y-3 ml-7">
                        <label className="flex items-center justify-between">
                          <span className="text-sm">
                            Report Analysis Updates
                          </span>
                          <input
                            type="checkbox"
                            className="w-5 h-5"
                            defaultChecked
                          />
                        </label>
                        <label className="flex items-center justify-between">
                          <span className="text-sm">Appointment Reminders</span>
                          <input
                            type="checkbox"
                            className="w-5 h-5"
                            defaultChecked
                          />
                        </label>
                        <label className="flex items-center justify-between">
                          <span className="text-sm">Health Tips</span>
                          <input type="checkbox" className="w-5 h-5" />
                        </label>
                      </div>
                    </div>

                    {/* Privacy */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Shield className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold">Privacy & Security</h3>
                      </div>
                      <div className="space-y-3 ml-7">
                        <Button
                          variant="outline"
                          className="w-full justify-start"
                        >
                          <Lock className="w-4 h-4 mr-2" />
                          Change Password
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full justify-start"
                        >
                          <Shield className="w-4 h-4 mr-2" />
                          Two-Factor Authentication
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full justify-start"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download My Data
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              {/* Support Tab */}
              <TabsContent value="support">
                <Card className="p-6 shadow-soft bg-gradient-card">
                  <h2 className="text-xl font-semibold mb-6">Help & Support</h2>

                  <div className="space-y-4">
                    <Card className="p-4 bg-accent hover:shadow-medium transition-all cursor-pointer">
                      <h3 className="font-semibold mb-2">24/7 Live Chat</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Get instant help from our support team
                      </p>
                      <Button size="sm">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Start Chat
                      </Button>
                    </Card>

                    <Card className="p-4 bg-accent hover:shadow-medium transition-all cursor-pointer">
                      <h3 className="font-semibold mb-2">FAQs</h3>
                      <p className="text-sm text-muted-foreground">
                        Find answers to common questions
                      </p>
                    </Card>

                    <Card className="p-4 bg-accent hover:shadow-medium transition-all cursor-pointer">
                      <h3 className="font-semibold mb-2">Contact Support</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Email: support@carekaro.com
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Phone: 1-800-CARE-KARO
                      </p>
                    </Card>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;

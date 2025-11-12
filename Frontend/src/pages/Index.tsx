import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import {
  Upload,
  LineChart,
  Users,
  Shield,
  Clock,
  CheckCircle,
  Activity,
  Brain,
  FileText,
} from "lucide-react";
import heroImage from "@/assets/hero-health.jpg";

const Index = () => {
  const features = [
    {
      icon: Upload,
      title: "Easy Upload",
      description: "Upload blood tests, scans, ECG reports in seconds",
    },
    {
      icon: Brain,
      title: "AI Analysis",
      description: "Get instant insights and health interpretations",
    },
    {
      icon: LineChart,
      title: "Track Trends",
      description: "Monitor your health metrics over time",
    },
    {
      icon: Users,
      title: "Find Specialists",
      description: "Connect with the right doctors for your needs",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your health data is encrypted and protected",
    },
    {
      icon: Clock,
      title: "24/7 Access",
      description: "Access your health records anytime, anywhere",
    },
  ];

  const reportTypes = [
    { icon: FileText, name: "Blood Test", color: "text-primary" },
    { icon: Activity, name: "ECG Reports", color: "text-secondary" },
    { icon: FileText, name: "Ultrasound", color: "text-primary-light" },
    { icon: FileText, name: "X-Ray Scans", color: "text-secondary-light" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-5" />
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up">
              <div className="inline-flex items-center gap-2 bg-accent px-4 py-2 rounded-full">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-accent-foreground">
                  Trusted by 100,000+ patients
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Understand Your Health.{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Smarter, Faster.
                </span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed">
                Upload your medical reports and get AI-powered insights in
                minutes. Track your health trends and connect with the right
                specialists.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/upload">
                  <Button
                    size="lg"
                    className="text-lg shadow-medium hover:shadow-strong transition-all"
                  >
                    <Upload className="w-5 h-5 mr-2" />
                    Upload Your Report
                  </Button>
                </Link>
                <Link to="/dashboard">
                  <Button size="lg" variant="outline" className="text-lg">
                    View Demo Dashboard
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">500K+</div>
                  <div className="text-sm text-muted-foreground">
                    Reports Analyzed
                  </div>
                </div>
                <div className="w-px h-12 bg-border" />
                <div>
                  <div className="text-3xl font-bold text-secondary">98%</div>
                  <div className="text-sm text-muted-foreground">
                    Accuracy Rate
                  </div>
                </div>
                <div className="w-px h-12 bg-border" />
                <div>
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-hero rounded-3xl blur-3xl opacity-20 animate-float" />
              <img
                src={heroImage}
                alt="Healthcare professional analyzing medical reports with digital technology"
                className="relative rounded-3xl shadow-strong w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Report Types Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Supported Report Types</h2>
            <p className="text-muted-foreground">
              We analyze all major medical reports and provide actionable
              insights
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {reportTypes.map((type, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-medium transition-all cursor-pointer bg-gradient-card"
              >
                <type.icon className={`w-12 h-12 mx-auto mb-3 ${type.color}`} />
                <h3 className="font-semibold">{type.name}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Everything You Need for Better Health
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools to understand, track, and improve your health
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-medium transition-all group cursor-pointer bg-gradient-card"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-hero flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-soft">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10" />
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Take Control of Your Health?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust Care Karo for their health
            insights
          </p>
          <Link to="/upload">
            <Button
              size="lg"
              className="text-lg shadow-medium hover:shadow-strong"
            >
              <Upload className="w-5 h-5 mr-2" />
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">Care Karo</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your trusted digital health companion
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    to="/upload"
                    className="hover:text-primary transition-colors"
                  >
                    Upload Report
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard"
                    className="hover:text-primary transition-colors"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/doctors"
                    className="hover:text-primary transition-colors"
                  >
                    Find Doctors
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>support@carekaro.com</li>
                <li>1-800-CARE-KARO</li>
                <li>Available 24/7</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2025 Care Karo. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

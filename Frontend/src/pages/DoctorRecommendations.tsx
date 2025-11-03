import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import {
  Search,
  Star,
  MapPin,
  Calendar,
  Video,
  MessageSquare,
  Award,
  Clock,
  Phone,
  CheckCircle,
  Brain,
} from "lucide-react";

const DoctorRecommendations = () => {
  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      rating: 4.9,
      reviews: 324,
      experience: "15 years",
      location: "Mumbai, India",
      consultationFee: "₹1,200",
      availability: "Available Today",
      image: "👨‍⚕️",
      verified: true,
      specialties: ["Heart Disease", "ECG Analysis", "Hypertension"],
    },
    {
      name: "Dr. Rajesh Kumar",
      specialty: "Endocrinologist",
      rating: 4.8,
      reviews: 256,
      experience: "12 years",
      location: "Delhi, India",
      consultationFee: "₹1,000",
      availability: "Tomorrow",
      image: "👨‍⚕️",
      verified: true,
      specialties: ["Diabetes", "Thyroid", "Hormones"],
    },
    {
      name: "Dr. Priya Sharma",
      specialty: "General Physician",
      rating: 4.7,
      reviews: 412,
      experience: "10 years",
      location: "Bangalore, India",
      consultationFee: "₹800",
      availability: "Available Today",
      image: "👩‍⚕️",
      verified: true,
      specialties: ["General Health", "Preventive Care", "Lifestyle"],
    },
    {
      name: "Dr. Amit Patel",
      specialty: "Hematologist",
      rating: 4.9,
      reviews: 189,
      experience: "18 years",
      location: "Ahmedabad, India",
      consultationFee: "₹1,500",
      availability: "Available Today",
      image: "👨‍⚕️",
      verified: true,
      specialties: ["Blood Disorders", "Anemia", "Leukemia"],
    },
  ];

  const aiRecommendation = {
    doctor: doctors[0],
    reason:
      "Based on your recent ECG report showing irregular heartbeat patterns, we recommend consulting Dr. Sarah Johnson, a highly-rated cardiologist with expertise in arrhythmia.",
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 animate-slide-up">
          <h1 className="text-4xl font-bold mb-2">Find Your Specialist</h1>
          <p className="text-muted-foreground">
            Connect with verified doctors based on your health reports
          </p>
        </div>

        {/* AI Recommendation */}
        <Card className="p-6 mb-8 bg-gradient-accent shadow-medium border-2 border-primary/20">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center shadow-soft">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
                AI-Recommended Specialist
                <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">
                  Best Match
                </span>
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                {aiRecommendation.reason}
              </p>
            </div>
          </div>

          <Card className="p-4 bg-card hover:shadow-medium transition-all">
            <div className="flex items-start gap-4">
              <div className="text-5xl">{aiRecommendation.doctor.image}</div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-lg">
                        {aiRecommendation.doctor.name}
                      </h3>
                      {aiRecommendation.doctor.verified && (
                        <CheckCircle className="w-5 h-5 text-primary" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {aiRecommendation.doctor.specialty}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 bg-yellow-100 px-2 py-1 rounded-full">
                    <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    <span className="text-sm font-semibold">
                      {aiRecommendation.doctor.rating}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Award className="w-4 h-4" />
                    {aiRecommendation.doctor.experience}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {aiRecommendation.doctor.location}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                  {aiRecommendation.doctor.specialties.map((spec, i) => (
                    <span
                      key={i}
                      className="text-xs bg-accent px-2 py-1 rounded-full"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-muted-foreground">
                      Consultation Fee
                    </div>
                    <div className="text-lg font-bold text-primary">
                      {aiRecommendation.doctor.consultationFee}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button>
                      <Video className="w-4 h-4 mr-2" />
                      Video Consult
                    </Button>
                    <Button variant="outline">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Chat
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Card>

        {/* Search and Filters */}
        <Card className="p-6 mb-8 shadow-soft bg-gradient-card">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search by specialty, name, or condition..."
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <MapPin className="w-4 h-4 mr-2" />
              Location
            </Button>
            <Button variant="outline">Filter</Button>
          </div>
        </Card>

        {/* All Doctors */}
        <div>
          <h2 className="text-2xl font-bold mb-6">All Specialists</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {doctors.map((doctor, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-medium transition-all bg-gradient-card"
              >
                <div className="flex items-start gap-4">
                  <div className="text-5xl">{doctor.image}</div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-bold text-lg">{doctor.name}</h3>
                          {doctor.verified && (
                            <CheckCircle className="w-5 h-5 text-primary" />
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {doctor.specialty}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 bg-yellow-100 px-2 py-1 rounded-full">
                        <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                        <span className="text-sm font-semibold">
                          {doctor.rating}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          ({doctor.reviews})
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        {doctor.experience}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {doctor.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-green-600" />
                        {doctor.availability}
                      </div>
                      <div className="flex items-center gap-1">
                        <Phone className="w-4 h-4" />
                        {doctor.consultationFee}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {doctor.specialties.map((spec, i) => (
                        <span
                          key={i}
                          className="text-xs bg-accent px-2 py-1 rounded-full"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        <Calendar className="w-4 h-4 mr-2" />
                        Book Appointment
                      </Button>
                      <Button size="sm" variant="outline">
                        <MessageSquare className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Help Section */}
        <Card className="mt-8 p-8 bg-gradient-accent text-center">
          <h3 className="text-xl font-semibold mb-2">Need Help Choosing?</h3>
          <p className="text-muted-foreground mb-4">
            Our AI can recommend the best specialist based on your health
            reports
          </p>
          <Button>
            <Brain className="w-4 h-4 mr-2" />
            Get AI Recommendation
          </Button>
        </Card>
      </main>
    </div>
  );
};

export default DoctorRecommendations;

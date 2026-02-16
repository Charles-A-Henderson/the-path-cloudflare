import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeacherHero from "@/components/teacher/TeacherHero";
import WhatYoullLearn from "@/components/teacher/WhatYoullLearn";
import CurriculumTimeline from "@/components/teacher/CurriculumTimeline";
import StudentStories from "@/components/teacher/StudentStories";
import TeacherFAQ from "@/components/teacher/TeacherFAQ";
import EnrollmentCTA from "@/components/teacher/EnrollmentCTA";

const TeacherTraining = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <TeacherHero />
        <WhatYoullLearn />
        <CurriculumTimeline />
        <StudentStories />
        <TeacherFAQ />
        <EnrollmentCTA />
      </main>
      <Footer />
    </div>
  );
};

export default TeacherTraining;

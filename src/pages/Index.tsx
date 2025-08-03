import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Dashboard from "@/components/Dashboard";
import Simulator from "@/components/Simulator";
import CitizenKit from "@/components/CitizenKit";
import Volunteer from "@/components/Volunteer";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <div id="dashboard">
        <Dashboard />
      </div>
      <div id="simulador">
        <Simulator />
      </div>
      <div id="kit">
        <CitizenKit />
      </div>
      <div id="voluntarios">
        <Volunteer />
      </div>
      <Footer />
    </div>
  );
};

export default Index;

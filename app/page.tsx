import { NextPage } from "next";
import Hero from "@/app/components/Hero";
import Footer from "@/app/components/Footer";
import EventSchedule from "./components/EventSchedule";
import Introduction from "./components/Introduction";
import Location from "./components/Location";
import ContactForm from "./components/ContactForm";

const Home: NextPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-blue-950">
      <Hero />
      <Introduction />
      <EventSchedule />
      <Location />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Home;

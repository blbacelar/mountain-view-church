import React from "react";

interface EventDetails {
  date: string;
  time: string;
  location: string;
}

interface WeeklyTopic {
  day: string;
  title: string;
  icon: string;
}

const eventDetails: EventDetails = {
  date: "November 1-24, 2024",
  time: "Every Friday, Saturday & Sunday at 7 PM",
  location: "5003 16th Ave NW, Calgary, AB T3B 0N2",
};

const weeklyTopics: WeeklyTopic[] = [
  {
    day: "Fridays",
    title: "The Bible - Source of Jesus's Teachings",
    icon: "📖",
  },
  { day: "Saturdays", title: "Jesus's Second Coming", icon: "🌟" },
  { day: "Sundays", title: "The Path to Salvation", icon: "❤️" },
];

interface InfoCardProps {
  title: string;
  items: string[];
}

const InfoCard = ({ title, items }: InfoCardProps) => {
  return (
    <div className="bg-slate-800/50 p-8 rounded-2xl animate-fade-in-left">
      <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
      <div className="space-y-4 text-gray-300">
        {items.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
};

const EventInfo = () => {
  return (
    <section className="grid md:grid-cols-2 gap-12 mb-20">
      <InfoCard
        title="When & Where"
        items={[
          `🗓️ ${eventDetails.date}`,
          `⏰ ${eventDetails.time}`,
          `📍 ${eventDetails.location}`,
        ]}
      />
      <InfoCard
        title="Weekly Topics"
        items={weeklyTopics.map(
          (topic) => `${topic.icon} ${topic.day}: ${topic.title}`
        )}
      />
    </section>
  );
};

export default EventInfo;

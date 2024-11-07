import React from "react";

const events = [
  {
    date: "November 8th",
    day: "Friday",
    time: "7:00 PM",
    title: "Why is there so much suffering?",
  },
  {
    date: "November 9th",
    day: "Saturday",
    time: "7:00 PM",
    title: "What happens when we die?",
  },
  {
    date: "November 10th",
    day: "Sunday",
    time: "7:00 PM",
    title: "How is evil eradicated?",
  },
];

const EventSchedule = () => {
  return (
    <section className="py-20 px-4 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Event Schedule
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.date} className="bg-slate-700 p-6 rounded-lg">
              <div className="text-yellow-500 font-bold">{event.day}</div>
              <div className="text-white">
                {event.date} at {event.time}
              </div>
              <div className="text-gray-300 mt-2">{event.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventSchedule;

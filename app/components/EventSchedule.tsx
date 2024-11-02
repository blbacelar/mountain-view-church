import React from "react";

const events = [
  {
    date: "November 1st",
    day: "Friday",
    time: "7:00 PM",
    title: "The Source of Jesus's Teachings – The Bible",
  },
  {
    date: "November 2nd",
    day: "Saturday",
    time: "7:00 PM",
    title: "What Jesus Said About His Imminent Return",
  },
  {
    date: "November 3rd",
    day: "Sunday",
    time: "7:00 PM",
    title: "What Jesus Said About Being Saved",
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

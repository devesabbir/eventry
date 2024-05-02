import { getAllEvents } from "@/db/queries";
import EventCard from "./EventCard";

async function EventList() {
  const allEvents = await getAllEvents();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {allEvents.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}

export default EventList;

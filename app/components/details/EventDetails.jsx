import ActionsButtons from "@/app/components/ActionsButtons";

function EventDetails({ event }) {
  return (
    <div className="flex items-end">
      <div className="flex-auto py-4">
        <h1 className="font-bold text-2xl">{event.name}</h1>
        <p className="text-[#9C9C9C] text-base mt-1">{event.location}</p>
        <div className="text-[#737373] text-sm mt-1">
          <span>{event?.interested_ids?.length} Interested</span>
          <span>|</span>
          <span>{event?.going_ids?.length} Going</span>
        </div>
      </div>
      <div className="w-full flex gap-4 mt-4 flex-1 ">
        <ActionsButtons
          eventId={event.id}
          interestedIds={event.interested_ids}
          goingUserIds={event.going_ids}
        />
      </div>
    </div>
  );
}

export default EventDetails;

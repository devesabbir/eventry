import EventDetails from "@/app/components/details/EventDetails";
import EventVanue from "@/app/components/details/EventVanue";
import HeroSection from "@/app/components/details/HeroSection";
import { getEventById } from "@/db/queries";

async function DetailsPage({ params: { id } }) {
  const event = await getEventById(id);

  return (
    <>
      <HeroSection event={event} />
      <section className="container">
        <EventDetails event={event} />
        <EventVanue
          location={event.location}
          details={event.details}
          swags={event.swags}
        />
      </section>
    </>
  );
}

export default DetailsPage;

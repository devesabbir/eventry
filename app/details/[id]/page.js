import EventDetails from "@/app/components/details/EventDetails";
import EventVanue from "@/app/components/details/EventVanue";
import HeroSection from "@/app/components/details/HeroSection";
import { getEventById } from "@/db/queries";

export async function generateMetadata({ params: { id } }) {
  const eventInfo = await getEventById(id);

  return {
    title: `Eventry - ${eventInfo?.name}`,
    description: eventInfo?.details,
    openGraph: {
      images: [eventInfo?.imageUrl],
    },
  };
}

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

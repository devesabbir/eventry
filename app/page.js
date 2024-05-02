import SearchBar from "@/app/components/landing/SearchBar";
import EventList from "@/app/components/landing/EventList";

export default function Home() {
  return (
    <main className="py-8">
      <section className="container">
        <SearchBar />
        <EventList />
      </section>
    </main>
  );
}

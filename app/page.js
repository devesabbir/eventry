import SearchBar from "@/app/components/landing/SearchBar";
import EventList from "@/app/components/landing/EventList";

export default function Home({ searchParams: { query } }) {
  return (
    <main className="py-8">
      <section className="container">
        <SearchBar />
        <EventList query={query} />
      </section>
    </main>
  );
}

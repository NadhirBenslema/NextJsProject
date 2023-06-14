import { getFeaturedEvents } from "@/dummy-data";
import EventList from "@/components/events/EventList";
import Link from "next/link";
import NewsletterRegistration from "@/components/input/newsletter-registration";

function HomePage(){
    const featuredEvents=getFeaturedEvents();

    return (
        <div>
            <NewsletterRegistration/>
            <EventList items={featuredEvents}/>
        </div>
    );
}
export default HomePage;
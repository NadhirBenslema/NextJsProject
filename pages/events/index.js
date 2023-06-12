import EventList from "@/components/events/EventList";
import EventsSearch from "@/components/events/events_search";
// import { getAllEvents } from "@/dummy-data";
import Link from "next/link";
import { Fragment } from "react";
import { useRouter } from "next/router";
import { getAllEvents } from "@/helpers/api-util";

function EventsPage(props){
    // const events= getAllEvents();
    const router= useRouter();
    const events=props.events;

    function findEventsHandler(year,month){
        const fullPath=`/events/${year}/${month}`
        router.push(fullPath);
    }

    return (
        <Fragment>
            <EventsSearch onSearch={findEventsHandler}/>
           <EventList items={events}/>
        </Fragment>
    );
}


export async function getStaticProps(){
    const events = await getAllEvents();
    return{
        props:{
            events:events
        },
        revalidate:60
    }
}

export default EventsPage;
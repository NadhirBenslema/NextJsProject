import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";
import ErrorAlert from "@/components/ui/error-alert";
import { getEventById,getAllEvents } from "@/helpers/api-util";
// import { getEventById } from "@/dummy-data";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";

function EventDetailPage(props){
    // const router=useRouter();
    // const eventId=router.query.eventId;
    const event = props.selectedEvent;

    // const event =getEventById(eventId);
    if(!event){
        return(
            <ErrorAlert><p>No event Found!</p></ErrorAlert>

        ) 
    }

    return (
        <Fragment>
            <EventSummary title={event.title}/>
            <EventLogistics 
                date={event.date} 
                location={event.location} 
                image={event.image} 
                imageAlt={event.title}
            />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </Fragment>
    );
}

export async function getStaticProps(context){
    const eventId = context.params.eventId;
    const event = await  getEventById(eventId);
    return{
        props:{
            selectedEvent : event
        },
        revalidate:30
    };
}

export async function getStaticPaths(){

    const events=await getAllEvents();
    const paths=events.map(event=>({params:{eventId:event.id}}));
    return{
        paths:paths,
        fallback:false
            
    };
}

export default EventDetailPage;
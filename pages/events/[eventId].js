import { useRouter } from "next/router";
import Head from "next/head";
import { getEventById, getFeaturedEvents } from "../../helpers/api-util";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import { Fragment } from "react";
import Comments from "../../components/input/comments";
export default function EventDetail({ event }) {
  if (!event) {
    return <p>No event found!!</p>;
  }
  return (
    <Fragment>
        <Head>
            <title>{event.title}</title>
        </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
      <Comments eventId={event.id}/>
    </Fragment>
  );
}
export async function getStaticPaths() {
  const events = await getFeaturedEvents();
  const paths = events.map((event) => ({ params: { eventId: event.id } }));
  return {
    paths,
    fallback: 'blocking',
  };
}
export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);
  if(!event){
    return{
            notFound:true
    }
  }
  return {
    props: {
      event,
    },
    revalidate:30
  };
}

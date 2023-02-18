import { Fragment } from "react";
import EventSummary from "@/components/eventDetails/EventSummary";
import EventLogistics from "@/components/eventDetails/EventLogistic";
import EventContent from "@/components/eventDetails/EventContent";
import { useRouter } from "next/router";
import { getEventById } from "../../../data-dumy";
import ErrorAlert from "@/components/ui/ErrorAlert";

function EventDetailPage() {
  const router = useRouter();
  const event = getEventById(router.query.eventid);

  if (!event) {
    return <ErrorAlert>No Events Found!</ErrorAlert>;
  }

  return (
    <Fragment>
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
    </Fragment>
  );
}

export default EventDetailPage;

import { Fragment } from "react";
import { useRouter } from "next/router";

import { getAllEvents } from "../../../data-dumy";
import EventList from "../../components/events/EventsList";
import EventsSearch from "../../components/events/EventSearch";

function AllEventsPage() {
  const router = useRouter();
  const events = getAllEvents();

  const findEventsHandler = (year, month) => {
    router.push(`events/${year}/${month}`);
  };

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList events={events} />
    </Fragment>
  );
}

export default AllEventsPage;

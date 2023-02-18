import EventItem from "./EventItem";

function EventsList(props) {
  const { events } = props;
  return (
    <ul>
      {events.map((event) => {
        return (
          <EventItem
            key={event.id}
            id={event.id}
            title={event.title}
            image={event.image}
            date={event.date}
            location={event.location}
          />
        );
      })}
    </ul>
  );
}
export default EventsList;

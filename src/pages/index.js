import React from "react";
import EventsList from "@/components/events/EventsList";
import { getFeaturedEvents } from "../../data-dumy";

function HomePageEvents() {
  const featureEvents = getFeaturedEvents();
  return (
    <div>
      <EventsList events={featureEvents} />
    </div>
  );
}

export default HomePageEvents;

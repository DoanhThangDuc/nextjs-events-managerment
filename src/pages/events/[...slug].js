import EventsList from "@/components/events/EventsList";
import Button from "@/components/ui/Button";
import ErrorAlert from "@/components/ui/ErrorAlert";
import React from "react";
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../../data-dumy";

function FilterEventPage() {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return (
      <div className="center">
        <ErrorAlert>invalid filter. please try again</ErrorAlert>;
        <Button onClick={() => router.push("/events")}>Back</Button>
      </div>
    );
  }

  const year = +filterData[0];
  const month = +filterData[1];

  if (isNaN(year) || isNaN(month)) {
    return (
      <>
        <ErrorAlert>invalid filter. please try again</ErrorAlert>;
        <Button onClick={() => router.push("/events")}>Back</Button>
      </>
    );
  }
  const filteredEvents = getFilteredEvents({ year: year, month: month });

  return (
    <div>
      <EventsList events={filteredEvents} />
    </div>
  );
}

export default FilterEventPage;

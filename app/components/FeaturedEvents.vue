<template>
  <div class="flex flex-wrap justify-center gap-5">
    <EventCard
      v-for="event in events.slice(0, 3)"
      :key="event.title"
      customClass="w-full md:w-70"
      :event="event"
    />
  </div>
</template>

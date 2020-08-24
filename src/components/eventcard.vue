<template>
  <!-- This is the Event Card Preview Component-->
  <section class="text-gray-700">
  <div class="w-full container p-5 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="p-4 w-full">
        <div class="shadow-xs flex items-center border-2 rounded-lg border-gray-200 p-8 sm:flex-row flex-col">
          <div class="w-32 h-32 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-4xl font-bold text-indigo-500 flex-shrink-0">
           {{event.latest_scan.grade}}
          </div>
          <div class="flex-grow items-center">
            <h2 class="text-gray-900 text-2xl mb-3">{{event.name}}</h2>
            <g-link
            :to="event.path"
            class="rounded-lg border-2 border-indigo-200 p-2 mt-3 text-indigo-500 inline-flex items-center"
          >
            Full Details
             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
          </g-link>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>
<script>
export default {
  name: "EventCard",
  props: {
    event: Object,
  },
};
</script>
<template>
  <!-- This is the Event Card Preview Component-->
  <div class="p-2 max-w-sm w-full lg:max-w-full ">
    <div class="border-separate border-2 border-gray-500 rounded-lg">
      <h1 class="font-bold text-2xl border border-gray-400 px-4 py-2 text-gray-800">
        Site Name: {{ event.name }}
      </h1>
      <p class="text-4xl font-semibold p-4">Grade: {{ event.latest_scan.grade }}</p>
      <div class="p-4 mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
        <div class="mt-3 sm:mt-0 sm:ml-3">
          <g-link
            :to="event.path"
            class="w-full flex items-center justify-center p-3 border border-grey text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-200 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
          >
            Full Details
          </g-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "EventCard",
  props: {
    event: Object,
  },
};
</script>
<template>
  <Layout>
    <div>
      <div v-for="{ node } in $page.allEventPage.edges" :key="node.id">
        <EventCard :event="node"/>
      </div>
    </div>
    <div class="flex justify-center mb-8">
        <Pagination
          baseUrl="/leaderboard/"
          :currentPage="$page.allEventPage.pageInfo.currentPage"
          :totalPages="$page.allEventPage.pageInfo.totalPages"
          :maxVisibleButtons="5"
          v-if="$page.allEventPage.pageInfo.totalPages > 1"
        />
    </div>
    </div>
  </Layout>
</template>

<page-query>
query ($page: Int) {
  allEventPage(
    perPage: 5, 
    page: $page,
    sort:{
      by:	"affectedMn"
      order:DESC
  }) @paginate {
     pageInfo {
      totalPages
      currentPage
      totalItems
    }
    edges{
      node{
        path
        id
        company
        status
        date
        notes
        affectedMn
      }
    }
  }
}
</page-query>

<script>
  import Pagination from "~/components/pagination.vue";
  import Layout from "~/layouts/Default.vue";
  import EventCard from "~/components/eventcard.vue";

  export default {
    components: {
      Layout,
      EventCard,
      Pagination,
    },
    metaInfo: {
      title: "Scan Results",
    },
  };
</script>



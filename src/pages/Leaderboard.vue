<template>
  <Layout>
    <div>
      <div v-for="{ node } in $page.allBlogPost.edges" :key="node.id">
        <EventCard :event="node"/>
      </div>
    </div>
    <div class="flex justify-center mb-8">
        <Pagination
          baseUrl="/leaderboard/"
          :currentPage="$page.allBlogPost.pageInfo.currentPage"
          :totalPages="$page.allBlogPost.pageInfo.totalPages"
          :maxVisibleButtons="5"
          v-if="$page.allBlogPost.pageInfo.totalPages > 1"
        />
    </div>
    </div>
  </Layout>
</template>

<page-query>
query ($page: Int) {
  allBlogPost(
    perPage: 10, 
    page: $page,
    sort:{
      by:	"latest_scan.score"
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
        name
        domain
        latest_scan{
          grade
          timestamp
          hsts
          valid_https
        }
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



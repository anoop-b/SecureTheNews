<template>
  <Layout>
    <main
      class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
    >
      <div class="sm:text-center lg:text-left">
        <h2
          class="text-2xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl"
        >
          {{ $page.blogPost.name }}
          <br />
          <span class="text-indigo-600"
            >Security Grade : {{ $page.blogPost.latest_scan.grade }}</span
          >
        </h2>
        <div class="py-4">
          <div class="p-3 bg-white shadow overflow-hidden sm:rounded-lg">
            <div class="px-4 py-5 border-b border-gray-200 sm:px-6">
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Website Scan Results
              </h3>
              <p class="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
                {{ $page.blogPost.name }}
              </p>
            </div>
            <div>
              <dl>
                <div
                  class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                >
                  <dt class="text-sm leading-5 font-medium text-gray-500">
                    Name
                  </dt>
                  <dd
                    class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
                  >
                    {{ $page.blogPost.name }}
                  </dd>
                </div>
                <div
                  class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                >
                  <dt class="text-sm leading-5 font-medium text-gray-500">
                    Wesbite address
                  </dt>
                  <dd
                    class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
                  >
                    {{ $page.blogPost.domain }}
                  </dd>
                </div>
                <div
                  class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                >
                  <dt class="text-sm leading-5 font-medium text-gray-500">
                    Valid HTTPS
                  </dt>
                  <dd
                    class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
                  >
                    {{ $page.blogPost.latest_scan.valid_https }}
                  </dd>
                </div>

                <div
                  class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                >
                  <dt class="text-sm leading-5 font-medium text-gray-500">
                    Available over HTTPS
                  </dt>
                  <dd
                    class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
                  >
                    {{ $page.blogPost.latest_scan.downgrades_https }}
                  </dd>
                </div>
                <div
                  class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                >
                  <dt class="text-sm leading-5 font-medium text-gray-500">
                    Defaults to HTTPS
                  </dt>
                  <dd
                    class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
                  >
                    {{ $page.blogPost.latest_scan.defaults_to_https }}
                  </dd>
                </div>
                <div
                  class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                >
                  <dt class="text-sm leading-5 font-medium text-gray-500">
                    Valid HTTPS
                  </dt>
                  <dd
                    class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
                  >
                    {{ $page.blogPost.latest_scan.valid_https }}
                  </dd>
                </div>
                <div
                  class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                >
                  <dt class="text-sm leading-5 font-medium text-gray-500">
                    Strict Transport Security (HSTS)
                  </dt>
                  <dd
                    class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
                  >
                    {{ $page.blogPost.latest_scan.hsts }}
                  </dd>
                </div>
                <div
                  class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                >
                  <dt class="text-sm leading-5 font-medium text-gray-500">
                    Strict Transport Security (HSTS) max-age over 18 weeks
                  </dt>
                  <dd
                    class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
                  >
                    {{ $page.blogPost.latest_scan.hsts_preload_ready }}
                  </dd>
                </div>
                <div
                  class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                >
                  <dt class="text-sm leading-5 font-medium text-gray-500">
                    HSTS Preload-Ready
                  </dt>
                  <dd
                    class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
                  >
                    {{ $page.blogPost.latest_scan.hsts_preload_ready }}
                  </dd>
                </div>
              </dl>
            </div>
            <div
              class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
            >
              <div class="rounded-md shadow">
              <a
                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                target="_blank"
                rel="noopener"
                :href = "'//'+$page.blogPost.domain"
              >
                Get started
              </a>
            </div>
            <div class="mt-3 sm:mt-0 sm:ml-3">
                <g-link                   
                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                to=/leaderboard>
                Leaderboard
                </g-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  blogPost(id: $id) {
    name
    domain
    latest_scan{
          grade
          valid_https
        	downgrades_https
          defaults_to_https
          hsts
          hsts_preload_ready
          hsts_preloaded
        }
  }
}
</page-query>

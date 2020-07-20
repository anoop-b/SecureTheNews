<template>
  <Layout>
    <main
      class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
    >
      <div class="sm:text-center lg:text-left">
        <h2
          class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl"
        >
          {{ $page.blogPost.name }}
          <br class="xl:hidden" />
          <span class="text-indigo-600">Grade : {{$page.blogPost.latest_scan.grade}}</span>
        </h2>
        <div class="p-3 bg-white shadow overflow-hidden sm:rounded-lg">
          <div class="px-4 py-5 border-b border-gray-200 sm:px-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Applicant Information
            </h3>
            <p class="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
              Personal details and application.
            </p>
          </div>
          <div>
            <dl>
              <div
                class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-sm leading-5 font-medium text-gray-500">
                  Full name
                </dt>
                <dd
                  class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
                >
                  {{$page.blogPost.name}}
                </dd>
              </div>
              <div
                class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-sm leading-5 font-medium text-gray-500">
                  Application for
                </dt>
                <dd
                  class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
                >
                  {{$page.blogPost.domain}}
                </dd>
              </div>
              <div
                class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-sm leading-5 font-medium text-gray-500">
                  Email address
                </dt>
                <dd
                  class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
                >
                  margotfoster@example.com
                </dd>
              </div>
              <div
                class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-sm leading-5 font-medium text-gray-500">
                  Salary expectation
                </dt>
                <dd
                  class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
                >
                  $120,000
                </dd>
              </div>
              <div
                class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-sm leading-5 font-medium text-gray-500">
                  About
                </dt>
                <dd
                  class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
                >
                  Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                  incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
                  consequat sint. Sit id mollit nulla mollit nostrud in ea
                  officia proident. Irure nostrud pariatur mollit ad adipisicing
                  reprehenderit deserunt qui eu.
                </dd>
              </div>
              <div
                class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-sm leading-5 font-medium text-gray-500">
                  Attachments
                </dt>
                <dd
                  class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
                >
                  <ul class="border border-gray-200 rounded-md">
                    <li
                      class="pl-3 pr-4 py-3 flex items-center justify-between text-sm leading-5"
                    >
                      <div class="w-0 flex-1 flex items-center">
                        <svg
                          class="flex-shrink-0 h-5 w-5 text-gray-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <span class="ml-2 flex-1 w-0 truncate">
                          resume_back_end_developer.pdf
                        </span>
                      </div>
                      <div class="ml-4 flex-shrink-0">
                        <a
                          href="#"
                          class="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
                        >
                          Download
                        </a>
                      </div>
                    </li>
                    <li
                      class="border-t border-gray-200 pl-3 pr-4 py-3 flex items-center justify-between text-sm leading-5"
                    >
                      <div class="w-0 flex-1 flex items-center">
                        <svg
                          class="flex-shrink-0 h-5 w-5 text-gray-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <span class="ml-2 flex-1 w-0 truncate">
                          coverletter_back_end_developer.pdf
                        </span>
                      </div>
                      <div class="ml-4 flex-shrink-0">
                        <a
                          href="#"
                          class="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
                        >
                          Download
                        </a>
                      </div>
                    </li>
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
          <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div class="rounded-md shadow">
              <a
                href="#"
                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
              >
                Get started
              </a>
            </div>
            <div class="mt-3 sm:mt-0 sm:ml-3">
              <a
                href="$page.blogPost.domain"
                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
              >
                Live demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
    <div>
      <h1 v-html="" />
      <div v-html="$page.blogPost.domain" />
      <div v-html="$page.blogPost.latest_scan" />
    </div>
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

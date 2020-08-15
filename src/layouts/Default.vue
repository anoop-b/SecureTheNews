<template>
  <div class="layout">
    <header class="header p-2">
      <strong>
        <g-link
          to="/"
          class="border-b border-indigo-500 px-4 py-2 text-indigo-500 text-2xl"
          >{{ $static.metadata.siteName }}</g-link
        >
      </strong>
      <nav class="nav p-2">
        <g-link
          class="border-b border-indigo-500 px-4 py-2 text-indigo-500 text-2xl hover:text-white hover:bg-indigo-300"
          to="/leaderboard/"
          >Leaderboard</g-link
        >
      </nav>
    </header>
    <transition name="fade" appear>
      <main>
        <slot />
      </main>
    </transition>
    <footer class="mt-5 w-full text-center border-t border-grey py-4 pin-b">
      Built in quarantine with &#x1F499; by
      <a
        href="https://twitter.com/anoopkumarsb"
        target="_blank"
        rel="noopener"
        class="hover:underline text-blue-500 text-lg"
        >Anoop</a
      >
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
/* Transition */
.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter {
  opacity: 0;
}

/* CSS */
body > div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

body {
  font-family: "Open Sans", sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  font-size: 1.1rem;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  min-height: 100vh;
}

main {
  flex-grow: 1;
}

.flex-row {
  display: flex;
  align-items: center;
}

.header * {
  /* Prevent Margin Collapse */
  display: inline-block;
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 8px;
}

.header > nav > a:first-child {
  margin-left: 0;
}

@media only screen and (min-width: 500px) {
  /* Larger Screens Only */
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    height: 80px;
    flex-direction: row;
  }
}
</style>

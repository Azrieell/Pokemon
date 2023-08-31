<template>
  <nav
    class="relative flex w-full flex-wrap items-center justify-between py-1 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4 bg-red-600"
    data-te-navbar-ref>
    <div class="flex w-full flex-wrap items-center justify-between px-3">
      <div>
        <a class="mx-2 my-1 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0"
          href="#">
          <img class="mr-2"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"
            style="height: 45px; margin-left: 50px; margin-right: 990px;" alt="Pokemon Logo" loading="lazy" />
        </a>
      </div>
      <div style="color: white;">
        <router-link to="/tambah">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus-lg"
        viewBox="0 0 16 16">
        <path fill-rule="evenodd"
          d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
      </svg>
    </router-link>
    </div>
      <div class="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
        id="navbarSupportedContent4" data-te-collapse-item>
      </div>
    </div>
  </nav>
</template>

<script>
  // Initialization for ES Users
  // Initialization for ES Users
  import {
    Collapse,
    initTE,
  } from "tw-elements";

  initTE({
    Collapse
  });
</script>
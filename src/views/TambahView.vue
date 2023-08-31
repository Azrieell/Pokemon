<template>
  <div class="bg-gray-100 h-screen py-8">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row gap-4 m-10">
        <div class="md:w-1/4">
          <center>
            <svg class="h-40 w-40 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </center>

          <p class="mb-2 text-xl text-center font-bold tracking-tight text-red-600 dark:text-white">Tambah Image</p>
        </div>
        <div class="md:w-3/4">
          <section class="bg-gray-50 dark:bg-gray-900">

            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-2xl font-bold leading-tight tracking-tigh md:text-2xl dark:text-white text-red-600">
                Informasi Umum
              </h1>
              <h1>Nomor</h1>
              <h2><b>#16</b></h2>
              <form class="space-y-4 md:space-y-6" action="#">
                <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-00 dark:text-white">Name</label>
                  <input type="email" name="email" id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                </div>
                <div>
                  <label for="Type" class="block mb-2 text-sm font-medium text-gray-500 dark:text-white">Types</label>
                  <input type="text"
                    class="bg-gray-50 border border-gray-300 text-gray-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                </div>
                <div>
                  <label for="confirm-password"
                    class="block mb-2 text-sm font-medium text-gray-500 dark:text-white">Resistant</label>
                  <input type="text"
                    class="bg-gray-50 border border-gray-300 text-gray-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                </div>
                <div class="flex items-start">
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row gap-4 m-10">
        <div class="md:w-1/4">
        </div>
        <div class="md:w-3/4">
          <section class="bg-gray-50 dark:bg-gray-900">

            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form class="space-y-4 md:space-y-6" action="#">
                <h1 class="text-3xl font-bold leading-tight tracking-tigh md:text-2xl dark:text-white text-red-600">
                Evolution
              </h1>
                <div>
                  <router-link to="/evolution">
                  <button type="submit"
                    class="w-full text-white bg-red-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">+ Tambah</button>
                  </router-link>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>

</template>
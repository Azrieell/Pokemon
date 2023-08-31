<template>
  <div class="mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-center">
      <h1 class="text-2xl font-semibold text-gray-900">Tambah Evolusi</h1>
    </div>

    <div class="mx-auto mt-8 max-w-md md:mt-12">
      <div class="rounded-3xl bg-white shadow-lg">
        <div class="px-4 py-6 sm:px-8 sm:py-10">
          <div class="flow-root">
            <ul class="-my-8">
              <li class="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                <div class="shrink-0 relative">
                  <img class="h-24 w-24 max-w-full rounded-lg object-cover"
                    src="https://upload.wikimedia.org/wikipedia/sh/thumb/4/43/Bulbasaur.png/1200px-Bulbasaur.png"
                    alt="" />
                </div>

                <div class="relative flex flex-1 flex-col justify-between">
                  <div class="sm:col-gap-5 sm:grid sm:grid-cols-2">
                    <div class="pr-8 sm:pr-5">
                      <p class="mx-0 mt-1 mb-0 text-sm text-gray-400">#1</p>
                      <p class="text-base font-semibold text-gray-900">Bulbasur</p>
                      <br>
                      <div class="flex justify-between">
                        <a href="#" class="group text-lg font-bold focus:text-indigo-600 hover:text-indigo-600">

                          <button class="bg-green-500 text-white font-bold py-2 px-4 border rounded "
                            style="margin-right: 100%;">
                            Grass
                          </button>

                        </a>
                        <button class="bg-purple-500 ml-5 text-white font-bold py-2 px-4 border rounded">
                          Poison
                        </button>
                      </div>
                    </div>
                  </div>

                  <div class="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                    <button type="button"
                      class="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900">
                      <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"
                          class=""></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </li>
              <li class="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                <div class="shrink-0 relative">
                  <img class="h-24 w-24 max-w-full rounded-lg object-cover"
                    src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png" alt="" />
                </div>

                <div class="relative flex flex-1 flex-col justify-between">
                  <div class="sm:col-gap-5 sm:grid sm:grid-cols-2">
                    <div class="pr-8 sm:pr-5">
                      <p class="mx-0 mt-1 mb-0 text-sm text-gray-400">#2</p>
                      <p class="text-base font-semibold text-gray-900">Ivysaur</p>
                      <div class="flex justify-between">
                        <a href="#" class="group text-lg font-bold focus:text-indigo-600 hover:text-indigo-600">

                          <button class="bg-green-500 text-white font-bold py-2 px-4 border rounded "
                            style="margin-right: 100%;">
                            Grass
                          </button>

                        </a>
                        <button class="bg-purple-500 ml-5 text-white font-bold py-2 px-4 border rounded">
                          Poison
                        </button>
                      </div>
                    </div>
                  </div>



                  <div class="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                    <button type="button"
                      class="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900">
                      <svg class="block h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"
                          class=""></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div class="mt-6 text-center">
            <br>
            <button type="button"
              class="group rounded-md bg-red-500 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
              Batal
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </button>
            <button type="button"
              class="group inline-flex   rounded-md bg-red-500 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
              Tambah
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>
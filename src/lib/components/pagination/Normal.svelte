<script lang="ts">
  export let pageNumber: number;
  export let numberOfItems: number;
</script>

<div class="flex flex-col items-center my-12">
  <div class="flex text-gray-700">
    {#if pageNumber > 1}
      <a
        href={`/page/${pageNumber - 1}`}
        class="h-12 w-12 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-chevron-left w-6 h-6"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </a>
    {/if}
    <div class="flex h-12 font-medium rounded-full bg-gray-200">
      {#each Array(Math.ceil(numberOfItems / 20)) as _, index}
        <a
          href={`/page/${index + 1}`}
          class="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in rounded-full"
          class:bg-blue-300={index === pageNumber - 1}
        >
          {index + 1}
        </a>
      {/each}
    </div>
    {#if pageNumber < Math.ceil(numberOfItems / 20)}
      <a
        href={`/page/${pageNumber + 1}`}
        class="h-12 w-12 ml-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-chevron-right w-6 h-6"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </a>
    {/if}
  </div>
</div>
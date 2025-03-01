<script lang="ts">
  import { getVersion } from "@tauri-apps/api/app";
</script>

<header class="p-4 flex-center flex-col gap-4 flex-1 relative z-0 h-full">
    <div class="size-full absolute top-0 left-0 -z-[1]">
        <img src="./welcome-screen-image.svg" alt="Welcome" class="size-full object-cover"/>
    </div>
    <h1 class="text-5xl">Astula</h1>
    {#await getVersion() then version}
        <p>v{version}</p>
    {/await}
</header>
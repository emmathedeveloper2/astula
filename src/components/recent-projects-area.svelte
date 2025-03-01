<script>

  import { Button } from "bits-ui";
  import RecentProjectsAPI from "../api/recent-projects-api";
  import RecentProjectItem from './recent-project-item.svelte'
  import { goto } from "$app/navigation";

  const recent_projects = RecentProjectsAPI.realtime()

</script>
<section class="flex items-center flex-col gap-4 flex-1 p-4">
    <div class="flex items-center justify-between w-full">
      <p>Recent projects</p>
      <Button.Root onclick={() => goto('/new')} class="btn btn-primary">
        New project
      </Button.Root>
    </div>


    <input type="text" placeholder="Search projects">

    <div class="flex flex-1 flex-col gap-4 overflow-scroll w-full">
      {#each $recent_projects as project (project.id)}
          <RecentProjectItem {project}/>
      {/each}

      {#if $recent_projects?.length < 1}
        <div class="size-full flex-center flex-col gap-4">
          <p>You don't have any recents.</p>

          <Button.Root class="btn btn-primary">
            Open folder
          </Button.Root>
        </div>
      {/if}
    </div>


</section>
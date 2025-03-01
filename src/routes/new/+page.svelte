<script lang="ts">
  import { goto } from "$app/navigation";
  import { join, desktopDir } from "@tauri-apps/api/path";
  import { Button } from "bits-ui";
  import RecentProjectsAPI from "@api/recent-projects-api";
  import FileHandlerAPI from "@api/file-handler-api";

  let name = $state("");

  let path = $state("");

  const handle_name_change = async (name: string) => {
    const root = await desktopDir();

    const res = await join(root, "Astula", name);

    path = res;
  };

  const handle_submit = (e: SubmitEvent) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target as any)) as any;

    if(!data.name.trim() || !data.path.trim()) return

    RecentProjectsAPI.add(data.name , data.path)

    FileHandlerAPI.create_project(data.name , data.path)

    goto('/' , { replaceState: true })
  };

  $effect(() => {
    handle_name_change(name);
  });
</script>

<section class="size-full flex-center">
  <form
    onsubmit={handle_submit}
    class="w-[400px] flex flex-col items-center gap-4"
  >
    <h1 class="text-2xl">Create New Project</h1>

    <input
      name="name"
      bind:value={name}
      type="text"
      placeholder="Name"
      autocomplete="off"
    />

    <input name="path" type="text" readonly bind:value={path} />

    <div class="w-full flex items-center justify-end gap-4">
      <Button.Root
        onclick={() => goto("/", { replaceState: true })}
        class="btn btn-secondary"
      >
        Cancel
      </Button.Root>
      <Button.Root class="btn btn-primary">Create</Button.Root>
    </div>
  </form>
</section>

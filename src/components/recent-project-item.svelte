<script lang="ts">
  import { ContextMenu } from "bits-ui";
  import EditIcon from "./icons/edit-icon.svelte";
  import DeleteIcon from "./icons/delete-icon.svelte";
  import DeleteProjectDialog from "./delete-project-dialog.svelte";

  let { project } = $props();
</script>

<ContextMenu.Root>
  <ContextMenu.Trigger>
    <div
      class="flex flex-col border-secondary border-solid border-2 rounded-md p-4 cursor-pointer"
    >
      <p>{project.name}</p>
      <small>{project.path}</small>
    </div>
  </ContextMenu.Trigger>
  <ContextMenu.Content>
    <div
      class="shadow-xl bg-base border border-secondary rounded p-1 w-[200px]"
    >
      <ContextMenu.Item
        class="flex items-center gap-2 p-2 hover:bg-secondary cursor-pointer"
      >
        <EditIcon size={12} />
        <small>Rename</small>
      </ContextMenu.Item>
      <ContextMenu.Separator class="bg-secondary w-full h-[.5px] my-1" />

      <!-- <ContextMenu.Item> -->
        <DeleteProjectDialog {project}>
          <div class="flex items-center gap-2 p-2 hover:bg-secondary cursor-pointer text-red-500">
            <DeleteIcon size={12} />
            <small>Delete</small>
          </div>
        </DeleteProjectDialog>
      <!-- </ContextMenu.Item> -->
    </div>
  </ContextMenu.Content>
</ContextMenu.Root>

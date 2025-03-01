<!-- <script lang="ts">
  import type { RecentProject } from "@types";
  import { Dialog } from "bits-ui";
  import type { Snippet } from "svelte";

  type $$Props = {
	children?: Snippet
	project: RecentProject
  }

  let { children , project } : $$Props = $props()
</script>
 
<Dialog.Root>
	<Dialog.Trigger class="w-full">
		{@render children?.()}
	</Dialog.Trigger>
	<Dialog.Portal>
		<Dialog.Overlay class="bg-base/10"/>
		<Dialog.Content>
			<Dialog.Title>Delete Project</Dialog.Title>
			<Dialog.Description>
				Type <span>{project.name}</span> to delete this project.
			</Dialog.Description>
			<div class="w-full">
				<input type="text" placeholder="name" />
			</div>
			<Dialog.Close />
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root> -->

<script lang="ts">
  import FileHandlerAPI from "@api/file-handler-api";
  import RecentProjectsAPI from "@api/recent-projects-api";
  import type { RecentProject } from "@types";
  import { Button, Dialog } from "bits-ui";
  import type { Snippet } from "svelte";

  type $$Props = {
    children?: Snippet;
    project: RecentProject;
  };

  let confirmation_text = $state('')

  let { children, project }: $$Props = $props();

  const handle_delete = () => {

		RecentProjectsAPI.delete(project.id);

		FileHandlerAPI.delete_project(project.path)
  }
</script>

<Dialog.Root>
  <Dialog.Trigger class="w-full">
    {@render children?.()}
  </Dialog.Trigger>
  <Dialog.Portal>
    <Dialog.Overlay class="bg-black/80" />
    <Dialog.Content
      class="fixed left-[50%] top-[50%] z-50 w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] p-5 sm:max-w-[490px] md:w-full bg-base flex flex-col gap-4"
    >
      <Dialog.Title>Delete Project</Dialog.Title>
      <Dialog.Description>
        Type <span class="bg-secondary text-on-secondary px-2">{project.name}</span> to delete this project.
      </Dialog.Description>
      <input type="text" bind:value={confirmation_text}/>
      <div class="flex w-full justify-end gap-4">
        <Dialog.Close>
          <Button.Root class="btn btn-secondary">Cancel</Button.Root>
        </Dialog.Close>
        <Button.Root onclick={handle_delete} disabled={confirmation_text !== project.name} class="btn btn-primary">Confirm</Button.Root>
      </div>
    </Dialog.Content>
  </Dialog.Portal>
</Dialog.Root>

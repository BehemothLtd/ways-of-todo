<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  import { destroy } from "./apis/todos";

  export let item;
  export let text;

  function markAsDone() {
    item.done = true;
    text = "new test";
  }

  async function deleteSubmit() {
    await destroy(item.id);
    dispatch("destroyed", { id: item.id });
  }
</script>

<li class="list-group-item {item.done ? 'bg-secondary' : ''}">
  {item.content}

  {#if !item.done}
    <button type="button" class="btn btn-success" on:click={() => markAsDone()}
      >Mark as done</button
    >
  {/if}

  <button type="button" class="btn btn-danger" on:click={() => deleteSubmit()}
    >Delete</button
  >
</li>

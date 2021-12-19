<script>
  import { onMount } from "svelte";

  import { getList, create } from "./apis/todos";
  import TodoItem from "./TodoItem.svelte";

  let todos = [];

  let text =
    "binding attributes from parent to children and change from children also possible";

  onMount(async () => {
    const res = await getList();
    todos = res;
  });

  let newTodo = null;

  async function createNewTodo() {
    await create(newTodo);

    todos.push({
      content: newTodo,
      done: false,
    });

    // // Because Svelte's reactivity is based on assignments,
    // // using array methods like .push() and .splice() won't automatically trigger updates.
    todos = todos;

    // clear newTodo
    newTodo = null;
  }

  function deleteItem(event) {
    todos = todos.filter((e) => e.id !== event.detail.id);
  }
</script>

<main>
  <h1>Todo Svelte!</h1>
  {text}
  <ul class="list-group">
    {#each todos as item}
      <TodoItem {item} bind:text on:destroyed={deleteItem} />
    {/each}
  </ul>

  <div>
    <input
      type="text"
      bind:value={newTodo}
      on:keyup={(e) => e.key === "Enter" && createNewTodo()}
    />
    <button on:click={() => createNewTodo()}>Add</button>
  </div>
</main>

<style>
  @import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css";
</style>

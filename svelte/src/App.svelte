<script>
  import TodoItem from "./TodoItem.svelte";

  let text =
    "binding attributes from parent to children and change from children also possible";

  let todos = [
    {
      content: "Learn Svelte",
      done: true,
    },
    {
      content: "Learn TypeScript",
      done: false,
    },
  ];

  let newTodo = null;

  function createNewTodo() {
    todos.push({
      content: newTodo,
      done: false,
    });

    // Because Svelte's reactivity is based on assignments,
    // using array methods like .push() and .splice() won't automatically trigger updates.
    todos = todos;

    // clear newTodo
    newTodo = null;
  }
</script>

<main>
  <h1>Todo Svelte!</h1>
  {text}
  <ul class="list-group">
    {#each todos as item}
      <TodoItem {item} bind:text />
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

<script>
  export let item;
  export let text;

  function markAsDone() {
    item.done = true;
    text = "new test";
  }
</script>

<li class="list-group-item {item.done ? 'bg-secondary' : ''}">
  {item.content}

  {#if !item.done}
    <button type="button" class="btn btn-success" on:click={() => markAsDone()}
      >Mark as done</button
    >
  {/if}
</li>

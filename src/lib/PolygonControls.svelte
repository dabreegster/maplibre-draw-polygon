<script lang="ts">
  import { PolygonTool } from "./polygon_tool.js";
  import { undoLength } from "./stores.js";

  export let polygonTool: PolygonTool;
</script>

<div style="display: flex; justify-content: space-between;">
  <button on:click={() => polygonTool.finish()}>Finish</button>
  <button on:click={() => polygonTool.cancel()}>Cancel</button>
  <button disabled={$undoLength == 0} on:click={() => polygonTool.undo()}>
    {#if $undoLength == 0}
      Undo
    {:else}
      Undo ({$undoLength})
    {/if}
  </button>
</div>

<ul>
  <li>
    <b>Click</b>
    the map to add a vertex
  </li>
  <li>
    <b>Click</b>
    a vertex to delete it
  </li>
  <li>
    <b>Drag</b>
    a vertex or the polygon to move it
  </li>
  <li>
    Press <b>Control+Z</b>
    to undo your last change
  </li>
  <li>
    Press <b>Enter</b>
    or
    <b>double click</b>
    to finish
  </li>
  <li>
    Press <b>Escape</b>
    to cancel
  </li>
</ul>

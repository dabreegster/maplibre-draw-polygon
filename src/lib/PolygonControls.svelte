<script lang="ts">
  import { PolygonTool } from "./polygon_tool.js";
  import { undoLength } from "./stores.js";

  interface Props {
    polygonTool: PolygonTool;
  }

  let { polygonTool }: Props = $props();
</script>

<div style="display: flex; justify-content: space-between;">
  <button onclick={() => polygonTool.finish()}>Finish</button>
  <button onclick={() => polygonTool.cancel()}>Cancel</button>
  <button disabled={$undoLength == 0} onclick={() => polygonTool.undo()}>
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

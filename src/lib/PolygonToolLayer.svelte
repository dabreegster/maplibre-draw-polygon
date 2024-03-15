<script lang="ts">
  import { CircleLayer, FillLayer, GeoJSON, LineLayer } from "svelte-maplibre";
  import { isLine, isPoint, isPolygon } from "./utils.js";
  import { polygonToolGj } from "./stores.js";
</script>

<GeoJSON data={$polygonToolGj}>
  <FillLayer
    id="edit-polygon-fill"
    filter={isPolygon}
    paint={{
      "fill-color": "red",
      "fill-opacity": [
        "case",
        ["boolean", ["get", "hover"], "false"],
        1.0,
        0.5,
      ],
    }}
  />
  <LineLayer
    id="edit-polygon-lines"
    filter={isLine}
    paint={{
      // TODO Dashed
      "line-color": "black",
      "line-width": 8,
      "line-opacity": 0.5,
    }}
  />
  <CircleLayer
    id="edit-polygon-vertices"
    filter={isPoint}
    paint={{
      "circle-color": "black",
      "circle-opacity": ["case", ["has", "hovered"], 1.0, 0.5],
      "circle-radius": 10,
    }}
  />
</GeoJSON>

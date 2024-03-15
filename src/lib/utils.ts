import type { Feature, Point, Polygon, Position } from "geojson";
import type { ExpressionSpecification } from "maplibre-gl";

export const isPolygon: ExpressionSpecification = [
  "==",
  ["geometry-type"],
  "Polygon",
];
export const isLine: ExpressionSpecification = [
  "==",
  ["geometry-type"],
  "LineString",
];
export const isPoint: ExpressionSpecification = [
  "==",
  ["geometry-type"],
  "Point",
];

export function pointFeature(pt: Position): Feature<Point> {
  return {
    type: "Feature",
    properties: {},
    geometry: {
      type: "Point",
      coordinates: setPrecision(pt),
    },
  };
}

// Per https://datatracker.ietf.org/doc/html/rfc7946#section-11.2, 6 decimal
// places (10cm) is plenty of precision
export function setPrecision(pt: Position): Position {
  return [Math.round(pt[0] * 10e6) / 10e6, Math.round(pt[1] * 10e6) / 10e6];
}

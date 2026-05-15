import { corpusTabs, uspTabs } from "./homeData";

export const datasets = corpusTabs.map((dataset) => ({
  ...dataset,
  nav: {
    id: dataset.id,
    label: dataset.label,
    primaryMetric: dataset.metrics?.[0]?.[0] ?? "",
    primaryMetricLabel: dataset.metrics?.[0]?.[1] ?? "",
  },
  hasRichDetail: Boolean(dataset.detail),
}));

export const datasetIds = datasets.map((dataset) => dataset.id);

export const datasetById = Object.fromEntries(
  datasets.map((dataset) => [dataset.id, dataset])
);

export const uspsByDatasetId = Object.fromEntries(
  uspTabs.map((dataset) => [dataset.id, dataset])
);

export function getDataset(id) {
  return datasetById[id] || datasets[0];
}

export function getDatasetUsp(id) {
  return uspsByDatasetId[id] || uspTabs[0];
}

export { uspTabs };

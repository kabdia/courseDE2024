import { getResponseMock } from "./lib/index.js";
import { API_ENDPOINTS } from "../config/constants.js";
// eslint-disable-next-line no-restricted-imports
import { listMarsMockResponse as listMarks } from "#widgets/MapApp/api/mockData.js";

export const handlers = [
  getResponseMock({
    type: "GET",
    endpoint: API_ENDPOINTS.marks.list,
    data: listMarks,
  }),
];

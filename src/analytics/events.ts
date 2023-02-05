import { trackEvent } from "./trackEvent";

export const trackIncrement = (value: Number) =>
  trackEvent("Counter", "Counter incremented", { value });


// Added an event to tract decrement actions as well
// https://synthesia.notion.site/Analytics-Engineer-Synthesia-Challenge-8d9a05d3967b4ceaae96d52a83b36690
export const trackDecrement = (value: Number) =>
  trackEvent("Counter", "Counter decremented", { value });
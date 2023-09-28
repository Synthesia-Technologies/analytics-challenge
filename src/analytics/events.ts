import { trackEvent } from "./trackEvent";

export const trackIncrement = (value: Number) =>
  trackEvent("Counter", "Counter incremented", { value });

export const trackDecrement = (value: Number) =>
  trackEvent("Counter", "Counter deccremented", { value });
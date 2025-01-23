import { NextRouter } from "next/router";

// Redirects to custom 404 page
export const redirectTo404 = (router: NextRouter) => {
  if (typeof window !== "undefined") {
    router.replace("/404");
  }
};

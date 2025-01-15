import { NextRouter } from "next/router";

export const redirectTo404 = (router: NextRouter) => {
  if (typeof window !== "undefined") {
    router.replace("/404");
  }
};

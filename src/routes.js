
// import generatePath from react-router; 

import { generatePath } from "react-router";

export const indexPattern = "/";
export const getIndexRoute = () => {
  return generatePath(indexPattern);
};

export const aboutUsRoutePattern = "/about-us";
export const getAboutUsRoute = () => {
  return generatePath(aboutUsRoutePattern);
};

export const productListRoutePattern = "/product-list";
export const productListRoute = () => {
  return generatePath(productListRoutePattern);
};

export const productDetailRoutePattern = "/:slug/detail";

export const getProductDetailRoute = (slug) => {
  return generatePath(productDetailRoutePattern, { slug });
};

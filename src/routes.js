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

export const contactUsRoutePattern = "/contact-us";
export const getContactUsRoute = () => {
  return generatePath(contactUsRoutePattern);
};

export const productDetailRoutePattern = "/:slug/detail";

export const getProductDetailRoute = (slug) => {
  return generatePath(productDetailRoutePattern, { slug });
};

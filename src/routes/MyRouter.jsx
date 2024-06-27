import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Products, ProductDetails, Cart } from "../Components";
import { SearchFilter } from "../Constants";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/New-Arrivals",
    element: <Products title={"New Arrivals"} Products={SearchFilter} />,
  },
  {
    path: "/Mens",
    element: <Products title={"Mens"} Products={SearchFilter} />,
  },
  {
    path: "/Womens",
    element: <Products title={"Womens"} Products={SearchFilter} />,
  },

  {
    path: "/Sale",
    element: <Products title={"Sale"} Products={SearchFilter} />,
  },
  {
    path: "/Nike-SB-Dunk-High-DI'orr-GreenWood-Navajo-Arts",
    element: <ProductDetails />,
  },
  {
    path: "/Jordan-4-Retro-Oxidized-Green",
    element: <ProductDetails />,
  },
  {
    path: "/Air-Jordan-4-Military-Blue-(2024)",
    element: <ProductDetails />,
  },
  {
    path: "/Nike-Dunk-Low-Grey-Fog",
    element: <ProductDetails />,
  },
  {
    path: "/Nike-Kobe-4-Proto-Girl-Dad",
    element: <ProductDetails />,
  },
  {
    path: "/Jordan-4-Retro-Thunder",
    element: <ProductDetails />,
  },
  {
    path: "/jordan-4-retro-bred-reimagined",
    element: <ProductDetails />,
  },
  {
    path: "/jordan-1-retro-high-og-chicago-lost-and-found",
    element: <ProductDetails />,
  },
  {
    path: "/nike-kobe-6-proto-reverse-grinch",
    element: <ProductDetails />,
  },
  {
    path: "/Jordan-4-Retro-University-Blue",
    element: <ProductDetails />,
  },
  {
    path: "/nike-sb-dunk-low-futura-laboratories-bleached-aqua",
    element: <ProductDetails />,
  },
  {
    path: "/Jordan-4-Retro-Union-Off-Nior",
    element: <ProductDetails />,
  },
  {
    path: "/Jordan-1-Retro-Low-Travis-Scott-Olives",
    element: <ProductDetails />,
  },
  {
    path: "/Jordan-1-Retro-Low-Fragments-x-Travis-Scott",
    element: <ProductDetails />,
  },
  {
    path: "/Nike-Air-Force-1'07",
    element: <ProductDetails />,
  },
  {
    path: "/Nike-SB-Dunk-Low-Concepts-Purple-Lobster",
    element: <ProductDetails />,
  },
  {
    path: "/Nike-Dunk-Low-Cacao-Wow",
    element: <ProductDetails />,
  },
  {
    path: "/Nike-Dunk-Safari-Mix",
    element: <ProductDetails />,
  },
  {
    path: "/Nike-Dunk-Low-Next-Nature-White-Gym-Red",
    element: <ProductDetails />,
  },
  {
    path: "/Jordan-1-Retro-High-OG-Satin-Bred",
    element: <ProductDetails />,
  },
  {
    path: "/Jordan-3-Retro-off-Noir",
    element: <ProductDetails />,
  },
  {
    path: "/Jordan-1-Low-Method-of-Make-Perfect-Pink",
    element: <ProductDetails />,
  },
  {
    path: "/Nike-Dunk-Low-SE-Easter-Candy",
    element: <ProductDetails />,
  },
  {
    path: "/Nike-sb-dunk-low-powerpuff-girls-bubbles",
    element: <ProductDetails />,
  },
  {
    path: "/Nike-sb-dunk-low-powerpuff-girls-blossom",
    element: <ProductDetails />,
  },
  {
    path: "/Nike-sb-dunk-low-powerpuff-girls-buttercup",
    element: <ProductDetails />,
  },

  {
    path: "/Nike-Dunk-Low-Plum-Eclipse",
    element: <ProductDetails />,
  },
  {
    path: "/Nike-Air-Force-1-Low-'07-SE-PRM-Valentine's-Day-(2024)",
    element: <ProductDetails />,
  },
  {
    path: "/Nike-Book-1-RattleSnake",
    element: <ProductDetails />,
  },
  {
    path: "/Nike-Book-1-Haven",
    element: <ProductDetails />,
  },
  {
    path: "/Nike-Kd-17-Sunrise",
    element: <ProductDetails />,
  },
  {
    path: "/Nike-Kd-16-Slim-Reaper",
    element: <ProductDetails />,
  },
  {
    path: "/Nike-Ja-1-Mismatched",
    element: <ProductDetails />,
  },
  {
    path: "/Nike-Ja-1-All-Star-Check",
    element: <ProductDetails />,
  },
  {
    path: "/Jordan-Tatum-2-Vortex",
    element: <ProductDetails />,
  },
  {
    path: "/Jordan-Tatum-2-GPX",
    element: <ProductDetails />,
  },
  {
    path: "/Jordan-Tatum-2-Easter",
    element: <ProductDetails />,
  },
  {
    path: "/Nike-Dunk-Low-Jumbo-Black-Bronzine",
    element: <ProductDetails />,
  },
  {
    path: "/Nike-Dunk-Low-Jumbo-University-Blue",
    element: <ProductDetails />,
  },
  {
    path: "/Nike-Ja-1-Personal-touch",
    element: <ProductDetails />,
  },
  {
    path: "/Jordan-1-Low-og-Shadow",
    element: <ProductDetails />,
  },
  {
    path: "/Nike-dunk-low-x-parris-goebel",
    element: <ProductDetails />,
  },
]);

import React from "react";
import { OwlIconSvg } from "./svg-icons/owl.svg";
import { CarrotIconSvg } from "./svg-icons/carrot.svg";
import { UmbrellaIconSvg } from "./svg-icons/umbrella.svg";

export const testsData = {
  0: {
    id: 0,
    name: "Сова",
    active: false,
    src: <OwlIconSvg />
  },
  1: {
    id: 1,
    name: "Морковь",
    active: false,
    src: <CarrotIconSvg />
  },
  2: {
    id: 2,
    name: "Зонт",
    active: false,
    src: <UmbrellaIconSvg />
  }
};

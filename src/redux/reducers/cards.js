import React from "react";
import { OwlIconSvg } from "../../svg-icons/owl.svg";
import { CarrotIconSvg } from "../../svg-icons/carrot.svg";
import { UmbrellaIconSvg } from "../../svg-icons/umbrella.svg";
import { SET_CHECKED_CARD_INDEX } from "../actions/cards";

const initialState = {
  checked: null,
  data: [
    {
      id: 0,
      text: "Сова",
      image: <OwlIconSvg />,
      active: false
    },
    {
      id: 1,
      text: "Морковь",
      image: <CarrotIconSvg />,
      active: false
    },
    {
      id: 2,
      text: "Зонт",
      image: <UmbrellaIconSvg />,
      active: false
    }
  ]
};

export const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHECKED_CARD_INDEX: {
      return {
        ...state,
        checked: action.index
      };
    }
    default: {
      return state;
    }
  }
};

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Item } from "../item/item";
import { Card } from "../../other-components/card/card";
import { setCheckedCardIndex } from "../../redux/actions/cards";

export const CardsList = () => {
  const dispatch = useDispatch();
  const cards = useSelector(({ cards }) => cards);

  return cards.data.map((card, index) => (
    <Item key={card.id} name={index}>
      {({ forwardRef, elements }) => (
        <Card
          {...card}
          forwardRef={forwardRef}
          active={elements.active === index}
          checked={cards.checked === index}
          onClickHandler={() =>
            index !== cards.checked && dispatch(setCheckedCardIndex(index))
          }
        />
      )}
    </Item>
  ));
};

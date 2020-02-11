import React, { useRef, useEffect } from "react";

const stylesActive = {
  color: "red",
  fontWeight: "bold"
};

const stylesChecked = {
  color: "green",
  fontWeight: "bold"
};

export const Item = ({
  id,
  name,
  src,
  active,
  checked,
  refsArr,
  setCheckedHandler
}) => {
  const itemRef = useRef();

  useEffect(() => {
    refsArr.current = { ...refsArr.current, [id]: itemRef };
  }, [refsArr, id]);

  const onClickHandler = () => {
    console.log(name);
    setCheckedHandler(id);
  };

  return (
    <div
      style={checked ? stylesChecked : active ? stylesActive : {}}
      ref={itemRef}
      onClick={onClickHandler}
    >
      <img src={src} alt="" />
      {name}
    </div>
  );
};

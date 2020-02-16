import React from "react";
import { Cover } from "./test-components/cover/cover.js";
import { ItemsWrapper } from "./wrappers/items-wrapper/items-wrapper.js";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { ElementsSwitcher } from "./test-components/elements-switcher/elements-switcher.js";
import { ConnectedTimeline } from "./test-components/connected-timeline/connected-timeline.js";
import { CardsList } from "./test-components/cards-list/cards-list.js";

export default () => {
  return (
    <Provider store={store}>
      <ConnectedTimeline />
      <ElementsSwitcher>
        <Cover />
        <ItemsWrapper>
          <CardsList />
        </ItemsWrapper>
      </ElementsSwitcher>
    </Provider>
  );
};

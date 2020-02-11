export const addListeners = (listeners, target, fn) => {
  listeners.map(listener => target.addEventListener(listener, fn, true));
};

export const removeListeners = (listeners, target, fn) => {
  listeners.map(listener => target.removeEventListener(listener, fn, true));
};

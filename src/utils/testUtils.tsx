import {
  queries,
  Queries,
  render as rtlRender,
  RenderOptions,
  RenderResult,
} from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import rootReducer from 'redux/rootReducer';
import { Store } from 'redux';

interface CustomRenderOptions extends RenderOptions {
  preloadedState: Record<string, any>;
  store: Store;
}

const render = <
  Q extends Queries = typeof queries,
  Container extends Element | DocumentFragment = HTMLElement,
>(
  ui: React.ReactElement,
  {
    preloadedState,
    store = configureStore({ reducer: rootReducer, preloadedState }),
    ...renderOptions
  }: CustomRenderOptions,
): RenderResult => {
  function Wrapper({ children }: { children: React.ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
  }

  return rtlRender(ui, {
    wrapper: Wrapper as React.ComponentType,
    ...renderOptions,
  });
};

export * from '@testing-library/react';
export { render };

import templateApi from './services/template';

const rootReducer = {
  [templateApi.reducerPath]: templateApi.reducer,
};

export default rootReducer;

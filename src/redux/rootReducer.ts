import templateApi from './services/templateService';
import templateReducer from './slices/templateSlice';

const rootReducer = {
  [templateApi.reducerPath]: templateApi.reducer,
  template: templateReducer,
};

export default rootReducer;

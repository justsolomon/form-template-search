import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TemplateOrder, Template, TemplateCategory } from 'types/global';

type CategoryFilter = 'All' | TemplateCategory;

interface TemplateState {
  templates: {
    all: Template[];
    displayed: Template[];
  };
  filters: {
    category: CategoryFilter;
    alphabetical: TemplateOrder;
    date: TemplateOrder;
  };
  pagination: {
    prevPage: number | null;
    nextPage: number | null;
    currentPage: number;
    totalPages: number;
  };
}

const initialState: TemplateState = {
  templates: {
    all: [],
    displayed: [],
  },
  filters: {
    category: 'All',
    alphabetical: 'Default',
    date: 'Default',
  },
  pagination: {
    prevPage: null,
    nextPage: null,
    currentPage: 0,
    totalPages: 0,
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateCategory: (state, action: PayloadAction<CategoryFilter>) => {
      state.filters = initialState.filters;
      state.filters.category = action.payload;
    },
  },
});

export default authSlice.reducer;

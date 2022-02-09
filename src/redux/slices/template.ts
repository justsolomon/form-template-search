import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TemplateOrder, Template, TemplateCategory } from 'types/global';

type CategoryFilter = 'All' | TemplateCategory;

interface TemplateState {
  searchQuery: string;
  templates: {
    all: Template[];
    current: Template[];
    displayed: Template[];
    filterResults: Template[];
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
  searchQuery: '',
  templates: {
    all: [],
    current: [],
    displayed: [],
    filterResults: [],
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

export const templateSlice = createSlice({
  name: 'template',
  initialState,
  reducers: {
    updateCategory: (state, action: PayloadAction<CategoryFilter>) => {
      state.filters = initialState.filters;
      state.searchQuery = '';
      state.filters.category = action.payload;

      if (action.payload === 'All') {
        state.templates.current = state.templates.all;
      } else {
        state.templates.current = state.templates.all.filter((template) =>
          template.category.includes(action.payload as TemplateCategory),
        );
      }
    },
    search: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;

      state.templates.filterResults = state.templates.current.filter(
        (template) => {
          const regex = new RegExp(action.payload, 'gi');
          return template.name.match(regex);
        },
      );
    },
    sortByAlphabet: (state, action: PayloadAction<TemplateOrder>) => {
      state.filters.date = 'Default';

      if (action.payload === 'Default') {
        state.templates.filterResults = state.templates.current;
      } else {
        state.templates.filterResults = state.templates.current.sort((a, b) => {
          if (action.payload === 'Ascending') {
            return a.name.localeCompare(b.name);
          } else {
            return b.name.localeCompare(a.name);
          }
        });
      }
    },
    sortByDate: (state, action: PayloadAction<TemplateOrder>) => {
      state.filters.alphabetical = 'Default';

      if (action.payload === 'Default') {
        state.templates.filterResults = state.templates.current;
      } else {
        state.templates.filterResults = state.templates.current.sort((a, b) => {
          if (action.payload === 'Ascending') {
            return (
              new Date(b.created).getTime() - new Date(a.created).getTime()
            );
          } else {
            return (
              new Date(a.created).getTime() - new Date(b.created).getTime()
            );
          }
        });
      }
    },
    goToNextPage: (state, action: PayloadAction<void>) => {},
    goToPrevPage: (state, action: PayloadAction<void>) => {},
    resetPageState: (state, action: PayloadAction<void>) => {},
  },
});

export default templateSlice.reducer;

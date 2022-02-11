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
    numOfPages: number;
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
    numOfPages: 0,
  },
};

export const templateSlice = createSlice({
  name: 'template',
  initialState,
  reducers: {
    updateCategory: (state, action: PayloadAction<CategoryFilter>) => {
      state.filters = { ...initialState.filters, category: action.payload };
      state.searchQuery = '';
      state.templates.filterResults = [];

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

      if (!action.payload) {
        const { date, alphabetical } = state.filters;

        if (date !== 'Default') {
          state.templates.filterResults = getSortedTemplates(
            date,
            state.templates.current,
            'alphabet',
          );
        } else if (alphabetical !== 'Default') {
          state.templates.filterResults = getSortedTemplates(
            date,
            state.templates.current,
            'date',
          );
        } else {
          state.templates.filterResults = [];
        }

        return;
      }

      const templates = state.templates.filterResults.length
        ? state.templates.filterResults
        : state.templates.current;

      state.templates.filterResults = getSearchResults(
        action.payload,
        templates,
      );
    },
    sortByAlphabet: (state, action: PayloadAction<TemplateOrder>) => {
      if (action.payload === state.filters.alphabetical) return;

      if (state.filters.date !== 'Default') {
        if (state.searchQuery) {
          state.templates.filterResults = getSearchResults(
            state.searchQuery,
            state.templates.current,
          );
        }

        state.filters.date = 'Default';
      }

      const templates =
        state.templates.filterResults.length || state.searchQuery
          ? state.templates.filterResults
          : state.templates.current;

      state.filters.alphabetical = action.payload;
      state.templates.filterResults = getSortedTemplates(
        action.payload,
        templates,
        'alphabet',
      );
    },
    sortByDate: (state, action: PayloadAction<TemplateOrder>) => {
      if (action.payload === state.filters.date) return;

      if (state.filters.alphabetical !== 'Default') {
        if (state.searchQuery) {
          state.templates.filterResults = getSearchResults(
            state.searchQuery,
            state.templates.current,
          );
        }

        state.filters.alphabetical = 'Default';
      }

      const templates =
        state.templates.filterResults.length || state.searchQuery
          ? state.templates.filterResults
          : state.templates.current;

      state.filters.date = action.payload;
      state.templates.filterResults = getSortedTemplates(
        action.payload,
        templates,
        'date',
      );
    },
    goToPage: (state, action: PayloadAction<'prev' | 'next'>) => {
      const { prevPage, nextPage, currentPage, numOfPages } = state.pagination;

      const isNext = action.payload === 'next';
      const page = isNext ? nextPage : prevPage;
      if (!page) return;

      const templates =
        state.templates.filterResults.length || state.searchQuery
          ? state.templates.filterResults
          : state.templates.current;

      state.templates.displayed = templates.slice((page - 1) * 15, page * 15);
      state.pagination = {
        ...state.pagination,
        prevPage: isNext ? currentPage : page > 1 ? page - 1 : null,
        nextPage: isNext
          ? page + 1 <= numOfPages
            ? page + 1
            : null
          : currentPage,
        currentPage: page,
      };
    },
    resetPageState: (state, action: PayloadAction<Template[] | undefined>) => {
      if (action && action.payload) {
        state.templates = {
          ...state.templates,
          all: action.payload,
          current: action.payload,
        };
      }

      const templates =
        state.templates.filterResults.length || state.searchQuery
          ? state.templates.filterResults
          : state.templates.current;

      const numOfPages = Math.ceil(templates.length / 15);
      state.templates.displayed = templates.slice(0, 15);
      state.pagination = {
        ...state.pagination,
        numOfPages,
        currentPage: 1,
        prevPage: null,
        nextPage: numOfPages > 1 ? 2 : null,
      };
    },
  },
});

const getSearchResults = (query: string, templates: Template[]): Template[] => {
  return templates.filter((template) => {
    const regex = new RegExp(query, 'gi');
    return template.name.match(regex);
  });
};

const getSortedTemplates = (
  order: TemplateOrder,
  templates: Template[],
  type: 'alphabet' | 'date',
): Template[] => {
  return templates.sort((a, b) => {
    switch (true) {
      case order === 'Ascending' && type === 'alphabet':
        return a.name.localeCompare(b.name);
      case order === 'Descending' && type === 'alphabet':
        return b.name.localeCompare(a.name);
      case order === 'Ascending' && type === 'date':
        return new Date(b.created).getTime() - new Date(a.created).getTime();
      case order === 'Descending' && type === 'date':
        return new Date(a.created).getTime() - new Date(b.created).getTime();
      case order === 'Default':
      default:
        return 0;
    }
  });
};

export const {
  updateCategory,
  search,
  sortByAlphabet,
  sortByDate,
  goToPage,
  resetPageState,
} = templateSlice.actions;

export default templateSlice.reducer;

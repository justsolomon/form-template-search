import Spinner from 'components/global/Spinner';
import FormControls from 'components/home/FormControls';
import HomeLayout from 'components/home/HomeLayout';
import InfoBanner from 'components/home/InfoBanner';
import PageControls from 'components/home/PageControls';
import TemplateCardList from 'components/home/TemplateCardList';
import TemplateListHeader from 'components/home/TemplateListHeader';
import ErrorMessage from 'components/global/ErrorMessage';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { useFetchTemplatesQuery } from 'redux/services/templateService';
import { resetPageState } from 'redux/slices/templateSlice';
import { QueryError } from 'types/global';

const Home = () => {
  const { data, error, isLoading, refetch } = useFetchTemplatesQuery();
  const { filters, templates, searchQuery } = useAppSelector(
    (store) => store.template,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) dispatch(resetPageState(data));
  }, [data]); //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <HomeLayout>
      <FormControls />
      <InfoBanner />

      {error && !isLoading ? (
        <ErrorMessage
          error={(error as QueryError)?.error || ''}
          retryRequest={refetch}
        />
      ) : null}

      {isLoading ? (
        <Spinner />
      ) : !error ? (
        <>
          <TemplateListHeader
            category={filters.category}
            numOfTemplates={
              templates.filterResults.length || searchQuery
                ? templates.filterResults.length
                : templates.current.length
            }
          />

          {templates.displayed.length ? (
            <TemplateCardList templates={templates.displayed} />
          ) : (
            <p>No templates found</p>
          )}

          <PageControls />
        </>
      ) : null}
    </HomeLayout>
  );
};

export default Home;

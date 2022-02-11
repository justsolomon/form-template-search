import Spinner from 'components/global/Spinner';
import FormControls from 'components/home/FormControls';
import HomeLayout from 'components/home/HomeLayout';
import InfoBanner from 'components/home/InfoBanner';
import PageControls from 'components/home/PageControls';
import TemplateCardList from 'components/home/TemplateCardList';
import TemplateListHeader from 'components/home/TemplateListHeader';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { useFetchTemplatesQuery } from 'redux/services/templateService';
import { resetPageState } from 'redux/slices/templateSlice';

const Home = () => {
  const { data, isLoading } = useFetchTemplatesQuery();
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
      {isLoading ? (
        <Spinner />
      ) : (
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
      )}
    </HomeLayout>
  );
};

export default Home;

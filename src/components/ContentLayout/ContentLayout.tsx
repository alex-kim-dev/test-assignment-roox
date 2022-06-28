import { Spinner } from '../Spinner/Spinner';
import css from './ContentLayout.module.scss';

interface ContentLayoutProps {
  title: string;
  isLoading?: boolean;
  errorMsg?: string;
}

export const ContentLayout: React.FC<ContentLayoutProps> = ({
  title,
  isLoading = false,
  errorMsg = '',
  children,
}) => {
  const renderBody = () => {
    if (isLoading)
      return (
        <div className={css.spinnerWrapper}>
          <Spinner />
        </div>
      );

    if (errorMsg) return <p className={css.errorMsg}>{errorMsg}</p>;

    return children;
  };

  return (
    <>
      <h1>{title}</h1>
      {renderBody()}
    </>
  );
};

import { Button } from '~/components/Button/Button';
import { SortingOptions, useSorting } from '~/stores/sorting';

import css from './Sorting.module.scss';

export const Sorting: React.FC = () => {
  const [currentOption, setOption] = useSorting();

  const options = (Object.keys(SortingOptions) as SortingOptions[]).filter(
    (key) => key !== SortingOptions.default
  );

  const handleRadioClick = (option: SortingOptions) => () => {
    setOption((prevOption) =>
      option === prevOption ? SortingOptions.default : option
    );
  };

  return (
    <fieldset className={css.wrapper}>
      <legend>Sorting</legend>
      {options.map((option) => (
        <Button
          key={option}
          active={currentOption === option}
          onClick={handleRadioClick(option)}>
          by {option}
        </Button>
      ))}
    </fieldset>
  );
};

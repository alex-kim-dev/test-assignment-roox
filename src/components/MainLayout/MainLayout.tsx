import css from './MainLayout.module.scss';

export const MainLayout: React.FC = ({ children }) => {
  return (
    <div className={css.grid}>
      <aside className={css.aside}>Сортировка</aside>
      <main className={css.main}>{children}</main>
    </div>
  );
};

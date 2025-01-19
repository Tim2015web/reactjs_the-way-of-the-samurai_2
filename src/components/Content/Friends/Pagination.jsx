import classes from "./Friends.module.scss";

export default function Pagination({
  pageSize,
  currentPage,
  setCurrentPage,
  getPageNumbers,
  pagesCount,
  handlePageSizeChangeThunk,
  handlePageChangeThunk,
}) {
  return (
    <section className={classes.pagination}>
      {/* Кнопка назад */}
      <button
        onClick={() => handlePageChangeThunk(-1, pagesCount, currentPage)}
        disabled={currentPage === 1}
        className={classes.navButton}
      >
        Назад
      </button>

      {/* Пагинация: отображение номеров страниц */}
      {getPageNumbers().map((item) => (
        <span
          key={item}
          className={currentPage === item ? classes.active : ""}
          onClick={() => setCurrentPage(item)}
        >
          {item}
        </span>
      ))}

      {/* Кнопка вперед */}
      <button
        onClick={() => handlePageChangeThunk(+1, pagesCount, currentPage)}
        disabled={currentPage === pagesCount}
        className={classes.navButton}
      >
        Вперед
      </button>

      {/* Выпадающий список для выбора количества элементов на странице */}
      <select
        name="pageSize"
        value={pageSize}
        onChange={(event) => handlePageSizeChangeThunk(event.target.value)}
        className={classes.select}
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={50}>50</option>
      </select>
    </section>
  );
}

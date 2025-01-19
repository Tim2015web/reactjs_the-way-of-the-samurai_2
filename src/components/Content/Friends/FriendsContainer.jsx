import { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../../redux/friendsReducer";
import Friends from "./Friends";
import Preloader from "../../Preloader/Preloader";

function FriendsContainer({
  friendsPage,
  setCurrentPage,
  getFriends,
  handleSubscriptionThunk,
  handlePageSizeChangeThunk,
  handlePageChangeThunk,
}) {
  useEffect(() => {
    getFriends(friendsPage.currentPage, friendsPage.pageSize);
  }, [friendsPage.currentPage, friendsPage.pageSize]);

  // Пагинация-----
  // Расчет общего числа страниц
  const pagesCount = Math.ceil(
    friendsPage.totalFriendsCount / friendsPage.pageSize
  );
  // Количество видимых страниц (навигационных кнопок) на странице
  const visiblePages = 5;

  // Функция для вычисления номеров страниц для отображения
  function getPageNumbers() {
    let startPage = Math.max(
      friendsPage.currentPage - Math.floor(visiblePages / 2),
      1
    ); // Начальная страница
    let endPage = startPage + visiblePages - 1; // Конечная страница

    // Если конечная страница выходит за пределы, подправляем диапазон
    if (endPage > pagesCount) {
      endPage = pagesCount;
      startPage = Math.max(endPage - visiblePages + 1, 1); // Перерасчет начальной страницы
    }

    let pages = []; // Массив страниц для отображения
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i); // Добавляем номер страницы в массив
    }

    return pages; // Возвращаем массив с номерами страниц
  }
  
  return (
    <>
      {friendsPage.isFetching && <Preloader />}
      <Friends
        friendsPage={friendsPage}
        setCurrentPage={setCurrentPage}
        getPageNumbers={getPageNumbers}
        pagesCount={pagesCount}
        handleSubscriptionThunk={handleSubscriptionThunk}
        handlePageSizeChangeThunk={handlePageSizeChangeThunk}
        handlePageChangeThunk={handlePageChangeThunk}
      />
    </>
  );
}

function mapStateToProps(state) {
  return { friendsPage: state.friendsReducer };
}

export default connect(mapStateToProps, actions)(FriendsContainer);

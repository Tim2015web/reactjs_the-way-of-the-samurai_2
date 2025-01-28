import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../redux/friendsReducer";
import Friends from "./Friends";
import Preloader from "../../Preloader/Preloader";
import withAuthRedirect from "../../../hoc/withAuthRedirect";

function FriendsContainer({}) {
  const dispatch = useDispatch();
  const friendsPage = useSelector((state) => state.friendsReducer);

  useEffect(() => {
    dispatch(actions.getFriends(friendsPage.currentPage, friendsPage.pageSize));
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
        setCurrentPage={(page) => dispatch(actions.setCurrentPage(page))}
        getPageNumbers={getPageNumbers}
        pagesCount={pagesCount}
        handleSubscriptionThunk={(friendId, shouldFollow) =>
          dispatch(actions.handleSubscriptionThunk(friendId, shouldFollow))
        }
        handlePageSizeChangeThunk={(pageSize) =>
          dispatch(actions.handlePageSizeChangeThunk(pageSize))
        }
        handlePageChangeThunk={(direction, pagesCount, currentPage) =>
          dispatch(
            actions.handlePageChangeThunk(direction, pagesCount, currentPage)
          )
        }
      />
    </>
  );
}

export default withAuthRedirect(FriendsContainer); // HOC

import classes from "./Friends.module.scss";
import headerIcon from "../../../assets/icons/addfriends.png";
import ContentHeader from "../ContentHeader";
import Pagination from "./Pagination";
import FriendsList from "./FriendsList";

export default function Friends({
  friendsPage,
  setCurrentPage,
  getPageNumbers,
  pagesCount,
  handleSubscriptionThunk,
  handlePageSizeChangeThunk,
  handlePageChangeThunk,
}) {
  return (
    <section className={classes.friends}>
      <ContentHeader source={headerIcon} name="Друзья" />

      <Pagination
        pageSize={friendsPage.pageSize}
        currentPage={friendsPage.currentPage}
        setCurrentPage={setCurrentPage}
        getPageNumbers={getPageNumbers}
        pagesCount={pagesCount}
        handlePageSizeChangeThunk={handlePageSizeChangeThunk}
        handlePageChangeThunk={handlePageChangeThunk}
      />

      <FriendsList
        friends={friendsPage.friends}
        isFollowing={friendsPage.isFollowing}
        handleSubscriptionThunk={handleSubscriptionThunk}
      />
    </section>
  );
}

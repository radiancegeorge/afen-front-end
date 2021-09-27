import { useEffect, useState } from "react";
import { withRouter, Link } from "react-router-dom";
import classNames from "classnames";
import "./index.scss";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

const Pagination: React.FC<any> = ({ onPageChange, ...props }) => {
  const [pages, setPages] = useState(Array());
  const [activePage, setActive] = useState(props.activePage || 0);
  const [totalRecords, setTotalRecords] = useState(props.totalRecords);
  const size = useWindowSize();
  const [tap, setTap] = useState(11);

  useEffect(() => {
    console.log(size);
  }, [size]);

  useEffect(() => {
    setPages(getPageList(totalRecords, activePage, 9));
  }, []);

  function onClickPage(pageNumber: number) {
    if (pageNumber < 1) return;
    if (pageNumber > totalRecords) return;
    setActive(pageNumber);
    setPages(getPageList(totalRecords, activePage, 5));
    onPageChange(activePage);
  }

  function getPageList(totalPages: any, currentPage: any, maxLength: any) {
    if (maxLength < 5) throw "maxLength must be at least 5";

    function range(start: number, end: number) {
      return Array.from(Array(end - start + 1), (_, i) => i + start);
    }

    var sideWidth = maxLength < 7 ? 1 : 2;

    var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
    console.log("left =>", leftWidth);
    var rightWidth = (maxLength - sideWidth * 2 - 2) >> 1;
    console.log("right =>", rightWidth);

    if (totalPages <= maxLength) {
      // no ...(0) in list
      return range(1, totalPages);
    }
    if (currentPage <= maxLength - sideWidth - 1 - rightWidth) {
      //  no add ... (0) on left side
      return range(1, maxLength - sideWidth - 1).concat(
        0,
        range(totalPages - sideWidth + 1, totalPages)
      );
    }
    if (currentPage >= totalPages - sideWidth - 1 - rightWidth) {
      // no add ... (0) on right side
      return range(1, sideWidth).concat(
        0,
        range(totalPages - sideWidth - 1 - rightWidth - leftWidth, totalPages)
      );
    }
    // add ... (0) on both side
    return range(1, sideWidth).concat(
      0,
      range(currentPage - leftWidth, currentPage + rightWidth),
      0,
      range(totalPages - sideWidth + 1, totalPages)
    );
  }

  return (
    <div className="paginationouter">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {activePage > 1 ? (
            <>
              <li className="page-item">
                <Link
                  className="page-link"
                  to="#"
                  onClick={() => {
                    onClickPage(activePage - 1);
                  }}>
                  &lt;
                </Link>
              </li>
            </>
          ) : (
            <li className="page-item disabled">
              <Link to="#" className="page-link disabled" aria-label="Pre">
                <span aria-hidden="true">
                  <i className="fas fa-chevron-left"></i>
                </span>
                <span className="sr-only">Next</span>
              </Link>
            </li>
          )}
          {pages.map((item, i) => {
            return item !== 0 ? (
              <li className="page-item">
                <Link
                  className={classNames("page-link", {
                    active: activePage === item,
                  })}
                  to="#"
                  onClick={() => {
                    activePage !== item && onClickPage(item);
                  }}>
                  {item}
                </Link>
              </li>
            ) : (
              <li className="page-item">
                <Link className="page-link disabled" to="#">
                  ...
                </Link>
              </li>
            );
          })}
          {activePage < totalRecords ? (
            <>
              <li className="page-item">
                <Link className="page-link" to="#">
                  &gt;
                </Link>
              </li>
            </>
          ) : (
            <li className="page-item disabled">
              <a className="page-link disabled" aria-label="Next">
                <span aria-hidden="true">
                  <i className="fas fa-chevron-right"></i>
                </span>
                <span className="sr-only">Next</span>
              </a>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default withRouter(Pagination);

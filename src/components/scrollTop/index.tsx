import { useEffect } from "react";
import { withRouter } from "react-router-dom";

const ScrollToTop: React.FC<any> = ({
  children,
  location: { pathname, hash },
}) => {
  useEffect(() => {
    if (hash === "") {
      window.scrollTo(0, 0);

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } else {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
    let navbarSupportedContent = document.getElementById(
      "navbarSupportedContent"
    );
    if (navbarSupportedContent)
      navbarSupportedContent?.classList.remove("show");
  }, [pathname]);

  return children || <></>;
};

export default withRouter(ScrollToTop);

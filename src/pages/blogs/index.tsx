import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../../components/pagination";
import useAdminCred from "../../hooks/blogPosts";
import moment from "moment";
import "./index.scss";
import CustomImageLoader from "../../components/customImageLoader";

const Blogs = (props: any) => {
  const defaultCount = 5;
  const { postsData, fetchPosts } = useAdminCred();
  useEffect(() => {
    fetchPosts();
  }, []);
  // console.log(postsData.data);

  const compiledData = postsData.data
    ?.map((data: any, index: number) => {
      return {
        ...data,
        link: data.medium_link,
        description: data.post,
        date: moment(data.createdAt).format("lll"),
      };
    })
    .reverse();
  const numberToArray = () => {
    if (compiledData) {
      const newArray = [];
      for (
        let index = 1;
        index < Math.ceil(compiledData.length / defaultCount + 1);
        index++
      ) {
        newArray.push(index);
      }
      return newArray;
    }
  };
  const [page, setPage] = useState(1);
  const blogs = compiledData?.slice(
    defaultCount * (page - 1),
    defaultCount * page
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);
  // console.log(paginationCount, "count");
  const more = (item: Number) => {};
  const rightView = (
    ele: any = { image: "", description: "", date: "", title: "" },
    index: number
  ) => {
    return (
      <div className="row mb-5" key={index}>
        <div className="col-md-6 text-right">
          <div className="userimgouter">
            <CustomImageLoader src={ele.image} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="leftblocgcontent">
            <h5>{ele.date}</h5>
            <h3>{ele.title}</h3>
            <p className="description">{ele.description}</p>
            <div>
              <a href={ele.link} target="_blank">
                Read More &gt;&gt;&gt;
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const leftview = (
    ele: any = { image: "", description: "", date: "", title: "" },
    index: number
  ) => {
    return (
      <div className="row mb-5 mobile_dairection">
        <div className="col-md-6">
          <div className="leftblocgcontent ">
            <h5>{ele.date}</h5>
            <h3> {ele.title}</h3>
            <p>{ele.description}</p>
            <div>
              <a href={ele.link} target="_blank">
                Read More &gt;&gt;&gt;
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 text-right">
          <div className="userimgouter rightmode">
            <CustomImageLoader src={ele.image} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="blogs">
      <div className="bloglogoouter">
        <Link to="#">
          <img
            src="assets/images/bloglogo.png"
            alt="images"
            className="img-fluid"
          />
        </Link>
      </div>
      <div className="mayboxblog">
        <div className="container">
          {blogs?.map((ele: any, i: number) => {
            if (i % 2 !== 0) {
              return leftview(ele, i);
            }
            if (i % 2 === 0) {
              return rightView(ele, i);
            }
          })}
          <div className="row">
            <div className="col-md-12">
              <div className="container__">
                <div
                  className="back"
                  onClick={(e) => {
                    if (page > 1) {
                      setPage(page - 1);
                    }
                  }}>
                  {"<"}
                </div>
                <div className="pages">
                  {numberToArray()?.map((item: any, idx: any) => (
                    <span
                      key={idx}
                      onClick={(e) => setPage(item)}
                      style={{
                        ...(item === page && { backgroundColor: "yellow" }),
                      }}>
                      {item}
                    </span>
                  ))}
                </div>
                <div
                  className="front"
                  onClick={(e) => {
                    if (page < compiledData.length / defaultCount) {
                      setPage(page + 1);
                    }
                  }}>
                  {">"}
                </div>
              </div>
              {/* <Pagination
                totalRecords={paginationCount || 1}
                activePage={nextPage}
                onPageChange={() => {}}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Blogs };

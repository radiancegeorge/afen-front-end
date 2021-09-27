import React, { useState } from "react";
import useSubscribe from "../../../hooks/subscribeMails";
const NewsLetterSection = (props: any) => {
  const [subscriberData, setSubscriberData] = useState({
    email: "",
  });
  const { subscribe, data, error, loading } = useSubscribe();
  const handleSend = () => {
    subscriberData.email.trim() !== "" &&
      subscribe({ data: JSON.stringify(subscriberData) });
  };
  return (
    <section className="news_letter">
      <div className="container">
        <div className="row">
          <div className="news_letter_form">
            <input
              type="email"
              name="text"
              placeholder="YOUR EMAIL"
              onChange={(e) => setSubscriberData({ email: e.target.value })}
            />
            <button onClick={(e) => handleSend()} disabled={data || loading}>
              {!data
                ? !loading
                  ? "SIGN UP FOR OUR NEWS LETTER"
                  : "Please Wait .."
                : "Subscribed"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { NewsLetterSection };

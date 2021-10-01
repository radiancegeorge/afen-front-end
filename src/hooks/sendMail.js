import useAxios from "axios-hooks";

const useSendBulkMail = () => {
  const [{ ...bulkMailData }, sendMail] = useAxios(
    {
      url: "/subscribe/pushBulkMail",
      method: "post",
    },
    { manual: true }
  );

  const [{ ...countData }, getCount] = useAxios({
    url: "/subscribe/count",
    method: "get",
  });
  const pushMail = (data) => {
    sendMail({
      data,
    });
  };

  return {
    pushMail,
    bulkMailData,
    countData,
    getCount,
  };
};

export default useSendBulkMail;

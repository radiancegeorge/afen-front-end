const Modal_ = ({ text, setVisible }) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        background: "rgba(0,0,0,0.5)",
        zIndex: 999,
      }}>
      <div
        className="text"
        style={{
          maxWidth: "300px",
          color: "white",
        }}>
        {text}

        <button className={"btn-rounded"} onClick={(e) => setVisible(false)}>
          Okay
        </button>
      </div>
    </div>
  );
};
export default Modal_;

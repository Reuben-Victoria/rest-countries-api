import "./Loader.css";
export const Loader = () => {
  return (
    <div className={`loader`}>
      <div
        className={`lds-spinner`}
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

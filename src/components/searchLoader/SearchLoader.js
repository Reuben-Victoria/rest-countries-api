import "./SearchLoader.css";
const SearchLoader = () => {
  return (
    <div className='loaderSearch'>
      <div className='lds-ellipsis'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default SearchLoader;

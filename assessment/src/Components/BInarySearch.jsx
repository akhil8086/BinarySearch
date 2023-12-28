
import { useDispatch, useSelector } from 'react-redux';
import { resetSearch, setResultIndex, setSearchTime, selectBinarySearch } from './Redux/binarySearchSlice';
import BinarySearchInput from './BinarySearchInput';

const BinarySearch = () => {
  const dispatch = useDispatch();
  const { inputArray, target, resultIndex, searchTime } = useSelector(selectBinarySearch);

  const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return -1;
  };

  const handleBinarySearch = () => {
    const inputArrayParsed = inputArray.split(',').map(item => parseInt(item.trim()));
    const targetInt = parseInt(target);

    const startTime = performance.now();
    const resultIndex = binarySearch(inputArrayParsed, targetInt);
    const endTime = performance.now();

    dispatch(setResultIndex(resultIndex));
    dispatch(setSearchTime(endTime - startTime));
  };

  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <BinarySearchInput />
      <button onClick={handleBinarySearch} style={{ marginTop: '10px',}}>
        Search
      </button>
      
      <div style={{ marginTop: '20px' }}>
        {resultIndex !== null ? (
          <div>
            <p>Search Time: {searchTime} milliseconds</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
              {inputArray.split(',').map((item, index) => (
                <div
                  key={index}
                  style={{
                    margin: '0 5px',
                    padding: '10px',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    backgroundColor: index === resultIndex ? 'green' : 'inherit',
                    marginBottom: '10px',
                  }}
                >
                  {item.trim()}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p>Binary Search</p>
        )}
      </div>
    </div>
  );
};

export default BinarySearch;






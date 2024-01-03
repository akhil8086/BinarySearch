
import { useDispatch, useSelector } from 'react-redux';
import { setResultIndex, setSearchTime, setIterations, selectBinarySearch } from './Redux/binarySearchSlice';
import BinarySearchInput from './BinarySearchInput';
import BinarySearchVisualization from './BinarySearchVisualization';

const BinarySearch = () => {
  const dispatch = useDispatch();
  const { inputArray, target, resultIndex, searchTime, iterations } = useSelector(selectBinarySearch);

  const binarySearch = async (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    let iterations = 0;

    const startTime = performance.now();

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      dispatch(setResultIndex(mid));
      dispatch(setSearchTime(performance.now() - startTime));
      iterations++;

      await new Promise((resolve) => setTimeout(resolve, 500));

      if (arr[mid] === target) {
        return { index: mid, iterations };
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return { index: -1, iterations };
  };

  const handleBinarySearch = async () => {
    const inputArrayParsed = inputArray.split(',').map((item) => parseInt(item.trim()));
    const targetInt = parseInt(target);

    const startTime = performance.now();

    const { index, iterations } = await binarySearch(inputArrayParsed, targetInt);
    const endTime = performance.now();

    dispatch(setResultIndex(index));
    dispatch(setSearchTime(endTime - startTime));
    dispatch(setIterations(iterations));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <BinarySearchInput />
      <button onClick={handleBinarySearch} style={{ marginTop: '10px',padding:"10px", backgroundColor:"lightgrey", border:"none",borderRadius:"5px" }}>
        Search
      </button>

      <div style={{ marginTop: '20px' }}>
        <BinarySearchVisualization inputArray={inputArray} resultIndex={resultIndex} searchTime={searchTime} iterations={iterations} />
      </div>
    </div>
  );
};

export default BinarySearch;




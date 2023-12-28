
import { useDispatch, useSelector } from 'react-redux';
import { setInputArray, setTarget, selectBinarySearch } from './Redux/binarySearchSlice';

const BinarySearchInput = () => {
  const dispatch = useDispatch();
  const { inputArray, target } = useSelector(selectBinarySearch);

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <label style={{ marginRight: '10px' }}>
        Enter array:
        <input
          type="text"
          value={inputArray}
          onChange={(e) => dispatch(setInputArray(e.target.value))}
          placeholder="array"
          style={{ marginBottom: '10px' }}
        />
      </label>
      <br />
      <label>
        Enter target element:
        <input
          type="text"
          value={target}
          onChange={(e) => dispatch(setTarget(e.target.value))}
          style={{ marginBottom: '10px' }}
        />
      </label>
    </div>
  );
};

export default BinarySearchInput;

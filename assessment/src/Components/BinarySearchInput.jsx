
import { useDispatch, useSelector } from 'react-redux';
import { setInputArray, setTarget, selectBinarySearch } from './Redux/binarySearchSlice';

const BinarySearchInput = () => {
  const dispatch = useDispatch();
  const { inputArray, target } = useSelector(selectBinarySearch);

  return (
    <div style={{ marginTop:"30px" }}>
      <div>
      <label>
        <div style={{marginLeft:"60px", color:"red",marginBottom:"10px"}}>
        Enter Array : 
        </div>
        <textarea
          type="text"
          value={inputArray}
          onChange={(e) => dispatch(setInputArray(e.target.value))}
          placeholder="array"
          style={{ width:"200px", height:"100px",border:"2px solid lightblue" }}
        />
      </label>
      </div>
      <br />
      <div >
      <label>
        <div style={{marginLeft:"30px", color:"red", marginBottom:"10px"}}>
        Enter Target Element:
        </div>
        <input
          type="text"
          value={target}
          onChange={(e) => dispatch(setTarget(e.target.value))}
          style={{ width:"200px" , border:"2px solid lightblue" }}
        />
      </label>
      </div>
    </div>
  );
};

export default BinarySearchInput;





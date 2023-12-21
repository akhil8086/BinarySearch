
import { useState } from 'react';

const BinarySearch = () => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedArray, setSelectedArray] = useState('array');
  const [result, setResult] = useState(null);
  const [searchTime, setSearchTime] = useState(null);

  const arrays = {
    array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
  };

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

  const handleSearch = () => {
    const target = parseInt(searchValue, 10);
    const selectedArr = arrays[selectedArray];

    const startTime = performance.now(); 
    const index = binarySearch(selectedArr, target);
    const endTime = performance.now(); 

    setResult(index);
    setSearchTime(endTime - startTime);
  };

  return (
    <div style={{display:"flex",justifyContent:"center",marginTop:"20px"}}>
    <div style={{display:"flex",flexDirection:"column",border:"1px solid red",backgroundColor:"lightblue"}}>
      <h1 style={{marginLeft:"auto",marginRight:"auto"}}>Binary Search</h1>
      <div style={{marginTop:"10px",padding:"50px",display:"flex",flexDirection:"column"}}>
    <div style={{border:"1px solid"}}>
      <h4>{JSON.stringify(arrays)}</h4>
      </div>
      <input
        type="number"
        value={searchValue}
        style={{borderRadius:"10px",height:"30px"}}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Enter a number to search"
      />
      <button style={{width:"100px", margin:"10px auto", borderRadius:"8px",padding:"5px"}}
       onClick={handleSearch}>Search</button>
      {result !== null && (
        <p>
          {result !== -1
            ? `The number ${arrays[selectedArray][result]} is found at index ${result}.`
            : 'Number not found.'}
        </p>
      )}
      {searchTime !== null && (
        <p>Search time: {searchTime.toFixed(4)} ms</p>
      )}
      </div>
     </div>
    </div>
  );
};

export default BinarySearch;





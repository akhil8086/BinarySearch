
const BinarySearchVisualization = ({ inputArray, resultIndex, searchTime, iterations }) => {
    return (
      <div>
        {resultIndex !== null ? (
          <div>
            {resultIndex !== -1 ? (
              <div>
                <div style={{display:"flex",flexDirection:"column",width:"50%",border:"1px solid black",margin:"auto",alignItems:"center",backgroundColor:"lightgrey"}}>
                <p>Search Time: {searchTime.toFixed(2)} milliseconds</p>
                <p>Iterations: {iterations}</p>
                <p>Search Index: {resultIndex}</p>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center',marginTop:"10px" }}>
                  {inputArray.split(',').map((item, index) => (
                    <div
                      key={index}
                      style={{
                        margin: '0 5px',
                        padding: '10px',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                        backgroundColor: index === resultIndex ? 'rgba(0, 255, 0, 0.5)' : ' ',
                        marginBottom: '10px',
                      }}
                    >
                      {item.trim()}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p>Element not found in the array</p>
            )}
          </div>
        ) : (
          <p>Binary Search</p>
        )}
      </div>
    );
  };
  
  export default BinarySearchVisualization;
  



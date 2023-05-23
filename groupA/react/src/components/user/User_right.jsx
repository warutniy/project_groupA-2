import React from "react";
import "../user/User_main.css";

// import chart element
import LineChart from "./LineChart";
// import BarChart from "./BarChart";

const User_right = function () {
  return (
    <div className='grid-right' >
      {/* <BarChart /> */}
      <LineChart />
      {/* <p>Test .</p> */}
    </div>
  );
};

export default User_right;

// import React from "react";
// import "../user/User_main.css";

// const User_right = function () {
//   return (
//     <div className='grid-right' >
//       <p>Put Graph Here!</p>
//     </div>
//   );
// };

// export default User_right;
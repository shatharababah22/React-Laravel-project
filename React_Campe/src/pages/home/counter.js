// import React, { useState, useEffect } from 'react';
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// function CounterComponent() {
//   const [packagesCount, setPackagesCount] = useState(0);
//   const [locationCount, setLocationCount] = useState(0);
//   const [showroomCount, setShowroomCount] = useState(0);
//   const [professionalCount, setProfessionalCount] = useState(0);

//   const animateCounters = () => {
//     const targetpackagesCount = 1500;
//     const targetLocationCount = 5;
//     const targetShowroomCount = 1000;
//     const targetProfessionalCount = 4000;

//     let packagesCount = 8;
//     let locationCounter = 0;
//     let showroomCounter = 0;
//     let professionalCounter = 0;

//     const interval = setInterval(() => {
//       if (packagesCount < targetpackagesCount) {
//         packagesCount += 50;
//         setPackagesCount(packagesCount);
//       }
//       if (locationCounter < targetLocationCount) {
//         locationCounter += 50;
//         setLocationCount(locationCounter);
//       }
//       if (showroomCounter < targetShowroomCount) {
//         showroomCounter += 30;
//         setShowroomCount(showroomCounter);
//       }
//       if (professionalCounter < targetProfessionalCount) {
//         professionalCounter += 100;
//         setProfessionalCount(professionalCounter);
//       }
//     }, 50);

//     if (
//       packagesCount >= targetpackagesCount &&
//       locationCounter >= targetLocationCount &&
//       showroomCounter >= targetShowroomCount &&
//       professionalCounter >= targetProfessionalCount
//     ) {
//       clearInterval(interval);
//     }
//   };  const navigate = useNavigate();
//   const [category, setCategory] = useState([]);

//   const handleButtonClick = (id) => {
//     navigate(`/packages/${id}`);
//   };

//   useEffect(() => {
//     axios.get("http://127.0.0.1:8000/api/categories").then((response) => {
//       setCategory(response.data);
//     });
//   }, []);

//   useEffect(() => {
//     animateCounters();
//   }, []);

//   return (
//     <div className="icon-block-center icon-center-v2 bg-primary">
//       <div className="container text-center space-1">
//         <div className="row">
//           <div className="col-md-3">
//             <i className="flaticon-node text-white font-size-80 mb-3"></i>
//             <h5 className="font-size-30 text-white font-weight-bold mb-2 js-counter">
//               {packagesCount}

//                {[category.packages.length]}
//             </h5>
//             <p className="text-white px-xl-2 text-lh-inherit px-uw-3">
//               Number of packages:
//             </p>
//           </div>

//           {/* <div className="col-md-3">
//             <i className="flaticon-cardinal-points text-white font-size-80 mb-3"></i>
//             <h5 className="font-size-30 text-white font-weight-bold mb-2 js-counter">
//               {locationCount}
//             </h5>
//             <p className="text-white px-xl-2 text-lh-inherit px-uw-3">
//             The count of places providing these services
//             </p>
//           </div> */}
//           {/*
//           <div className="col-md-3">
//             <i className="flaticon-anchor text-white font-size-80 mb-3"></i>
//             <h5 className="font-size-30 text-white font-weight-bold mb-2 js-counter">
//               {showroomCount}
//             </h5>
//             <p className="text-white px-xl-2 text-lh-inherit px-uw-3">
//             Number of yachats
//             </p>
//           </div> */}

//           {/* <div className="col-md-3">
//             <i className="flaticon-star text-white font-size-80 mb-3"></i>
//             <h5 className="font-size-30 text-white font-weight-bold mb-2 js-counter">
//               {professionalCount}
//             </h5>
//             <p className="text-white px-xl-2 text-lh-inherit px-uw-3">
//             Customer satisfied
//             </p>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// }

// // export default CounterComponent;import React, { useState, useEffect } from 'react';
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import React, { useState, useEffect } from 'react';

// function CounterComponent() {
//   const [packagesCount, setPackagesCount] = useState(0);
//   const navigate = useNavigate();
//   const [category, setCategory] = useState([]);

//   const handleButtonClick = (id) => {
//     navigate(`/packages/${id}`);
//   };

//   useEffect(() => {
//     axios.get("http://127.0.0.1:8000/api/categories").then((response) => {
//       // Assuming the response structure is an array of categories, each containing packages
//       // You might need to adjust this according to your actual response structure
//       setCategory(response.data);

//       // Calculate the total number of packages across all categories
//       const totalPackagesCount = response.data.reduce(
//         (count, category) => count + category.packages.length,
//         0
//       );
//       setPackagesCount(totalPackagesCount);
//     });
//   }, []);

//   return (
//     <div className="icon-block-center icon-center-v2 bg-primary">
//       <div className="container text-center space-1">
//         <div className="row">
//           <div className="col-md-3">
//             <i className="flaticon-node text-white font-size-80 mb-3"></i>
//             <h5 className="font-size-30 text-white font-weight-bold mb-2 js-counter">
//               {packagesCount}
//             </h5>
//             <p className="text-white px-xl-2 text-lh-inherit px-uw-3">
//               Number of packages
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CounterComponent;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CounterComponent() {
  const [packagesCount, setPackagesCount] = useState(0);
  const [usersCount, setUsersCount] = useState(0);
  const [productsCount, setProductsCount] = useState(0);
  const [reviweCount, setReviweCount] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/reviews").then((response) => {
      setReviweCount(response.data.length);
    });
    axios.get("http://127.0.0.1:8000/api/categories").then((response) => {
      const totalPackagesCount = response.data.reduce(
        (count, category) => count + category.packages.length,
        0
      );
      setPackagesCount(totalPackagesCount);
    });

    axios.get("http://127.0.0.1:8000/api/products").then((response) => {
      setUsersCount(response.data.length);
    });

    axios.get("http://127.0.0.1:8000/api/users").then((response) => {
      setProductsCount(response.data.length);
    });
  }, []);

  return (
    <div className="icon-block-center icon-center-v2 bg-primary">
      <div className="container text-center space-1">
        <div className="row">
          <div className="col-md-3">
            <i class="fi fi-rr-box-open text-white font-size-80 mb-3"></i>
            <h5 className="font-size-30 text-white font-weight-bold mb-2 js-counter">
              {packagesCount}
            </h5>
            <p className="text-white px-x2-2 text-lh-inherit px-uw-3">
              Number of packages
            </p>
          </div>

          <div className="col-md-3">
            <i class="fi fi-rr-user text-white font-size-80 mb-3"></i>
            <h5 className="font-size-30 text-white font-weight-bold mb-2 js-counter">
              {usersCount}
            </h5>
            <p className="text-white px-xl-2 text-lh-inherit px-uw-3">
              Number of Users
            </p>
          </div>

          <div className="col-md-3">
            <i class="fi fi-rr-shopping-cart-add text-white font-size-80 mb-3"></i>
            <h5 className="font-size-30 text-white font-weight-bold mb-2 js-counter">
              {productsCount}
            </h5>
            <p className="text-white px-xl-2 text-lh-inherit px-uw-3">
              Our Products
            </p>
          </div>

          <div className="col-md-3">
            <i class="fi fi-rr-heart  text-white font-size-80 mb-3"></i>
            <h5 className="font-size-30 text-white font-weight-bold mb-2 js-counter">
              {reviweCount}
            </h5>
            <p className="text-white px-xl-2 text-lh-inherit px-uw-3">
              Happy Customer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CounterComponent;

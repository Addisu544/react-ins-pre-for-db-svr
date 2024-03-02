// import React, { useState } from "react";
// import axios from "axios";

// const App = () => {
//   const [formData, setFormData] = useState({
//     id: "",
//     title: "",
//     category: "",
//     price: "",
//     img: "",
//     desc: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     axios
//       .post("http://localhost:2000/", formData)
//       .then((response) => {
//         console.log("Data inserted successfully!");
//       })
//       .catch((error) => {
//         console.error("Error inserting data:", error);
//       });
//   };

//   return (
//     <div>
//       <h1>Insert Data into "alt" Table</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           ID:
//           <input
//             type="number"
//             name="id"
//             value={formData.id}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           Title:
//           <input
//             type="text"
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           Category:
//           <input
//             type="text"
//             name="category"
//             value={formData.category}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           Price:
//           <input
//             type="number"
//             name="price"
//             value={formData.price}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           Image URL:
//           <input
//             type="text"
//             name="img"
//             value={formData.img}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           Description:
//           <textarea name="desc" value={formData.desc} onChange={handleChange} />
//         </label>
//         <br />
//         <button type="submit">Insert Data</button>
//       </form>
//     </div>
//   );
// };

// export default App;
//PERFECT CODE TO INSERT text FROM CLIENT>>>>>>>>><<<<<<<<<<<<>>>>>>>>>>>><<<<<<<<<<<>>>>>>>>>>>><<<<<<<<<>
// import React, { useState } from "react";
// import axios from "axios";

// const App = () => {
//   const [formData, setFormData] = useState({
//     id: "",
//     title: "",
//     category: "",
//     price: "",
//     img: null,
//     desc: "",
//   });

//   const handleChange = (e) => {
//     if (e.target.name === "img") {
//       setFormData({ ...formData, img: e.target.files[0] });
//     } else {
//       setFormData({ ...formData, [e.target.name]: e.target.value });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const data = new FormData();
//     data.append("id", formData.id);
//     data.append("title", formData.title);
//     data.append("category", formData.category);
//     data.append("price", formData.price);
//     data.append("img", formData.img);
//     data.append("desc", formData.desc);

//     axios
//       .post("http://localhost:2000/", data)
//       .then((response) => {
//         console.log("Data inserted successfully!");
//       })
//       .catch((error) => {
//         console.error("Error inserting data:", error);
//       });
//   };
//   return (
//     <div>
//       <h1>Insert Data into "alt" Table</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           ID:
//           <input
//             type="number"
//             name="id"
//             value={formData.id}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           Title:
//           <input
//             type="text"
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           Category:
//           <input
//             type="text"
//             name="category"
//             value={formData.category}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           Price:
//           <input
//             type="number"
//             name="price"
//             value={formData.price}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         {/* <label>
//           Image:
//           <input
//             type="file"
//             name="img"
//             accept="image/*"
//             onChange={handleChange}
//           />
//         </label> */}
//         <label>
//           Image:
//           <input
//             type="file"
//             name="img"
//             accept="image/*"
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           Description:
//           <textarea name="desc" value={formData.desc} onChange={handleChange} />
//         </label>
//         <br />
//         <button type="submit">Insert Data</button>
//       </form>
//     </div>
//   );
// };

// export default App;
// PERFECT CODE TO INSERT  ALL DATAS INCLUDING IMAGE UP text FROM CLIENT>>>>>>>>><<<<<<<<<<<<>>>>>>>>>>>><<<<<<<<<<<>>>>>>>>>>>><<<<<<<<<>

import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:2000/")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div>
      <h1>Data from "alt" Table</h1>
      {data.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>Category: {item.category}</p>
          <p>Price: {item.price}</p>
          <p>Description: {item.desc}</p>
          <img
            src={`http://localhost:2000/${item.img}`}
            alt={`http://localhost:2000/${item.img}`}
          />
        </div>
      ))}
    </div>
  );
};

export default App;
//ULTIMATE DISPLAY ALL DATA AND IMAGE UPP

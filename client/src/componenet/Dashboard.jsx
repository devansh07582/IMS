import React, { useState, useEffect } from "react";
import axios from "axios";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableVirtuoso } from "react-virtuoso";

const columns = [
  {
    width: 200,
    label: "name",
    dataKey: "name",
  },
  {
    width: 120,
    label: "phone",
    dataKey: "phoneNumber",
    numeric: true,
  },
  {
    width: 120,
    label: "emailaddress",
    dataKey: "emailaddress",
  },
  {
    width: 120,
    label: "city",
    dataKey: "city",
  },
  {
    width: 120,
    label: "interest",
    dataKey: "interest",
  },
  {
    width: 120,
    label: "Query",
    dataKey: "query",
  },
  {
    width: 120,
    label: "Status",
    dataKey: "Status",
  },
];

const VirtuosoTableComponents = {
  Scroller: React.forwardRef((props, ref) => (
    /* eslint-disable react/jsx-props-no-spreading */
    <TableContainer component={Paper} {...props} ref={ref} />

  )),
  Table: (props) => (
    <Table
    /* eslint-disable react/jsx-props-no-spreading */
      {...props}
      sx={{ borderCollapse: "separate", tableLayout: "fixed" }}w
    />
  ),
  TableHead,
  /* eslint-disable react/jsx-props-no-spreading */

  TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,

  TableBody: React.forwardRef((props, ref) => (
    /* eslint-disable react/jsx-props-no-spreading */
    <TableBody {...props} ref={ref} />
  )),
};

function fixedHeaderContent() {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          align={column.numeric || false ? "right" : "left"}
          style={{ width: column.width }}
          sx={{
            backgroundColor: "background.paper",
          }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}


function ChangeStatus(){
  return(
    <div>
    Status
    </div>
  )
}

export default function Dashboard() {
  const [data, setData] = useState([]);

  const sample = [
    ["Frozen yoghurt", 159, 6.0, 24, 4.0],
    ["Ice cream sandwich", 237, 9.0, 37, 4.3],
    ["Eclair", 262, 16.0, 24, 6.0],
    ["Cupcake", 305, 3.7, 67, 4.3],
    ["Gingerbread", 356, 16.0, 49, 3.9],
  ];

  function createData(name, phonenumber, emailaddress, city, interest, query) {
    return {
      name,
      phonenumber,
      emailaddress,
      city,
      interest,
      query,
    };
  }


const rows = Array.from({ length: 200 }, (_, index) => {
  const randomSelection = sample[Math.floor(Math.random() * sample.length)];
  return createData(index, ...randomSelection);
});

  function rowContent(_index, row) {
    return (
      <>
        {columns.map((column) => (
          <TableCell
            key={column.dataKey}
            align={column.numeric || false ? "right" : "left"}
          >
            {row[column.dataKey]}
          </TableCell>
        ))}
      </>
    );
  }

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:8080/api/v1/enquires");
      setData(response.data.enquiry);
      console.log(response);
    }
    fetchData();
  }, []);

  console.log("data", data);

  return (
    <Paper style={{ height: 700, width: "100%" }}>
      <TableVirtuoso
        data={rows}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
  );
}








// function Dashboard() {

//   const [data, setData] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const response = await axios.get('http://localhost:8080/api/v1/enquires');
//       setData(response.data.enquiry);
//       console.log(response);
//     }
//     fetchData();
//   });

//   // console.log("data", data)

//   return (
//     <div>
//       <h1>Data from MongoDB</h1>
//       <ul>
//         {data.map((item, index) => (
//           <li key={index}>
//             <p>id:{item._id}</p>
//             <p>Name: {item.name}</p>
//             <p>Email: {item.emailaddress}</p>
//             <p>Phone Number: {item.phonenumber}</p>
//             <p>City: {item.city}</p>
//             <p>State: {item.state}</p>
//             <p>Pincode: {item.pincode}</p>
//             <p>Highest Qualification: {item.highest}</p>
//             <p>Interest: {item.interest}</p>
//             <p>Job Experience: {item.priorcomputerknowledge}</p>
//             <p>query : {item.query}</p>
//             <p>dated: {item.dateofenquiry}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Dashboard;

// import React, { Component } from 'react';
// import Getdata from './Getdata';

// const data = [

// ];

// <Table data={data} />

// class Table extends Component {
//   render() {
//     const { data } = this.props;
//     return (
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Phone Number</th>
//             <th>City</th>
//             <th>State</th>
//             <th>Pincode</th>
//             <th>Highest Qualification</th>
//             <th>Interest</th>
//             <th>Job Experience</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((row, index) => (
//             <tr key={index}>
//               <td>{row.name}</td>
//               <td>{row.email}</td>
//               <td>{row.phoneNumber}</td>
//               <td>{row.city}</td>
//               <td>{row.state}</td>
//               <td>{row.pincode}</td>
//               <td>{row.highestQualification}</td>
//               <td>{row.interest}</td>
//               <td>{row.jobExperience}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     );
//   }
// }

// export default Table;

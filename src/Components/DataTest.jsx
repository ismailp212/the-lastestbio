// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function DataTest() {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = async () => {
//         try {
//             const response = await axios.get('http://localhost:8000/api/data');
//             setData(response.data);
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     return (
//         <div>
//             <h1>Data List</h1>
//             <ul>
//                 {Array.isArray(data) &&
//                     data.map((item) => (
//                         <li key={item.id}>
//                             <strong>ID:</strong> {item.id}, <strong>Name:</strong> {item.name},{' '}
//                             <strong>Email:</strong> {item.email}
//                         </li>
//                     ))}
//             </ul>
//         </div>
//     );
// }

// export default DataTest;




import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataTest() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/data');
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h1>Data List</h1>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>
                        <strong>ID:</strong> {item.id}, <strong>Name:</strong> {item.name},{' '}
                        <strong>Email:</strong> {item.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DataTest;

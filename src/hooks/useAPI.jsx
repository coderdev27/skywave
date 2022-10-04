// import { useEffect, useState } from 'react';


// const sdk = require('api')('@blockspan/v1.0#19gc4dl8m8ygt6');

// sdk.auth('x2TbCYG4LrL3E2mArLZX0hfIvn591T0E	');
// // sdk.getAllNFTs({chain: 'eth-main', page_size: '25'})
// //   .then(res => console.log(res))
// //   .catch(err => console.error(err));

// export const useAPI = (query) => {
// 	const [data, setData] = useState(null);
// 	const [loading, setLoading] = useState(true);
// 	const [error, setError] = useState(null);

// 	useEffect(() => {
// 		const fetchData = async () => {
// 			sdk.getAllNFTs({chain: 'eth-main', page_size: '25'})
// 			.then(res => setData(res))
// 			.catch(err => setError(err));

// 		};
// 		fetchData();
// 	}, [query]);
// 	return { data, loading, error, setData };
// };

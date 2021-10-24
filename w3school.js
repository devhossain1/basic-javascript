

// const makeRequest =(method,url,data)=>{

//  return new Promise((resolve,reject)=>{
//   const xhr = new XMLHttpRequest();
//   xhr.open(method,url);
//   xhr.setRequestHeader('content-type', 'application/json');
//   xhr.onload=()=>{
//     let data = xhr.response;
//     console.log(xhr.responseURL);
//     console.log(JSON.parse(data));
//   }

//   xhr.onerror=()=>{
//     console.log("error is here");
//   }

//   xhr.send(JSON.stringify(data)); 
//  })

// }

//  const getData = ()=>{
//    makeRequest('GET','https://jsonplaceholder.typicode.com/posts')
//    .then((res)=>console.log(res))
//  }
//  getData();

//  const sendData = ()=>{
//   makeRequest('POST','https://jsonplaceholder.typicode.com/posts',{
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   });
// }

// const updateData = ()=>{
//   makeRequest('PUT','https://jsonplaceholder.typicode.com/posts/1',{
//     id: 1,
//     title: 'foona',
//     body: 'barbique',
//     userId: 1,
//   });
// }
// const updateSingleData = ()=>{
//   makeRequest('PATCH','https://jsonplaceholder.typicode.com/posts/1',{
    
//     title: 'This is changed',
  
//   });
// }
// updateSingleData();
// const deleteData = ()=>{
//   makeRequest('DELETE','https://jsonplaceholder.typicode.com/posts');
// }
//  deleteData()

//============ fetch api calling==================
// fetch('https://jsonplaceholder.typicode.com/posts/1',{
//   method: "DELETE",
//   // headers: {
//   //   'Content-type': 'application/json; charset=UTF-8',
//   // },
//   // body:JSON.stringify({
    
//   //   title: 'fooma the great',
//   // }),
// })
// .then((res)=>{
//   if(!res.ok){
//     const message = `E rror : ${res.status}`;
//     throw new Error(message);
//   }
//   return res.json();
// })
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err));

//============async await api calling==================
const makeRequest = async(url,config) =>{
  const res = await fetch(url,config);
  if(!res.ok){
    const message = `Error : ${res.status}`;
    throw new Error(message);
  }
  const data = await res.json();
  return data;
};

// const updateData = () =>{
//   makeRequest('https://jsonplaceholder.typicode.com/posts/1',{
//     method: 'PATCH',
//   body: JSON.stringify({
//     title: 'fooma the great',
  
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
//   })
//   .then((res) =>console.log(res))
//   .catch((err)=>console.log(err));
// };
// updateData();

// const updateData = () =>{
//   makeRequest('https://jsonplaceholder.typicode.com/posts/1',{
//     method: 'PUT',
//   body: JSON.stringify({
//     id:1,
//     title: 'fooma',
//     body: 'barma',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
//   })
//   .then((res) =>console.log(res))
//   .catch((err)=>console.log(err));
// };
// updateData();

const sendData = () =>{
  makeRequest('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  })
  .then((res) =>console.log(res))
  .catch((err)=>console.log(err));

};
sendData();

// const getData = () =>{
//   makeRequest('https://jsonplaceholder.typicode.com/posts')
//   .then((res) =>console.log(res))
//   .catch((err)=>console.log(err));

// };
// getData();


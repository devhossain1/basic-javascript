console.log("welcome");
//how to create promise - pending , resolve, reject

// const promise1 = new Promise((resolve, reject) =>{
//   let completedPromise = true;
//   if(completedPromise){
//     resolve('completed promise 1');
//   }else{
//     reject(new Error('not completed promise 1'));
//   }
// });

// const promise2 = new Promise((resolve, reject) =>{
//   resolve("completed promise 2");
// });
// //console.log(promise1);
// // promise1.then(res =>{
// //   console.log(res);
// // });
// // promise1.catch(err =>{
// //   console.log(err.message);
// // })

// // promise2.then(res => console.log(res));
// Promise.all([promise1, promise2]).then(([res1,res2]) => console.log(res1,res2));
//const promise1 = new Promise((resolve, reject) =>{
//   setTimeout(()=>{
//     resolve("completed promise 1");
//   },2000)
// });

// const promise2 = new Promise((resolve, reject) =>{
//    setTimeout(()=>{
//      resolve("completed promise 2");
//    },1000)
//  });

//  Promise.race([promise1, promise2]).then((res) => console.log(res));

const taskOne = ()=>{
  return new Promise((resolve,reject)=>{
    resolve('task 1 is completed');
  });
}
const taskTwo = ()=>{
  return new Promise((resolve,reject)=>{
    resolve('task 2 is  completed');
  });
}
const taskThree = ()=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      reject('task 3 is not completed');
    },2000)
    
  });
}
const taskFour = ()=>{
  return new Promise((resolve,reject)=>{
    resolve('task 4 is completed');
  });
}

// taskOne()
// .then((res)=>console.log(res))
// .then(taskTwo)
// .then((res)=>console.log(res))
// .then(taskThree)
// .then((res)=>console.log(res))
// .then(taskFour)
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err));
const callAllTasks=async()=>{
  try{
    const t1 = await taskOne();
  console.log(t1);
  const t2 = await taskTwo();
  console.log(t2);
  const t3 = await taskThree();
  console.log(t3);
  const t4 = await taskFour();
  console.log(t4);
  }catch(error){
    console.log(error);
  }
}
callAllTasks();

console.log("ends");
// const getStudents = function (resolve, reject) {
//     setTimeout(() => {
//         resolve([{name: "Luc"}, {name: "charles"}])
//     }, 2000);
// }
//
// const getCourses = function (resolve, reject) {
//     setTimeout(() => {
//         resolve([{name: "JS"}, {name: "PHP"}])
//     }, 2000);
// }
//
// const timer = function (resolve, reject) {
//     setTimeout(() => {
//         resolve('timeout')
//     }, 7000);
// }
//
//
// Promise.race([
//     Promise.all([new Promise(getStudents), new Promise(getCourses)])
//         .then(result => {
//             const students = result[0];
//             const courses = result[1];
//
//             console.log('mapped');
//         })
//     , new Promise(timer)
// ]).then(result)
// =>
// {
//     console.log(result);
// }
// )
// ;
 // let hello = () => {
//     console.log('Hello ! How are you doing, today ?')
// }
// set what is exported from this file for another file to require it and know what to import
// module.exports = {
//     hello: hello
// }

// exports object anonyme with two methods hello and goodbye
exports.hello = () => {
    console.log('Hello');
}
exports.goodBye = () => {
    console.log('Good Bye');
}
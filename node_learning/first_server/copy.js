let fs = require('fs')
// // This is a video, so no encoding, just the buffer
// fs.readFile('MHTigrex.mp4', (error, data) => {
//     // from here I have the callback, which means the file is read, and i got an error or not
//     if (error) throw error
//     // write in the file the data and then callback
//     fs.writeFile('copy.mp4', data, (err) => {
//         if (err) throw err
//         console.log('File has been copied.');
//     })
// })

let file = 'MHTigrex.mp4'
// fs.stat() returns stats, that is informations about the file
fs.stat(file, (err, stat) => {
    let total = stat.size
    let progress = 0
    // fs.createReadStream('path'[,options]) reads file in a flow instead of all in once
    let read = fs.createReadStream(file)
    let write = fs.createWriteStream('copy.mp4')
    let write2 = fs.createWriteStream('copy2.mp4')
    // read listens event receive data and runs a function with bumper (no string) chunk (part of the file) parameter
    read.on('data', (chunk) => {   
        progress += chunk.length
        let progressRoundedPercentage = ((progress/total)*100).toFixed(1)
        console.log(`I did read ${chunk.length} bits and now file reading is at ${progressRoundedPercentage} %.`);
    })
    // pipe connects read with write to set read stream along write stream  
    read.pipe(write)
    write.on('finish', () => {
        console.log('File entirely copied.');
        
    })
})
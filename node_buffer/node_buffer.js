// const buff = new Buffer.from("ManhQuyen")
// console.log(buff.toString('utf8',2,5))
const buf = Buffer.alloc(11, 'aGVsbG8gd29ybGQ=', 'base64');
console.log(buf.toString())
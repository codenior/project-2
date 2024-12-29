let mysql = require('mysql');

let koneksi = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '',
    database: 'db-project-2',
});

koneksi.connect((error) => {
    if(error){
        console.log("gagal Terkoneksi")
    }else{
        console.log("Berhasil terkoneksi")
    }
})


module.exports = koneksi
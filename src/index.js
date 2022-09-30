const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const { db } = require('./model/dbConnection');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/readData', (req, res) => {
    const sqlQuery = "SELECT * FROM `tb_siswa`";
  
    db.query(sqlQuery, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        console.log(result);
      }
    });
  });

  // create
app.post('/api/createData', (req, res) => {
    const nama = req.body.nama;
    const umur = req.body.umur;
    const alamat = req.body.alamat;
    const sqlQuery = "INSERT INTO `tb_siswa` (`nama`, `umur`, `alamat`) VALUES (?, ?, ?)";
    db.query(sqlQuery, [nama, umur, alamat], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        console.log(result);
      }
    });
  });

  // update
app.put('/api/updateData/:nis', (req, res) => {
  const id = req.params.nis;
  const nama = req.body.nama;
  const umur = req.body.umur;
  const alamat = req.body.alamat;

  const sqlQuery = "UPDATE `tb_siswa` SET `nama` = ?, `umur` = ?, `alamat` = ? WHERE `tb_siswa`.`nis` = ?";
  db.query(sqlQuery, [nama, umur, alamat, id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});

app.put('/api/updateName/:nis', (req, res) => {
  const id = req.params.nis;
  const nama = req.body.nama;

  const sqlQuery = "UPDATE `tb_siswa` SET `nama` = ? WHERE `tb_siswa`.`nis` = ?";
  db.query(sqlQuery, [nama, id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});

app.put('/api/updateUmur/:nis', (req, res) => {
  const id = req.params.nis;
  const umur = req.body.umur;

  const sqlQuery = "UPDATE `tb_siswa` SET `umur` = ? WHERE `tb_siswa`.`nis` = ?";
  db.query(sqlQuery, [umur, id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});

app.put('/api/updateAlamat/:nis', (req, res) => {
  const id = req.params.nis;
  const alamat = req.body.alamat;

  const sqlQuery = "UPDATE `tb_siswa` SET `alamat` = ? WHERE `tb_siswa`.`nis` = ?";
  db.query(sqlQuery, [alamat, id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});

// delete
app.delete('/api/deleteData/:nis', (req, res) => {
  const id = req.params.nis;

  const sqlQuery = "DELETE FROM `tb_siswa` WHERE `tb_siswa`.`nis` = ?";

  db.query(sqlQuery, id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});

app.listen(3001, () => {
    console.log('server berhasil berjalan pada port 3001!');
  });
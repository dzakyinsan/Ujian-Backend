const { mysqldb } = require("./../connection");
const fs = require("fs");

module.exports = {
  getUsers: (req, res) => {
    mysqldb.query(`select * from movies`, (err, result) => {
      if (err) res.status(500).send(err);
      res.status(200).send(result);
    });
  },
  updateUsers:(req,res)=>{
    const {nama,tahun,description} = req.body
    let data={
        nama,
        tahun,
        description
    }
    const userId = req.params.id
    var sql = `Update movies set ? where id = ${userId};`
    mysqldb.query(sql,data,(err,result)=>{
        if (err) res.status(500).send(err);
        res.status(200).send(result)
    }) 
  },
  postUsers:(req,res)=>{
    const {nama,tahun,description} = req.body
    let data={
        nama,
        tahun,
        description
    }
    var sql = 'INSERT INTO movies SET ?';
    mysqldb.query(sql, data, (err, result) => {
        if (err) res.status(500).send(err);
        res.status(200).send(result)
    })
  },
  deleteUsers:(req,res)=>{
    let sql=`delete from movies where id=${req.params.id}`
    mysqldb.query(sql,(err,result)=>{
        if (err) res.status(500).send(err)
        res.status(200).send(result)

    })
  }
};

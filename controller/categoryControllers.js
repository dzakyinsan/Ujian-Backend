const { mysqldb } = require("./../connection");
const fs = require("fs");

module.exports = {
  getUsers: (req, res) => {
    mysqldb.query(`select * from categories`, (err, result) => {
      if (err) res.status(500).send(err);
      res.status(200).send(result);
    });
  },
  updateUsers:(req,res)=>{
    const {nama} = req.body
    let data={
        nama
    }
    const userId = req.params.id
    var sql = `Update categories set ? where id = ${userId};`
    mysqldb.query(sql,data,(err,result)=>{
        if (err) res.status(500).send(err);
        res.status(200).send(result)
    }) 
  },
  postUsers:(req,res)=>{
    const {nama} = req.body
    let data={
        nama
    }
    var sql = 'INSERT INTO categories SET ?';
    mysqldb.query(sql, data, (err, result) => {
        if (err) res.status(500).send(err);
        res.status(200).send(result)
    })
  },
  deleteUsers:(req,res)=>{
    let sql=`delete from categories where id=${req.params.id}`
    mysqldb.query(sql,(err,result)=>{
        if (err) res.status(500).send(err)
        res.status(200).send(result)

    })
  }
};

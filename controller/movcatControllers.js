const { mysqldb } = require("./../connection");
const fs = require("fs");

module.exports = {
  getUsers: (req, res) => {
    mysqldb.query(`select m.nama as namaMovie,c.nama as namaCategory from movcat mc
    join movies m on m.id=mc.idmovie
    join categories c on c.id=mc.idcategory
    ;`, (err, result) => {
      if (err) res.status(500).send(err);
      res.status(200).send(result);
    });
  },
  postUsers:(req,res)=>{
    const {idcategory,idmovie} = req.body
    let data={
        idcategory,
        idmovie
    }
    var sql = 'INSERT INTO movcat SET ?';
    mysqldb.query(sql, data, (err, result) => {
        if (err) res.status(500).send(err);
        res.status(200).send(result)
    })
  },
  deleteUsers:(req,res)=>{
    let sql=`delete from movcat where id=${req.params.id}`
    mysqldb.query(sql,(err,result)=>{
        if (err) res.status(500).send(err)
        res.status(200).send(result)

    })
  }
};

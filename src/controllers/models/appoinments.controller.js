class appoinment {
    constructor(pool) {
        this.pool = pool;
    }
    getAppoinments = async(req, res) => {
        const response = await this.pool.query('SELECT * FROM citas');
        res.status(200).json(response.rows);
    }

    insertAppoinment = async(req, res) => {
        const { idCliente, idTrabajo } = req.body;
        const response = await this.pool.query('insert into citas(idcliente, idtrabajo) values ($1,$2)', [idCliente, idTrabajo]);
        console.log(response);
        res.json({
            message: 'appoinment added succesfully',
            body: {
                idCliente,
                idTrabajo
            }
        })
    }
}

module.exports = appoinment;
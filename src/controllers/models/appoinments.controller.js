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

    deleteAppoinment = async(req, res) => {
        const id = req.params.id;
        await this.pool.query('delete from agenda_citas where idcita = $1', [id]);
        const response = await this.pool.query('delete from citas where id = $1', [id]);
        console.log(response);
        res.json(`Appoinment ${id} deleted succesfully`)
    }
}

module.exports = appoinment;
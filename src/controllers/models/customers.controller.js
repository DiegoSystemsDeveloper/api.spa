class customer {
    constructor(pool) {
        this.pool = pool;
    }
    getCustomers = async(req, res) => {
        const response = await this.pool.query('SELECT * FROM clientes');
        res.status(200).json(response.rows);
    }
    getBestCustomer = async(req, res) => {
        const response = await this.pool.query(
            "select cliente, count(cliente) as frecuencia from(" +
            "select c.nombre as cliente from clientes as c right join " +
            "citas as ci on ci.idcliente = c.id) as tabla group by cliente " +
            "order by frecuencia desc limit 1"
        );
        res.status(200).json(response.rows);
    }
}

module.exports = customer;
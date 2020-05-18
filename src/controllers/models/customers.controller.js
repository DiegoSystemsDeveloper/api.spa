class customer {
    constructor(pool) {
        this.pool = pool;
    }
    getCustomers = async(req, res) => {
        const response = await this.pool.query('SELECT * FROM clientes');
        res.status(200).json(response.rows);
    }
}

module.exports = customer;
class product {
    constructor(pool) {
        this.pool = pool
    }
    getProducts = async(req, res) => {
        const response = await this.pool.query('SELECT * FROM productos');
        res.status(200).json(response.rows);
    }
}

module.exports = product;
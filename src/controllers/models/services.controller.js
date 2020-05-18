class service {
    constructor(pool) {
        this.pool = pool
    }

    getServices = async(req, res) => {
        const response = await this.pool.query('SELECT * FROM trabajos');
        res.status(200).json(response.rows);
    }
}

module.exports = service;
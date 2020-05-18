class manicurist {
    constructor(pool) {
        this.pool = pool;
    }

    getManicurists = async(req, res) => {
        const response = await this.pool.query("SELECT * FROM manicurista");
        res.status(200).json(response.rows);
    };
    getManicuristCalendar = async(req, res) => {
        const id = req.params.id;
        const response = await this.pool.query(
            "select m.nombre, m.apellido, a.fechainicio, a.fechafinal, a.horainicio, a.horafinal, ac.idcita, ac.dia, ac.hora as horadecita from agenda as a " +
            "join manicurista as m on m.id = a.idmanicurista join agenda_citas as ac on a.id = ac.idagenda where m.id = $1", [id]
        );
        res.status(200).json(response.rows)
    };
}

module.exports = manicurist;
app.get('/movies', async (req, res) => {
    const movies = await Movie.findAll({
        include: [Genre, Actor, Director]
    });
    res.json(movies);
 });
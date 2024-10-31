app.post('/movies/:id/directors', async (req, res) => {
    const movie = await Movie.findByPk(req.params.id);
    if (!movie) return res.status(404).json({ error: 'Movie not found' });

    await movie.setDirectors(req.body.directorIds);
    const directors = await movie.getDirectors();
    res.json(directors);
});

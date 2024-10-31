app.post('/movies/:id/genres', async (req, res) => {
    const movie = await Movie.findByPk(req.params.id);
    if (!movie) return res.status(404).json({ error: 'Movie not found' });

    await movie.setGenres(req.body.genreIds);
    const genres = await movie.getGenres();
    res.json(genres);
});

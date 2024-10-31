app.post('/movies/:id/actors', async (req, res) => {
    const movie = await Movie.findByPk(req.params.id);
    if (!movie) return res.status(404).json({ error: 'Movie not found' });

    await movie.setActors(req.body.actorIds);
    const actors = await movie.getActors();
    res.json(actors);
});

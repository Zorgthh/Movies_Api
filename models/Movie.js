const Movie = sequelize.define('Movie', {
    name: Sequelize.STRING,
    image: Sequelize.STRING,
    synopsis: Sequelize.TEXT,
    releaseYear: Sequelize.INTEGER
});

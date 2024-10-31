const Director = sequelize.define('Director', {
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    nationality: Sequelize.STRING,
    image: Sequelize.STRING,
    birthday: Sequelize.DATE
});

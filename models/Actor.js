const Actor = sequelize.define('Actor', {
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    nationality: Sequelize.STRING,
    image: Sequelize.STRING,
    birthday: Sequelize.DATE
});

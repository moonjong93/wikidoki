var models = require('./')
module.exports = function(sequelize, DataTypes) {
    var Historys = sequelize.define('Historys', {
        documnet_title : { type : DataTypes.STRING(255), allowNull: false, references:{
            model: 'documents', key: 'title'
        } },
        summary_text: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        main_text:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        createdAt: {type: DataTypes.DATE, allowNull: false, defaultValue: sequelize.fn('NOW')},
        ver: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    }, {
        timestamps: false,
        tableName: 'historys'
    });
    return Historys;
};
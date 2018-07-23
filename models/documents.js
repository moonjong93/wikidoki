export default function(sequelize, DataTypes) {
    var Documents = sequelize.define('Documents', {
        title : { type : DataTypes.STRING(255), primaryKey: true, allowNull: false},
        redirect_title: { type: DataTypes.STRING(255), allowNull: true },
    }, {
        timestamps: false,
        tableName: 'documents'
    });
    return Documents;
};
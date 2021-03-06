import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize'
import { HasManyGetAssociationsMixin, HasManyAddAssociationMixin,
    HasManyHasAssociationMixin, Association, HasManyCountAssociationsMixin,
    HasManyCreateAssociationMixin } from 'sequelize'
import {DBInfo} from '../config/database'

export default class Board extends Model {
    public title!: string
    public content!: string
    public author!: string | ''
    public version!: number
    public hospital!: string
    public createAt!: Date
    public updateAt!: Date
}

const sequelize = new Sequelize(DBInfo.dbname, DBInfo.username, DBInfo.password, {
    host: '175.193.0.199',
    port: 53306,
    dialect: 'mariadb',
    dialectOptions: {
        useUTC: false,
        timezone: 'Etc/GMT0',
    }
})

Board.init({
    title: {
        type: DataTypes.STRING(191),
        primaryKey: true
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    author: {
        type: DataTypes.STRING(128),
        allowNull: true
    },
    version: {
        type: DataTypes.NUMBER(),
        allowNull: false
    },
    hospital: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'board'
})

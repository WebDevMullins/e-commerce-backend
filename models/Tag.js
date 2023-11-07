// Import the necessary Sequelize components
const { Model, DataTypes } = require('sequelize')

// Import the Sequelize instance (usually for connecting to the database)
const sequelize = require('../config/connection.js')

// Define the Tag class, which extends the Model class provided by Sequelize
class Tag extends Model {}

// Initialize the model with its attributes and configurations
Tag.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		tag_name: {
			type: DataTypes.STRING
		}
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: 'tag'
	}
)

module.exports = Tag

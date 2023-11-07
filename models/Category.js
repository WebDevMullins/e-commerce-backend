// Import the necessary Sequelize components
const { Model, DataTypes } = require('sequelize')

// Import the Sequelize instance (usually for connecting to the database)
const sequelize = require('../config/connection.js')

// Define the Category class, which extends the Model class provided by Sequelize
class Category extends Model {}

// Initialize the Category model with its attributes and configurations
Category.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		category_name: {
			type: DataTypes.STRING,
			allowNull: false
		}
	},
	{
		sequelize, // The Sequelize instance for this model
		timestamps: false, // Disable createdAt and updatedAt fields
		freezeTableName: true, // Prevent the table name from being pluralized
		underscored: true, // Use underscores for automatically generated attribute names
		modelName: 'category' // Set the model name to 'category'
	}
)

module.exports = Category

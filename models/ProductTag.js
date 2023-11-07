// Import the necessary Sequelize components
const { Model, DataTypes } = require('sequelize')

// Import the Sequelize instance (usually for connecting to the database)
const sequelize = require('../config/connection')

// Define the ProductTag class, which extends the Model class provided by Sequelize
class ProductTag extends Model {}

// Initialize the model with its attributes and configurations
ProductTag.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		product_id: {
			type: DataTypes.INTEGER,
			references: {
				model: 'product',
				key: 'id'
			}
		},
		tag_id: {
			type: DataTypes.INTEGER,
			references: {
				model: 'tag',
				key: 'id'
			}
		}
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: 'product_tag'
	}
)

module.exports = ProductTag

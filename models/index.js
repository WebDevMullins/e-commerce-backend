// import models
const Product = require('./Product')
const Category = require('./Category')
const Tag = require('./Tag')
const ProductTag = require('./ProductTag')

// Products belongsTo Category
Product.hasOne(Category, {
	foreignKey: 'category_id'
})
Category.belongsTo(Product)

// Categories have many Products
Category.hasMany(Product, {
	foreignKey: 'id'
})
Product.belongsTo(Category)

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, { through: 'ProductTag' })

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, { through: 'ProductTag' })

module.exports = {
	Product,
	Category,
	Tag,
	ProductTag
}
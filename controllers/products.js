const Product = require('./../models/productsModel');

exports.getAddProduct = (req, res, next) => {
	res.render('add-product', {
		pageTitle: 'Add Product',
		path: '/admin/add-product',
		activeAddProduct: true,
		formCSS: true,
		productCSS: true,
	});
};

exports.postAddProduct = (req, res, next) => {
	console.log(req.body);
	const product = new Product(req.body.title);
	product.save();
	res.redirect('/');
};

exports.getProduct = (req, res, next) => {
	Product.fetchAll((products) => {
		res.render('shop', {
			prods: products,
			pageTitle: 'Shop',
			path: '/',
			hasProducts: products.length > 0,
			activeShop: true,
			productCSS: true,
		});
	});
};

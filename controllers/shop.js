const Product = require('../models/productsModel');
const Cart = require('../models/cartModel');

exports.getProducts = (req, res, next) => {
	Product.findAll()
		.then((products) => {
			res.render('shop/product-list', {
				prods: products,
				pageTitle: 'All Product',
				path: '/products',
			});
		})
		.catch((err) => {
			console.log(err);
		});
};

exports.getProduct = (req, res, next) => {
	const productId = req.params.productId;
	Product.findAll({ where: { id: productId } });
	// .then((products) => {
	// 	res.render('shop/product-detail', {
	// 		product: products[0],
	// 		pageTitle: `Product from ${products[0].title}`,
	// 		path: '/products',
	// 	});
	// })
	// .catch((err) => console.log(err));
	Product.findByPk(productId)
		.then((product) => {
			res.render('shop/product-detail', {
				product: product,
				pageTitle: `Product from ${product.title}`,
				path: '/products',
			});
		})
		.catch((err) => console.log(err));
};

exports.getIndex = (req, res, next) => {
	Product.findAll()
		.then((products) => {
			res.render('shop/index', {
				prods: products,
				pageTitle: 'Shop',
				path: '/',
			});
		})
		.catch((err) => {
			console.log(err);
		});
};

exports.getCart = (req, res, next) => {
	req.user
		.getCart()
		.then((cart) => {
			return cart
				.getProducts()
				.then((products) => {
					res.render('shop/cart', {
						pageTitle: 'Your Cart',
						path: '/cart',
						products: products,
					});
				})
				.catch((err) => console.log(err));
		})
		.catch((err) => console.log(err));
};

exports.postCart = (req, res, next) => {
	const productId = req.body.productId;
	let fetchedCart;
	req.user
		.getCart()
		.then((cart) => {
			fetchedCart = cart;
			return cart.getProducts({ where: { id: productId } });
		})
		.then((products) => {
			let product;
			if (products.length > 0) {
				product = products[0];
			}
			let newQuantity = 1;
			if (product) {
				//...
			}
			return Product.findByPk(productId)
				.then((product) => {
					return fetchedCart.addProduct(product, {
						through: { quantity: newQuantity },
					});
				})
				.catch((err) => console.log(err));
		})
		.then(() => {
			res.redirect('/cart');
		})
		.catch((err) => console.log(err));
};

exports.postCartDeleteProduct = (req, res, next) => {
	const productId = req.body.productId;
	Product.findById(productId, (product) => {
		Cart.deleteProduct(productId, product.price);
		res.redirect('/cart');
	});
};

exports.getOrders = (req, res, next) => {
	res.render('shop/orders', {
		pageTitle: 'Your Orders',
		path: '/orders',
	});
};

exports.getCheckout = (req, res, next) => {
	res.render('shop/checkout', {
		pageTitle: 'Checkout',
		path: '/checkout',
	});
};

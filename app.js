const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
// FOR VIEWS ENGINE HANDLEBARS
const expressHandlebars = require('express-handlebars');

const app = express();

// HANDLEBARS
// app.engine(
// 	'handlebars',
// 	expressHandlebars({
// 		layoutsDir: 'views/layouts',
// 		defaultLayout: 'main-layout',
// 	})
// );
// app.set('view engine', 'handlebars');

// PUG (JADE)
app.set('view engine', 'pug');

// EJS
// app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
	res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

app.listen(8000);

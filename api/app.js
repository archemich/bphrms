const express = require('express'),
	app = express();
    
    
// Routes connection
app
    .use('/', require('./routes/index'))
    .use('/auth', require('./routes/auth'))
    .use('/users', require('./routes/users'))
    .use('/trashes', require('./routes/trashes'))
    .use('/ways', require('./routes/ways'));

// Handle 404 AND 500 codes
app
	.use((req, res) => 
    res.status(404).json({ error: { type: 'NOT FOUND', code: 404 } }))
	
    
    .use((error, req, res) => {
		console.warn(error);
		res.status(500).json({ error: { type: 'INTERNAL SERVER ERROR', code: 500 } });
	});

app.listen(process.env.PORT || 8080, () => console.log(`Listen on:`, process.env.PORT || 8080));

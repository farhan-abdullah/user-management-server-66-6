const express = require('express');
const cors = require('cors');
const app = express();
//middleware
app.use(cors());
app.use(express.json()); //with this middleware i am getting data

//end middleware
const port = process.env.PORT || 5000;
const users = [
	{ id: 1, name: 'zayn abdullah', email: 'zayn.abdullah@hotmail.com' },
	{ id: 2, name: 'shanaz akter mishu', email: 'saktermishu@hotmail.com' },
	{ id: 3, name: 'abdullah al nahid siddik', email: 'nahid.siddik@hotmail.com' },
];
app.get('/', (req, res) => {
	res.send('User management server is running ');
});
app.get('/users', (req, res) => {
	res.send(users);
});
app.post('/users', (req, res) => {
	console.log(req.body);
	const newUser = req.body;
	newUser.id = users.length + 1;
	users.push(newUser);
	res.send(newUser);
});
app.listen(port, () => {
	console.log(`Server is running on PORT: ${port}`);
});

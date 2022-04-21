const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello from my over smarty node');
});

const users = [
    { id: 1, name: "Shabana", email: "shabana@gmail.com", phone: "01712343434" },
    { id: 2, name: "Shabnur", email: "shabnur@gmail.com", phone: "01712343434" },
    { id: 3, name: "Shuchorita", email: "shuchorita@gmail.com", phone: "01712343434" },
    { id: 4, name: "Suchonda", email: "suchonda@gmail.com", phone: "01712343434" },
    { id: 5, name: "Sharmin", email: "sharmin@gmail.com", phone: "01712343434" },
    { id: 6, name: "Suhana", email: "suhana@gmail.com", phone: "01712343434" },
    { id: 7, name: "Shuborna", email: "shuborna@gmail.com", phone: "01712343434" }
]

app.get('/user/:id', (req, res) => {
    console.log(req.params)
    const id = req.params.id;
    const user = users.find(u => u.id == id);

    res.send(user);
});

app.listen(port, () => {
    console.log('Listening to port', port);
})
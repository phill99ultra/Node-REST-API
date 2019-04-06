const express = require('express');
const router = express.Router();
let Olypmp_Gods = [
    {
        id : 1,
        name : 'Zeus'
    },
    {
        id : 2,
        name : 'Ares'
    },
    {
        id : 3,
        name : 'Hades'
    }

];
// describe our route; what will happen when we acces URL
router.get('/', (req, res) => {
    res.send('Hello API!');
});
router.get('/gods', (req, res) => {
    res.send(Olypmp_Gods);
});
router.get('/gods/:id', (req, res) => {
    console.log(req.params);
    const god = Olypmp_Gods.find((god) => {
        return god.id === Number(req.params.id)
    });
    res.send(god);
});
// add new god to array
router.post('/gods', (req, res) => {
    const god = {
        id: Date.now(),
        name : req.body.name
    };
    Olypmp_Gods.push(god);    
    res.send(god);
});
// update gods list
router.put('/gods/:id', (req, res) => {
    const god = Olypmp_Gods.find((god) => {
        return god.id === Number(req.params.id)
    });
    god.name = req.body.name;
    res.sendStatus(200);
});
// delete god from list
router.delete('/gods/:id', (req, res) => {
// return array with element sent to..
   Olypmp_Gods = Olypmp_Gods.filter(god => {
       return god.id !== Number(req.params.id);
   });
   res.sendStatus(200);
});

module.exports = router;
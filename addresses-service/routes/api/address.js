const router = require('express').Router();
const address = require('../../models/address');

// retrieve all addresses && retrieve all addresses that match a pattern (i.e. All addresses that contains "Street", or all addresses that contains "Toledo"
router.get('/', (req, res) => {
  address.find({}).then((result) => {
    console.log(result);
    res.send('retrieve all addresses && retrieve all addresses that match a pattern (i.e. All addresses that contains "Street", or all addresses that contains "Toledo")');
  });
});

// retrieve all addresses of a user, identified by userId
router.get('/byUser/:id', (req, res) => {
  res.send('retrieve all addresses of a user, identified by userId');
})

router.post('/', (req, res) => {
  res.send('create');
});

router.put('/', (req, res) => {
  res.send('update');
});

router.delete('/', (req, res) => {
  res.send('delete');
});

router.get('/:id', (req, res) => {
  res.send('read');
});

module.exports = router;
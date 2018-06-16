const router = require('express').Router();
const Address = require('../../models/address');

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
  console.log(JSON.stringify(req.body));
  let address = new Address({
    userId: req.body['userId'],
    address: req.body['address']
  });
  address.save((err, result) => {
    if (!err) {
      res.status(200).send(JSON.stringify(result));
    } else {
      res.status(400).send(JSON.stringify(err));
    }
  });
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

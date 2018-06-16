const router = require('express').Router();
const Address = require('../../models/address');

// retrieve all addresses && retrieve all addresses that match a pattern (i.e. All addresses that contains "Street", or all addresses that contains "Toledo"
router.get('/', (req, res) => {
  let find = {};
  if (req.query.text) {
    find = { address: { $regex: `.*${req.query.text}.*` } }
  }

  Address.find(find, (err, result) => {
    if (err) {
      return res.status(400).send(err);
    }
    return res.status(200).send(result);
  });
});

// retrieve all addresses of a user, identified by userId
router.get('/byUser/:id', (req, res) => {
  const userId = req.params.id;
  Address.find({ userId: userId }, (err, result) => {
    if (err) {
      return res.status(400).send(err);
    }
    return res.status(200).send(result);
  });
});

router.post('/', (req, res) => {
  res.send('create');
});

router.put('/:id', (req, res) => {
  res.send('update');
});

router.delete('/:id', (req, res) => {
  res.send('delete');
});

router.get('/:id', (req, res) => {
  res.send('read');
});

module.exports = router;
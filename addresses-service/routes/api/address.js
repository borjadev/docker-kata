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
    if (!result.length) {
      return res.status(404).send();
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
    if (!result) {
      return res.status(404).send();
    }
    return res.status(200).send(result);
  });
});

router.post('/', (req, res) => {
  const address = new Address({
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

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const newAddress = {
    userId: req.body.userId,
    address: req.body.address
  };

  Address.findOneAndUpdate({ _id: id }, { $set: newAddress }, { new: true }, (err, result) => {
    if (err) {
      return res.status(400).send(err);
    }
    return res.status(200).send(result);
  });
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;

  Address.findOneAndRemove({ _id: id }, (err, result) => {
    if (err) {
      return res.status(400).send(err);
    }
    return res.status(200).send(result);
  });
});

router.get('/:id', (req, res) => {
  const addressId = req.params.id;

  Address.find({ _id: addressId }, (err, result) => {
    if (err) {
      return res.status(400).send(err);
    }
    if (!result) {
      return res.status(404).send();
    }
    return res.status(200).send(result);
  });
});

module.exports = router;

var express = require('express');
var router = express.Router();

let activeCarts = [
  {
    cartID: "777",
    cartItems: [
      {
        title: "Babolat Pure Drive 2021",
        description: "Size - (4_1/4) | Color - (Blue)",
        cost: 22900,
        imageUrl: "https://m.media-amazon.com/images/I/51VCKN8qupL._AC_UL320_.jpg"
      },
      {
        title: "Vitamix Explorian Blender",
        description: "64 oz. Low-Profile Container, Red",
        cost: 28995,
        imageUrl: "https://m.media-amazon.com/images/I/51L5EzDC76L._AC_UY218_.jpg"
      }
    ]
  },
  {
    cartID: "888",
    cartItems: [
      {
        title: "Jabra GN2000  Headset",
        description: "USB Mono UC Corded | Color - (Black)",
        cost: 2900,
        imageUrl: "https://m.media-amazon.com/images/I/71Mf9Khp9gL._AC_UY218_.jpg"
      }
    ]
  }
]

//
// Return shopping cart items for a cart id.
//
// NOTE: for if have a JWT that need to be validated will need that middleware inserted
// router.get('/:id', authHelper.checkAuth, function (req, res, next) {
router.get('/:id', function (req, res, next) {
  // TODO: Return a 404 error if the cart ID does not exist!
  let cart = activeCarts.find(x => x.cartID === req.params.id)
  if (cart === undefined) {
    let err = new Error('Cart was not found.');
    err.status = 404;
    return next(err);
  }

  res.header("Cache-Control", "no-cache, no-store, must-revalidate");
  res.header("Pragma", "no-cache");
  res.header("Expires", 0);
  res.status(200).json(cart);
});

module.exports = router;

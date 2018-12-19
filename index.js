const { send } = require('micro');
const cors = require('micro-cors')();

const handler = (req, res) => send(res, 200, [
    {
      product_id: 'MOBFAJB4CWKAZGPZ',
      product_meta: {
        title: 'Redmi Note 6 Pro (Black, 64 GB)  (4 GB RAM)',
        img: {
          base_url: 'https://rukminim1.flixcart.com/image/',
          id: 'jog2nbk0/mobile/e/x/b/mi-redmi-e7t-na-original-imafazxdh2bd6hep.jpeg',
        }
      },
      pricing: {
        amount: 13999,
        delivery_charge: 50,
      },
      availability: {
        unavailable_pincodes: [],
      },
      purchase_instructions: {
        single_purchase: false,
        max_purchase_limit: 3,
      }
    },
    {
      product_id: 'MOBF9GAQ6ZQXPJG7',
      product_meta: {
        title: 'Google Pixel 3 (Just Black, 64 GB)  (4 GB RAM)',
        img: {
          base_url: 'https://rukminim1.flixcart.com/image/',
          id: 'jn0msnk0/mobile/j/g/7/google-pixel-3-na-original-imaf9sxrbewfygaj.jpeg',
        }
      },
      pricing: {
        amount: 66500,
        delivery_charge: 0,
      },
      availability: {
        unavailable_pincodes: ['560103'],
      },
      purchase_instructions: {
        single_purchase: true,
      }
    },
    {
      product_id: 'MOBF7HXTQPVA5GGZ',
      product_meta: {
        title: 'Samsung Galaxy Note 9 (Metallic Copper, 512 GB)  (8 GB RAM)',
        img: {
          base_url: 'https://rukminim1.flixcart.com/image/',
          id: 'jnc2bgw0/mobile/g/g/z/samsung-galaxy-note-9-sm-n960fznhins-original-imafafzxzg85c6qb.jpeg',
        }
      },
      pricing: {
        amount: 84900,
        delivery_charge: 200,
      },
      availability: {
        unavailable_pincodes: ['560102'],
      },
      purchase_instructions: {
        single_purchase: false,
        max_purchase_limit: 2,
      }
    },
    {
      product_id: 'MOBF944EKCGDWFTA',
      product_meta: {
        title: 'Apple iPhone XS Max (Space Grey, 256 GB)',
        img: {
          base_url: 'https://rukminim1.flixcart.com/image/',
          id: 'jm9hfgw0/mobile/f/t/a/apple-iphone-xs-max-mt532hn-a-original-imaf97f6y3spd7yz.jpeg',
        }
      },
      pricing: {
        amount: 124900,
        delivery_charge: 0,
      },
      availability: {
        unavailable_pincodes: ['560102', '560103'],
      },
      purchase_instructions: {
        single_purchase: true,
      }
    },
  ]);

module.exports = cors(handler);
const menu = [
  {
    id: 1,
    title: 'buttermilk pancakes',
    category: 'breakfast',
    price: 15.99,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt2jxUeqm9kiDK7b6qvwnP-KjEKBy9kSBkew&usqp=CAU',
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: 'diner double',
    category: 'lunch',
    price: 13.99,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ7FLwrbBCz0pPl_w7TCtT15qRM7nY87RiQCgxZofsYoqqgLgO1n1rsZCRcnb4Fp2Owek&usqp=CAU',
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: 'godzilla milkshake',
    category: 'shakes',
    price: 6.99,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSthZoFtWYIfUSArezpOcvkRF9cspWE0YpUPw&usqp=CAU',
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: 'country delight',
    category: 'breakfast',
    price: 20.99,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR22rFlL55nrVoes2RQQwGufVsEFJ2VRfU8mg&usqp=CAU',
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: 'egg attack',
    category: 'lunch',
    price: 22.99,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Rb4V8nKEn1vEqcjWXWbbXDhXJA6WkRRlUA&usqp=CAU',
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: 'oreo dream',
    category: 'shakes',
    price: 18.99,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_PkDR9e8hJNh-rVI9jFEGQU6WnB8em8CHXw&usqp=CAU',
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: 'bacon overflow',
    category: 'breakfast',
    price: 8.99,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNNvmOSR9WhcoOn8StfxuMcILXqEFEcfgxZQ&usqp=CAU',
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: 'american classic',
    category: 'lunch',
    price: 12.99,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGC3ExMyLke4rlWncMMQ_rwOtibl5X6QijIg&usqp=CAU',
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: 'quarantine buddy',
    category: 'shakes',
    price: 16.99,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJouFuADFRTz5y9kO59f8JIXn_aQyk1GJg1w&usqp=CAU',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: 'Kobe beef',
    category: 'lunch',
    price: 20.16,
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Kobe_beef_meal_served_in_a_steakhouse_in_Kobe.jpeg',
    desc: `Kobe beef is Wagyu beef from the Tajima strain of Japanese Black cattle, raised in Japan's Hyōgo Prefecture `,
  },
  {
  id: 11,
  title: 'Caviar',
  category: 'lunch',
  price: 10.89,
  img: 'https://www.thespruceeats.com/thmb/hs-Ac4de3-nKyjQFhKslu4mXeNM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/bowls-of-caviar-and-roe-on-crushed-ice-126550640-5acbaf08642dca0036a402d3.jpg',
  desc: `Caviar is a food consisting of salt-cured roe of the family Acipenseridae. Caviar is considered a delicency.`,
  },
 {
    id: 12,
    title: 'choclate',
    category: 'shakes',
    price: 17.86,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiIEErt7SgAP5CdQ4qHRGroLCRtg-6OAzpeg&usqp=CAU',
    desc: `In a large mixer, place the strawberries, ice cream, and milk. Blend until smooth. Pour into ice cream parlor glasses .`,
    } , 
    {
      id: 13,
      title: 'cashew',
      category: 'shakes',
      price: 16.99,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD-hG0iVPiewOlQcSqQ2YO3CycJr3Byha6iw&usqp=CAU',
      desc: `Cashew milk is a wonderful source of vitamin E. This vitamin plays an important role in eye health.`,
      } , 
    {
      id: 14,
      title: 'Pancake',
      category: 'breakfast',
      price: 12.12,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdtISsdl8cI0KvtoZYDjjbcBvuSWVUQRlf6A&usqp=CAU',
      desc: `Costly Breakfast | Rich Man. Binu James Mathew. Binu James Mathew. 917 subscribers. Subscribe. 0. I like this. I dislike this.`,
      } ,
      {  
      id: 15,
      title: 'Manila',
      category: 'breakfast',
      price: 12.12,
      img: 'https://aworldofindulgence.files.wordpress.com/2017/06/img_how_to_have_an_elegant_breakfast_easy_ideas_and_tips_11312_600.jpg',
      desc: `“There has never been a sadness that cannot be cured by breakfast food.`,
      },
      {  
        id: 16,
        title: 'Bagel',
        category: 'breakfast',
        price: 12.12,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6bzq_vr9FCGcNE5MikQHxATd5fjVVAFWtfg&usqp=CAU',
        desc: `“There has never been a sadness that cannot be cured by breakfast food.” -Ron Swanson`,
        },  
];
export default menu; 
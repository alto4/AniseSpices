interface Item {
  id: number,
  name: string,
  price: number,
  quantity: string,
  imageURL: string,
  description: string
}

const items: Array<Item> = [
  {
    id: 1,
    name: 'Amchur Powder',
    price: 4.99,
    quantity: '1 oz',
    imageURL: 'https://static.toiimg.com/thumb/msid-65873283,imgsize-206322,width-800,height-600,resizemode-75/65873283.jpg',
    description: 'Amchoor or aamchur or amchur, also referred to as mango powder, is a fruity spice powder made from dried unripe green mangoes and is used as a citrusy seasoning. It is mostly produced in India and Pakistan, and is used to flavor foods and add the nutritional benefits of mangoes when the fresh fruit is out of season.'
  },
  {
    id: 2,
    name: 'Black Cardamom',
    price: 7.99,
    quantity: '1 oz',
    imageURL: 'https://www.thespruceeats.com/thmb/JsVJNvdzco6tYsE9Z3RAviNTejE=/400x300/filters:no_upscale():max_bytes(150000):strip_icc()/cardamom-2500-56a2101a5f9b58b7d0c62aae.jpg',
    description: 'Amomum subulatum, also known as Black cardamom, hill cardamom,[1] Bengal cardamom,[1] greater cardamom,[1] Indian cardamom,[1] Nepal cardamom,[1] winged cardamom,[1] big cardamon,[2][3] or brown cardamom, is a perennial herbaceous plant in the family Zingiberaceae. Its seed pods have a strong, camphor-like flavour, with a smoky character derived from the method of drying. In Hindi it is called बड़ी इलाइची (baḍī ilāichī).'
  },
  {
    id: 3,
    name: 'Tasmanian Pepperberry',
    price: 39.99,
    quantity: '1oz',
    imageURL: 'https://wildpepperisle.com.au/wp-content/uploads/2020/02/Tasmanian-Pepperberry-1.png',
    description: 'Tasmannia lanceolata (syn. Drimys lanceolata), commonly known as Tasmanian pepperberry or mountain pepper,[1] is a shrub native to woodlands and cool temperate rainforest of south-eastern Australia. The shrub varies from 2 to 10 m high. The aromatic leaves are lanceolate to narrow-elliptic or oblanceolate, 4–12 cm long, and 0.7–2.0 cm wide, with a distinctly pale undersurface. Stems are quite red in colour. The small cream or white flowers appear in summer and are followed by black, globose, two-lobed berries 5–8 mm wide, which appear in autumn.[2][3][4] There are separate male and female plants.[5]'
  }, 
  {
    id: 4,
    name: 'Chaat Masala',
    price: 9.99,
    quantity: '1oz',
    imageURL: 'https://cdnimg.webstaurantstore.com/uploads/blog/2020/3/exotic-spices-indv-imgchaat-masala.png',
    description: 'Chaat masala is an Indian spice blend made from amchoor, cumin, coriander, ginger, black salt, asafoetida, and chili powder. In India, the word chaat refers to a savory, crunchy snack seasoned with chaat masala. This popular blend tastes best when made with freshly ground spices, and the ingredients can vary slightly between blends. The key components that give chaat masala its signature eggy, zingy flavor are black salt, asafoetida, and amchoor.'
  },  
  {
    id: 5,
    name: 'Fenugreek',
    price: 5.99,
    quantity: '1oz',
    imageURL: 'https://cdnimg.webstaurantstore.com/uploads/blog/2020/3/exotic-spices-indv-imgfenugreek.png',
    description: 'Fenugreek is another secret ingredient of Indian cooking that complements the flavors of other spices. It is both sweet and bitter, which gives it the ability to balance out sour, spicy notes in curries and sauces. Small, hard fenugreek seeds can be toasted to remove bitterness before being ground. The leaves of fenugreek are also edible and can be used in place of other types of leafy greens like mustard greens.'
  },  
  {
    id: 6,
    name: 'Aleppo Pepper',
    price: 4.99,
    quantity: '1oz',
    imageURL: 'https://cdnimg.webstaurantstore.com/uploads/blog/2020/3/exotic-spices-indv-imgaleppo-pepper.png',
    description: 'Uniquely fruity and salty, Aleppo pepper originates from the city of Aleppo in Syria. War and conflict disrupted the trade of this chili pepper, and Syrian refugees brought the spice to Turkey, where most of the world’s Aleppo pepper is now produced. The ruby-red flakes of the Aleppo chili produce mild heat and have a tangy, raisin-like flavor.'
  },  

]



export default items

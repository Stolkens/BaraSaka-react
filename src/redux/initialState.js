const initialState = {
  areas: [20, 40, 60, 80, 100, 150, 200, 1000, 1500, 2000, 3000],
  numberOfRooms : [1, 2, 3, 4, 5, 6, 7, 8],
  prices: [500, 1000, 2000, 5000, 10000, 20000, 50000, 100000, 200000, 300000,   ],
  properties : [
    {
      id: '1',
      name: 'Mieszkanie w centrum Katowic',
      type: 'mieszkanie',
      purpose: 'sprzedaż',
      city: 'Katowice',
      area: 57,
      rooms: 3,
      price: 220000,
      district: 'Centrum',
      description:"Dwupokojowe mieszaknie na drugim piętrze czteropiętrowego bloku i jakies inne pierdoły",
      images: [
              '/photos/mieszkanie_1/1.jpg',
              '/photos/mieszkanie_1/2.jpg',
              '/photos/mieszkanie_1/3.jpg',
              '/photos/mieszkanie_1/4.jpg',
              '/photos/mieszkanie_1/5.jpg',
              '/photos/mieszkanie_1/6.jpg',
              '/photos/mieszkanie_1/7.jpg',
              '/photos/mieszkanie_1/8.jpg',
      ]
    },
    {
      id: '2',
      name: 'Dom w sercu Nikiszowca',
      type: 'dom',
      purpose: 'wynajem',
      city: 'Katowice',
      area: 157,
      rooms: 6,
      price: 5000,
      district: 'Nikiszowiec',
      description:"Piękny dom na Nikiszowcu z blefnsndas csahdiasd ashdioasxdasn",
      images: [

      ]
    },
    {
      id: '3',
      name: 'Mieskzanie na zadupiu',
      type: 'mieszkanie',
      purpose: 'wynajem',
      city: 'Sosnowiec',
      area: 47,
      rooms: 2,
      price: 2000,
      district: 'Centrum',
      description:"W samym srodku niczego mieskzanie djsdkasmcasasm xasnjcbasklx snxianskxmas",
      images: [

      ]
    },
    {
      id: '4',
      name: 'Mieszkanie na Batorym',
      type: 'mieszkanie',
      purpose: 'sprzedaż',
      city: 'Chorzów',
      area: 82,
      rooms: 4,
      price: 200000,
      district: 'Batory',
      description:"Dla odwaznych mieskzanie na Batorym bcsda c scsioc cnsijaso nsiasmoxa",
      images: [

      ]
    },
    {
      id: '5',
      name: 'Działka Katowice - Wełnowiec',
      type: 'działka',
      purpose: 'sprzedaż',
      city: 'Katowice',
      area: 2000,
      price: 300000,
      district: 'Wełnowiec',
      description:"Kawałek ziemi w nieciekawej okolicy csdhcias csniasnc ascxiasnx asxnasixna",
      images: [

      ]
    },
    {
    id: '6',
      name: 'Miekszanie w kamienicy',
      type: 'mieszkanie',
      purpose: 'wynajem',
      city: 'Katowice',
      area: 90,
      rooms: 4,
      price: 420000,
      district: 'Centrum',
      description:"Mieszkanie w kamienicy w centrum  kasuasda sbasdas sakbdasd",
      images: [

      ]
    },
    {
    id: '7',
      name: 'Miekszanie w ładnej okolicy',
      type: 'mieszkanie',
      purpose: 'wynajem',
      city: 'Sosnowiec',
      area: 52,
      rooms: 3,
      price: 3500,
      district: 'Centrum',
      description:"Mieszkanie w kamienicy w centrum  kasuasda sbasdas sakbdasd",
      images: [

      ]
    },
    {
    id: '8',
      name: 'Miekszanie jakies tam',
      type: 'mieszkanie',
      purpose: 'sprzedaż',
      city: 'Katowice',
      area: 45,
      rooms: 2,
      price: 120000,
      district: 'Centrum',
      description:"Mieszkanie w cdssdffsdv vsdvsd fsdf sdf  fsdf ds fsd fsdsd",
      images: [

      ]
    },
    {
    id: '9',
      name: 'Dom stary',
      type: 'dom',
      purpose: 'wynajem',
      city: 'Katowice',
      area: 210,
      rooms: 5,
      price: 520000,
      district: 'Nikiszowiec',
      description:"Dom w dasdasdvsd dasdas dasdas  kasuasda sbasdas sakbdasd",
      images: [

      ]
    },
    {
    id: '10',
      name: 'Miekszanie takie śmakie',
      type: 'mieszkanie',
      purpose: 'sprzedaż',
      city: 'Katowice',
      area: 72,
      rooms: 4,
      price: 320000,
      district: 'Centrum',
      description:"Mieszkanie w kamienicy w centrum  kasuasda sbasdas sakbdasd",
      images: [

      ]
    },  
  ]
};

export default initialState;
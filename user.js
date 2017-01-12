var user = {
  name: 'Eric',
  location: 'WestJordan',
  occupations: ['student', 'developer', 'husband'],
  hobbies: [
    {
      name: 'GeoCaching',
      type: 'Outdoor'
    },
    {
      name: 'camping',
      type: 'Outdoor'
    },
    {
      name: 'Video Games',
      type: 'Indoor'
    }
  ],
  family: [
    {
      name: 'Robert',
      relation: 'Sister',
      gender: 'F'
    },
    {
      name: 'Brian',
      relation: 'Brother',
      gender: 'M'
    },
    {
      name: 'Greg',
      relation: 'Brother',
      gender: 'M'
    }
  ],
  restaurants: [
    {
      name: 'cafe rio',
      type: 'Mexican',
      rating: 9.2
    },
    {
      name: 'olive garden',
      type: 'Italian',
      rating: 9.4
    },
    {
      name: 'la frontera',
      type: 'Mexican',
      rating: 9.3
    }
  ]
};
module.exports = user;

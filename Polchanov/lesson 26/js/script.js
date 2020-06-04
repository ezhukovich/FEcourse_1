let people = [
    {
      "_id": "5ed21b36b8865ecba890f687",
      "index": 0,
      "picture": "http://placehold.it/64x64",
      "age": 27,
      "name": "Herring Davis",
      "gender": "male",
      "email": "herringdavis@endipin.com",
      "phone": "+1 (949) 473-3771",
      "friends": [
        {
          "id": 0,
          "name": "Lenora Herring"
        },
        {
          "id": 1,
          "name": "Barber Coffey"
        },
        {
          "id": 2,
          "name": "Elinor Pate"
        }
      ]
    },
    {
      "_id": "5ed21b36c728c27a203ff9ad",
      "index": 1,
      "picture": "http://placehold.it/64x64",
      "age": 38,
      "name": "Marjorie Pitts",
      "gender": "female",
      "email": "marjoriepitts@endipin.com",
      "phone": "+1 (885) 600-2882",
      "friends": [
        {
          "id": 0,
          "name": "Roberson Sanders"
        },
        {
          "id": 1,
          "name": "Downs Clements"
        },
        {
          "id": 2,
          "name": "Joanna Steele"
        }
      ]
    },
    {
      "_id": "5ed21b3685988b60d5a0746c",
      "index": 2,
      "picture": "http://placehold.it/64x64",
      "age": 38,
      "name": "Natasha Lawrence",
      "gender": "female",
      "email": "natashalawrence@endipin.com",
      "phone": "+1 (951) 514-3408",
      "friends": [
        {
          "id": 0,
          "name": "Alison Estrada"
        },
        {
          "id": 1,
          "name": "Cobb Woodward"
        },
        {
          "id": 2,
          "name": "Frances Sharp"
        }
      ]
    },
    {
      "_id": "5ed21b36afcbcc60fe75e456",
      "index": 3,
      "picture": "http://placehold.it/64x64",
      "age": 36,
      "name": "Sallie Love",
      "gender": "female",
      "email": "sallielove@endipin.com",
      "phone": "+1 (873) 424-2171",
      "friends": [
        {
          "id": 0,
          "name": "Bird Sims"
        },
        {
          "id": 1,
          "name": "Rosemary Dyer"
        },
        {
          "id": 2,
          "name": "Virginia Anderson"
        }
      ]
    },
    {
      "_id": "5ed21b36e7bc445c5fba1fc7",
      "index": 4,
      "picture": "http://placehold.it/64x64",
      "age": 40,
      "name": "Blankenship Conway",
      "gender": "male",
      "email": "blankenshipconway@endipin.com",
      "phone": "+1 (957) 561-3287",
      "friends": [
        {
          "id": 0,
          "name": "Emerson Finley"
        },
        {
          "id": 1,
          "name": "Mcguire Johnston"
        },
        {
          "id": 2,
          "name": "Conrad Cooper"
        }
      ]
    },
    {
      "_id": "5ed21b3670f98abc50ba9ffe",
      "index": 5,
      "picture": "http://placehold.it/64x64",
      "age": 29,
      "name": "Autumn Brock",
      "gender": "female",
      "email": "autumnbrock@endipin.com",
      "phone": "+1 (964) 463-2208",
      "friends": [
        {
          "id": 0,
          "name": "Massey Nicholson"
        },
        {
          "id": 1,
          "name": "Alberta Stevens"
        },
        {
          "id": 2,
          "name": "Hunt Hunter"
        }
      ]
    },
    {
      "_id": "5ed21b36f05c255e6034e8fb",
      "index": 6,
      "picture": "http://placehold.it/64x64",
      "age": 22,
      "name": "Kirk Pratt",
      "gender": "male",
      "email": "kirkpratt@endipin.com",
      "phone": "+1 (901) 495-3334",
      "friends": [
        {
          "id": 0,
          "name": "Lillian Oneal"
        },
        {
          "id": 1,
          "name": "Brewer Houston"
        },
        {
          "id": 2,
          "name": "Daniels Rivers"
        }
      ]
    }
  ]

  function renderFriends(friends) {
    let friendsTemplate = friends.map((item) => `<span>${item.name}</span>`)

    return friendsTemplate;
 }

function renderPeople() {
    for(let i = 0; i<people.length; i++) {
        let html_temp = `<div><span>${people[i].name}</span><div>${renderFriends(people[i].friends)}</div></div>`;
        $('#people').append(html_temp);

    }
}

renderPeople();
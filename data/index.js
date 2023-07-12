import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const users = [
  {
    _id: "64ae2a39065bb5d8ea0b17f8",
    firstName: "Aravind",
    lastName: "PJ",
    email: "aravind@example.io",
    password: "$2b$10$fAGNV1CSUX0K8a1KMdhCueYO0yitKyHN./r4XV.Dyl1dvuEa/c9vy",
    picturePath: "aravindtest.jpg",
    friends: [],
    location: "Thrissur",
    occupation: "Backend developer",
    viewedProfile: 5621,
    impressions: 9564,
    createdAt: "2023-07-12T04:21:13.226Z",
    updatedAt: "2023-07-12T09:14:50.753Z",
    __v: 10,
  },
  {
    _id: "64ae2aac065bb5d8ea0b1801",
    firstName: "Steve",
    lastName: "Roger",
    email: "steve@example.io",
    password: "$2b$10$RYgiSqxRfsy743kl3klDYeUKJ7FnoEo8k.K7e4TabTbQvsrNZ7nmO",
    picturePath: "steve.jpg",
    friends: [],
    location: "California",
    occupation: "CFO of BlueDart",
    viewedProfile: 8063,
    impressions: 4490,
    createdAt: "2023-07-12T04:23:08.706Z",
    updatedAt: "2023-07-12T09:14:50.791Z",
    __v: 6,
  },
  {
    _id: "64ae2b53065bb5d8ea0b180a",
    firstName: "Elena",
    lastName: "steve",
    email: "elena@example.io",
    password: "$2b$10$MH81AOnQyOFuSwZ1l/8Owui/m.vGVjrQZF4Y2gsGeNgvXgNufKWo2",
    picturePath: "elena.jpg",
    friends: ["64ae2aac065bb5d8ea0b1801"],
    location: "California",
    occupation: "Software engineer",
    viewedProfile: 5395,
    impressions: 9173,
    createdAt: "2023-07-12T04:25:55.387Z",
    updatedAt: "2023-07-12T09:14:49.727Z",
    __v: 4,
  },
  {
    _id: "64ae2c05065bb5d8ea0b180c",
    firstName: "Jhon",
    lastName: "Alexander",
    email: "jhon@example.io",
    password: "$2b$10$uRdq6sqc5JA0vA7zW0mfKepMd186yDZ7K13c2veOSC.FzFn2wFMLW",
    picturePath: "jhonalexander.jpg",
    friends: [],
    location: "New york",
    occupation: "Designer",
    viewedProfile: 9399,
    impressions: 3632,
    createdAt: "2023-07-12T04:28:53.629Z",
    updatedAt: "2023-07-12T04:28:53.629Z",
    __v: 0,
  },
  {
    _id: "64ae84fa47872535b4753164",
    firstName: "Eliot",
    lastName: "jane",
    email: "eliot@example.io",
    password: "$2b$10$9Mz4hA926UgDPfrUovIGveETeUKoHcYK9p5v5FqnKz.7DjVV9urf.",
    picturePath: "",
    friends: [],
    location: "miami",
    occupation: "fullstack developer",
    viewedProfile: 8321,
    impressions: 3481,
    createdAt: "2023-07-12T10:48:26.942Z",
    updatedAt: "2023-07-12T10:48:26.942Z",
    __v: 0,
  },
];

// export const users = [
//   {
//     _id: userIds[0],
//     firstName: "test",
//     lastName: "me",
//     email: "aaaaaaa@gmail.com",
//     password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
//     picturePath: "p11.jpeg",
//     friends: [],
//     location: "San Fran, CA",
//     occupation: "Software Engineer",
//     viewedProfile: 14561,
//     impressions: 888822,
//     createdAt: 1115211422,
//     updatedAt: 1115211422,
//     __v: 0,
//   },
//   {
//     _id: userIds[1],
//     firstName: "Steve",
//     lastName: "Ralph",
//     email: "thataaa@gmail.com",
//     password: "$!FEAS@!O)_IDJda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
//     picturePath: "p3.jpeg",
//     friends: [],
//     location: "New York, CA",
//     occupation: "Degenerate",
//     viewedProfile: 12351,
//     impressions: 55555,
//     createdAt: 1595589072,
//     updatedAt: 1595589072,
//     __v: 0,
//   },
//   {
//     _id: userIds[2],
//     firstName: "Some",
//     lastName: "Guy",
//     email: "someguy@gmail.com",
//     password: "da39a3ee5e6b4b0d3255bfef95601890afd80709",
//     picturePath: "p4.jpeg",
//     friends: [],
//     location: "Canada, CA",
//     occupation: "Data Scientist Hacker",
//     viewedProfile: 45468,
//     impressions: 19986,
//     createdAt: 1288090662,
//     updatedAt: 1288090662,
//     __v: 0,
//   },
//   {
//     _id: userIds[3],
//     firstName: "Whatcha",
//     lastName: "Doing",
//     email: "whatchadoing@gmail.com",
//     password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
//     picturePath: "p6.jpeg",
//     friends: [],
//     location: "Korea, CA",
//     occupation: "Educator",
//     viewedProfile: 41024,
//     impressions: 55316,
//     createdAt: 1219214568,
//     updatedAt: 1219214568,
//     __v: 0,
//   },
//   {
//     _id: userIds[4],
//     firstName: "Jane",
//     lastName: "Doe",
//     email: "janedoe@gmail.com",
//     password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
//     picturePath: "p5.jpeg",
//     friends: [],
//     location: "Utah, CA",
//     occupation: "Hacker",
//     viewedProfile: 40212,
//     impressions: 7758,
//     createdAt: 1493463661,
//     updatedAt: 1493463661,
//     __v: 0,
//   },
//   {
//     _id: userIds[5],
//     firstName: "Harvey",
//     lastName: "Dunn",
//     email: "harveydunn@gmail.com",
//     password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
//     picturePath: "p7.jpeg",
//     friends: [],
//     location: "Los Angeles, CA",
//     occupation: "Journalist",
//     viewedProfile: 976,
//     impressions: 4658,
//     createdAt: 1381326073,
//     updatedAt: 1381326073,
//     __v: 0,
//   },
//   {
//     _id: userIds[6],
//     firstName: "Carly",
//     lastName: "Vowel",
//     email: "carlyvowel@gmail.com",
//     password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
//     picturePath: "p8.jpeg",
//     friends: [],
//     location: "Chicago, IL",
//     occupation: "Nurse",
//     viewedProfile: 1510,
//     impressions: 77579,
//     createdAt: 1714704324,
//     updatedAt: 1642716557,
//     __v: 0,
//   },
//   {
//     _id: userIds[7],
//     firstName: "Jessica",
//     lastName: "Dunn",
//     email: "jessicadunn@gmail.com",
//     password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
//     picturePath: "p9.jpeg",
//     friends: [],
//     location: "Washington, DC",
//     occupation: "A Student",
//     viewedProfile: 19420,
//     impressions: 82970,
//     createdAt: 1369908044,
//     updatedAt: 1359322268,
//     __v: 0,
//   },
// ];

export const posts = [
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[1],
    firstName: "Steve",
    lastName: "Ralph",
    location: "New York, CA",
    description: "Some really long random description",
    picturePath: "post1.jpeg",
    userPicturePath: "p3.jpeg",
    likes: new Map([
      [userIds[0], true],
      [userIds[2], true],
      [userIds[3], true],
      [userIds[4], true],
    ]),
    comments: [
      "random comment",
      "another random comment",
      "yet another random comment",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[3],
    firstName: "Whatcha",
    lastName: "Doing",
    location: "Korea, CA",
    description:
      "Another really long random description. This one is longer than the previous one.",
    picturePath: "post2.jpeg",
    userPicturePath: "p6.jpeg",
    likes: new Map([
      [userIds[7], true],
      [userIds[4], true],
      [userIds[1], true],
      [userIds[2], true],
    ]),
    comments: [
      "one more random comment",
      "and another random comment",
      "no more random comments",
      "I lied, one more random comment",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[4],
    firstName: "Jane",
    lastName: "Doe",
    location: "Utah, CA",
    description:
      "This is the last really long random description. This one is longer than the previous one.",
    picturePath: "post3.jpeg",
    userPicturePath: "p5.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[6], true],
      [userIds[3], true],
      [userIds[5], true],
    ]),
    comments: [
      "one more random comment",
      "I lied, one more random comment",
      "I lied again, one more random comment",
      "Why am I doing this?",
      "I'm bored",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[5],
    firstName: "Harvey",
    lastName: "Dunn",
    location: "Los Angeles, CA",
    description:
      "This is the last really long random description. This one is longer than the previous one. Man I'm bored. I'm going to keep typing until I run out of things to say.",
    picturePath: "post4.jpeg",
    userPicturePath: "p7.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[6], true],
      [userIds[3], true],
    ]),
    comments: [
      "I lied again, one more random comment",
      "Why am I doing this?",
      "I'm bored",
      "I'm still bored",
      "All I want to do is play video games",
      "I'm going to play video games",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[6],
    firstName: "Carly",
    lastName: "Vowel",
    location: "Chicago, IL",
    description:
      "Just a short description. I'm tired of typing. I'm going to play video games now.",
    picturePath: "post5.jpeg",
    userPicturePath: "p8.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[3], true],
      [userIds[5], true],
      [userIds[7], true],
    ]),
    comments: [
      "I lied again, one more random comment",
      "Why am I doing this?",
      "Man I'm bored",
      "What should I do?",
      "I'm going to play video games",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[7],
    firstName: "Jessica",
    lastName: "Dunn",
    location: "Washington, DC",
    description:
      "For the last time, I'm going to play video games now. I'm tired of typing. I'm going to play video games now.",
    picturePath: "post6.jpeg",
    userPicturePath: "p9.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[2], true],
    ]),

    comments: [
      "Can I play video games now?",
      "No let's actually study",
      "Never mind, I'm going to play video games",
      "Stop it.",
      "Michael, stop it.",
    ],
  },
];
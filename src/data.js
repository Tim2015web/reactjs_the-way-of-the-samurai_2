let data = {
  userProfile: {
    name: "Иван Иванов",
    location: "Москва, Россия",
    dateOfBirth: "1990-05-15",
    education:
      "Московский Государственный Университет, факультет вычислительной математики и кибернетики",
    webSite: "https://ivanivanov.com",
    occupation: "Разработчик программного обеспечения",
    interests: "Программирование, путешествия, чтение книг",
    phoneNumber: "+7 900 123 45 67",
    email: "ivan.ivanov@mail.ru",
    socialMedia: {
      instagram: "@ivan_ivanov",
      twitter: "@ivan_dev",
      linkedin: "linkedin.com/in/ivanivanov",
    },
    status: "На связи, пишите!",
  },
  userPosts: [
    {
      id: 0,
      text: "Сегодня был отличный день, делюсь настроением!",
      image: "https://s2.fotokto.ru/photo/full/723/7230550.jpg",
      likes: 0,
    },
    {
      id: 1,
      text: "Кто-то смотрел новый сериал? Рекомендации?",
      image: "https://s1.fotokto.ru/photo/full/823/8238756.jpg",
      likes: 0,
    },
    {
      id: 2,
      text: "Провел утро с чашкой кофе и хорошей книгой. Советую всем!",
      image: "https://s1.fotokto.ru/photo/full/729/7292874.jpg",
      likes: 5,
    },
    {
      id: 3,
      text: "Делюсь фотографией с вечерней прогулки. Как красиво, правда?",
      image: "https://s2.fotokto.ru/photo/full/822/8227434.jpg",
      likes: 1,
    },
    {
      id: 4,
      text: "Друзья, кто знает хорошие места для отдыха в этом сезоне?",
      image: "https://s2.fotokto.ru/photo/full/617/6176533.jpg",
      likes: 4,
    },
    {
      id: 5,
      text: "Спасибо всем за поздравления, день рождения удался!",
      image: "https://s3.fotokto.ru/photo/full/809/8097336.jpg",
      likes: 6,
    },
    {
      id: 6,
      text: "Сегодня узнал что-то новое и хочу поделиться с вами!",
      image: "https://download.samplelib.com/png/sample-bumblebee-400x300.png",
      likes: 8,
    },
    {
      id: 7,
      text: "Не могу поверить, что это произошло, такое вдохновение!",
      image: "https://download.samplelib.com/jpeg/sample-birch-400x300.jpg",
      likes: 10,
    },
    {
      id: 8,
      text: "Планирую провести уикенд активно. Кто хочет присоединиться?",
      image: "https://download.samplelib.com/jpeg/sample-city-park-400x300.jpg",
      likes: 5,
    },
    {
      id: 9,
      text: "Люблю тихие вечера дома с любимыми сериалами.",
      image: "https://download.samplelib.com/jpeg/sample-clouds-400x300.jpg",
      likes: 3,
    },
  ],
  newPostText: "",
  userMessages: [
    {
      id: "0",
      name: "Иван",
      messages: [
        "Привет, как дела?",
        "Я занят, позже напишу.",
        "Как прошел твой день?",
        "Не забудь про нашу встречу.",
        "Встретимся завтра у метро.",
      ],
    },
    {
      id: "1",
      name: "Анастасия",
      messages: [
        "Привет! Что нового?",
        "Слышала, будет дождь завтра.",
        "Может, пойдем в кино?",
        "Спасибо за помощь!",
        "Мне нужно твое мнение.",
        "Хочешь встретиться на выходных?",
      ],
    },
    {
      id: "2",
      name: "Дмитрий",
      messages: [
        "У меня важная новость!",
        "Как насчет встретиться в пятницу?",
        "Не забудь про документы.",
        "Смотри, я нашел интересную статью.",
        "Это было просто потрясающе!",
      ],
    },
    {
      id: "3",
      name: "Ольга",
      messages: [
        "Доброе утро!",
        "Сегодня отличный день для прогулки.",
        "Я напишу тебе позже.",
        "Спасибо, это было полезно.",
        "Как твоя семья?",
        "До встречи вечером!",
        "Не забудь про мой совет.",
      ],
    },
    {
      id: "4",
      name: "Алексей",
      messages: [
        "Как ты себя чувствуешь?",
        "Позвони, когда освободишься.",
        "Я приготовил для тебя сюрприз.",
        "Ты видел, что произошло вчера?",
        "Мне нужно обсудить с тобой проект.",
        "Удачи тебе на встрече!",
      ],
    },
  ],
};

export function newPost() {
  let addNewPost = {
    id: data.userPosts.length,
    text: data.newPostText,
    image: "",
    likes: 0,
  };

  data.userPosts.push(addNewPost);
  
  console.log(data.userPosts);
}

export function changePostText(postText) {
  data.newPostText = postText;

  console.log(data.newPostText);
}

export default data;

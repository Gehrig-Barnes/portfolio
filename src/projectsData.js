import getAway from './projectImages/GetAway.png'
import cloudWatch from './projectImages/CloudWatch.png'
import planters from './projectImages/Planters.png'

const projects = [
  {
    name: "Get Away",
    description:
      "Your website is an Airbnb clone, which means it allows users to browse and book accommodations. The website is built using React and utilizes JSON Web Tokens and localStorage to securely store user information. Users can search for available accommodations using the React-Date-Range library, which allows them to select their desired check-in and check-out dates. Additionally, users can rate and comment on their room living experience, providing valuable feedback for other potential guests. Overall, your Airbnb clone website project aims to provide a seamless and user-friendly experience for those seeking temporary lodging.",
    video: "https://www.youtube.com/watch?v=ZpOB-biXSmE",
    image: getAway,
    git_hub: "https://github.com/Gehrig-Barnes/Get-Away-FE",
  },
  {
    name: "Cloud Watch",
    description:
      "Cloud Watch is a weather app that provides users with current weather information for a given zip code. Users can input a zip code and the app will retrieve and display current weather conditions for that area. Additionally, users can share weather-related articles on the app's home page. These articles can include information about weather events or climate-related news, and users can include the source of the article. The app aims to provide users with up-to-date weather information and a platform for sharing weather-related news and events.",
    video: "",
    image: cloudWatch,
    git_hub: "https://github.com/Gehrig-Barnes/cloud-watch",
  },
  {
    name: "Planters",
    description:
      "Planters is a social media app designed for plant lovers. Users can follow each other and post about plants, sharing their experiences and insights with their followers. Additionally, users can search for other users on the app and follow them to keep up with their latest plant-related content. The app aims to connect plant enthusiasts and provide a platform for sharing information and inspiration related to all things plants. Overall, Planters offers a community-oriented social media experience centered around a shared love of plants.",
    video: "",
    image: planters,
    git_hub: "https://github.com/Gehrig-Barnes/plant-project",
  },
];

export default projects;

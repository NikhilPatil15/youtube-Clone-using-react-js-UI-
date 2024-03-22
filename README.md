**YouTube Clone with React**

This project is a YouTube clone built using React, React Router, React Redux, Redux Toolkit, and Axios for fetching data from YouTube's API. This README file provides an overview of the project, instructions for setup, and how to contribute.

### Table of Contents

- [Features](#features)
- [Setup](#setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

### Features

- **YouTube Video Playback**: Users can watch YouTube videos within the application.
- **Search Functionality**: Users can search for videos using keywords.
- **Video Recommendations**: Provides a list of recommended videos based on the currently viewed video.
- **Redux State Management**: Utilizes Redux for managing application state.
- **React Router**: Implements client-side routing for navigation.
- **Axios for API Requests**: Fetches data from YouTube's API using Axios.
- **Unfortunately it's not reponsive now, but it'll get reponsive eventually**

### Setup

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```
   git clone https://github.com/yourusername/youtube-clone.git
   ```

2. **Navigate to the project directory**:
   ```
   cd youtube-clone
   ```

3. **Install dependencies**:
   ```
   npm install
   ```

4. **Set up API Key**:
   - You'll need a YouTube Data API Key to fetch data from YouTube. Obtain an API Key from the [Google Developer Console](https://console.developers.google.com/).
   - Once you have the API Key, create a `.env` file in the root directory of the project.
   - Add the following line to the `.env` file, replacing `YOUR_API_KEY` with your actual API Key:
     ```
     REACT_APP_YOUTUBE_API_KEY=YOUR_API_KEY
     ```

5. **Start the development server**:
   ```
   npm start
   ```

6. **Open the application in your browser**:
   ```
   http://localhost:3000
   ```

### Usage

- Upon opening the application, users will be presented with a search bar.
- Users can enter keywords in the search bar to search for videos.
- Clicking on a video thumbnail will open the video for playback.
- Recommended videos will be displayed alongside the currently viewed video.
- Users can navigate to different pages using the navigation bar.

### Contributing

Contributions to this project are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Create a new Pull Request.



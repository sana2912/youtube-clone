# Simple React Project (YouTube Clone)
# **see this service :** [twice tegarm backend](https://sana-youtube-clone.netlify.app/)  

A simple YouTube clone built with **JavaScript**, **React**, and **CSS**. This project demonstrates how to create a responsive video platform UI, fetching content directly from YouTube using the official API.

[Live Demo on Netlify](https://sana-youtube-clone.netlify.app/)

## Features

- **Home Page**: Displays a feed of trending or popular YouTube videos.
- **Category Feed**: Browse and display videos by selected categories.
- **Search Bar**: Search for videos and content on YouTube.
- **Individual Video Page**:
  - Displays the selected video.
  - Shows video information (title, channel, views, etc.).
  - Includes related videos feed.
  - Shows comments section.

## Technology Stack

- **Frontend**: React, JavaScript, CSS
- **APIs**: YouTube Data API (via [Google Developer Console](https://console.developers.google.com/))
- **No custom backend**: All data is fetched live from YouTube.

## Getting Started

1. **Clone the repository:**
    ```bash
    git clone https://github.com/sana2912/youtube-clone.git
    cd youtube-clone
    ```
2. **Install dependencies:**
    ```bash
    npm install
    ```
3. **Run the development server:**
    ```bash
    npm run dev
    ```

## Configuration

You will need a YouTube Data API key from Google Developer Console.  
Create a `.env` file and add your API key:
```
REACT_APP_YOUTUBE_API_KEY=your_api_key_here
```

**Note:**  
This project is for educational/demo purposes. All video and content data is fetched from YouTube using the official API; no user data is stored.

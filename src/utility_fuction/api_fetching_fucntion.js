const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;

const get_arr = async (fetch_url) => {
    const response = await fetch(fetch_url);
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    const result = await response.json();
    return result.items;
}
const get_ob = async (fetch_url) => {
    const response = await fetch(fetch_url);
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    const result = await response.json();
    return result.items[0];
}

const feed_fetching = async (cat) => {
    // arr return
    const fetch_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=24&regionCode=US&videoCategoryId=${cat}&key=${apiKey}`;
    console.log(fetch_url);
    try {
        return await get_arr(fetch_url);
    }
    catch (err) { console.error("Error fetching feeds:", err); }
}

const video_fetching = async (dis_id) => {
    const fetch_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${dis_id}&key=${apiKey}`;
    try {
        return await get_ob(fetch_url);
    }
    catch (err) { console.error("Error fetching content:", err); }
}

const comments_fetching = async (videoID) => {
    const fetch_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=10&videoId=${videoID}&key=${apiKey}`;
    // arr-return
    try {
        return await get_arr(fetch_url);
    }
    catch (err) { console.error("Error fetching feeds:", err); }
}

const search_fetching = async (search_input) => {
    // arr_return
    const fetch_url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${search_input}&key=${apiKey}`;
    try {
        return await get_arr(fetch_url);
    }
    catch (err) { console.error("Error fetching feeds:", err); }
}

const channel_fetching = async (channelID) => {
    const fetch_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelID}&key=${apiKey}`;
    try {
        return await get_ob(fetch_url);
    }
    catch (err) { console.error("Error fetching content:", err); }
}

export {
    feed_fetching,
    video_fetching,
    comments_fetching,
    search_fetching,
    channel_fetching,
}
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


*** integrate Instagram images into your website using the Instagram Graph API, follow these step-by-step instructions: ***

Step 1: 
    Set Up an Instagram Business or Creator Account
    If you don’t already have an Instagram Business or Creator account, you'll need to convert your personal Instagram account.
    Go to your Instagram profile.
    Tap the three lines in the top-right corner.
    Select Settings > Account.
    Scroll down and select Switch to Professional Account.
    Choose Business or Creator, then follow the prompts.
Step 2: 
    Set Up a Facebook Developer Account
    You need a Facebook Developer account to access Instagram’s API through Facebook.

    Go to the Facebook for Developers website.
    Log in with your Facebook account (which should be linked to the same account as your Instagram).
    Click My Apps in the top-right corner, then click Create App.
    Choose Business as the app type and fill in the required fields (name, email, etc.).
Step 3: 
    Create a Facebook App
    After setting up your developer account, you need to create a Facebook App to get an access token to use the Instagram Graph API.

    After clicking Create App, choose the Business option.
    Fill in the basic app details like the App Name, App Contact Email, and Purpose.
    Click Create App ID.
Step 4: 
    Add Instagram Basic Display API to Your App
    Go to your app’s Dashboard.
    In the left-hand sidebar, click Add a Product, then find Instagram and click Set Up under Instagram Graph API.
    In the settings, select Basic Display and configure it.
Step 5: 
    Connect Your Instagram Account to Facebook
    In Instagram settings, under the Account Center, ensure that your Instagram account is linked to your Facebook page (Business or Creator).
    Go to App Dashboard in Facebook for Developers and add the Instagram account you want to use.
Step 6: 
    Obtain an Access Token
    In the App Dashboard, under Instagram Graph API, go to User Token Generator.
    Click Generate Access Token.
    You’ll be asked to log into your Instagram Business or Creator account.
    Copy the access token.
Step 7: 
    Make API Calls to Fetch Instagram Images
    You can now use your access token to make API calls to get Instagram images. You will use the /me/media endpoint to fetch your media.
    Here’s a simple fetch request example in JSX:

    jsx
    Copy code
    {{
    import React, { useState, useEffect } from 'react';

    const InstagramFeed = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchInstagramImages = async () => {
        const token = 'YOUR_ACCESS_TOKEN'; // Replace with your access token
        const userId = 'YOUR_USER_ID'; // Replace with your Instagram User ID
        const url = `https://graph.instagram.com/${userId}/media?fields=id,caption,media_url&access_token=${token}`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            const imagePosts = data.data.filter(image => image.media_type === 'IMAGE');
            setImages(imagePosts); // Set only image posts
        } catch (error) {
            console.error('Error fetching Instagram images:', error);
        }
        };

        fetchInstagramImages();
    }, []);

    return (
        <div className="instagram-feed">
        {images.map((image) => (
            <div key={image.id} className="instagram-post">
            <img src={image.media_url} alt={image.caption} />
            </div>
        ))}
        </div>
    );
    };

    export default InstagramFeed;
    }}

Step 8: 
    Style and Embed on Your Website
    Style the images and Instagram feed as needed using CSS. Here's a basic example of CSS styling:

    css
    Copy code
    {{

    .instagram-feed {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    }

    .instagram-post img {
    width: 100%;
    max-width: 300px;
    border-radius: 10px;
    }

    }}

Step 9: 
    Test and Deploy
    Test your integration locally to ensure everything works as expected.
    Deploy your app to your production environment.
Notes:
    Token Expiry: Instagram short-lived tokens are valid for 1 hour. You may need to generate a long-lived access token that lasts up to 60 days by exchanging the short-lived token.
    Permissions: Ensure you’ve requested all necessary permissions (instagram_basic).
    Following these steps will allow you to pull and display Instagram images on your website using the Instagram Graph API!
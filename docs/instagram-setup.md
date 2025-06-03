# Instagram Feed Integration Setup

## Prerequisites

To integrate a live Instagram feed, you'll need:

1. **Instagram Business or Creator Account**
2. **Facebook Developer Account**
3. **Instagram Basic Display API** or **Instagram Graph API** access

## Setup Steps

### 1. Create Facebook App
1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Create a new app
3. Add Instagram Basic Display product

### 2. Configure Instagram Basic Display
1. Add Instagram test users
2. Generate access tokens
3. Set up webhook endpoints (optional)

### 3. Environment Variables
Add these to your `.env.local`:

\`\`\`env
INSTAGRAM_ACCESS_TOKEN=your_access_token_here
INSTAGRAM_USER_ID=your_instagram_user_id
\`\`\`

### 4. API Endpoints

The integration uses these Instagram API endpoints:

- **User Media**: `GET /{user-id}/media`
- **Media Details**: `GET /{media-id}`
- **Media Insights**: `GET /{media-id}/insights` (requires Graph API)

### 5. Rate Limits

- **Basic Display API**: 200 requests per hour per user
- **Graph API**: Higher limits for business accounts

### 6. Token Refresh

Access tokens expire after 60 days. Implement token refresh:

\`\`\`javascript
const refreshToken = async () => {
  const response = await fetch(
    `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${currentToken}`
  )
  return response.json()
}
\`\`\`

## Features Included

✅ **Live Post Fetching** - Real-time Instagram posts
✅ **Image/Video Support** - All media types
✅ **Engagement Metrics** - Likes and comments (Graph API)
✅ **Error Handling** - Graceful fallbacks
✅ **Loading States** - Smooth user experience
✅ **Responsive Design** - Mobile-friendly grid
✅ **Caching** - 10-minute cache to respect rate limits

## Security Notes

- Never expose access tokens in client-side code
- Use server-side API routes for Instagram calls
- Implement proper error handling
- Set up monitoring for API failures

## Testing

Use Instagram's test users and sandbox mode during development.

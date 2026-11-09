# Contact Form System - NammaLoo

This system stores contact form submissions in a JSON file with comprehensive metadata including date, time, IP address, and user agent information.

## Features

- ✅ **Form Data Storage**: All contact form submissions are stored in `data/contacts.json`
- ✅ **Metadata Collection**: Automatically captures:
  - Date and time (formatted)
  - IP address of the user
  - User agent (browser/device info)
  - Unique submission ID
- ✅ **Data Validation**: Validates required fields (name, email, message)
- ✅ **Error Handling**: Proper error responses and user feedback
- ✅ **Admin Access**: API endpoint to view all submissions

## Data Structure

Each contact submission is stored with the following structure:

```json
{
  "id": "1703123456789",
  "timestamp": "2023-12-21T10:30:45.123Z",
  "date": "December 21, 2023",
  "time": "10:30:45 AM EST",
  "ipAddress": "192.168.1.100",
  "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36...",
  "formData": {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "phone": "+91 98765 43210",
    "organization": "Tech Solutions Inc",
    "message": "I'm interested in partnering...",
    "type": "business"
  }
}
```

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Build the React App
```bash
npm run build
```

### 3. Start the Server
```bash
npm run server
```

Or use the combined command:
```bash
npm start
```

The server will run on `http://localhost:3001`

## API Endpoints

### POST `/api/contact`
Submit a new contact form entry.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 98765 43210",
  "organization": "Company Name",
  "message": "Your message here",
  "type": "individual"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for your message! We will get back to you soon.",
  "contactId": "1703123456789"
}
```

### GET `/api/contacts`
Retrieve all contact submissions (for admin purposes).

**Response:**
```json
{
  "success": true,
  "contacts": [
    // Array of contact entries (most recent first)
  ]
}
```

## File Locations

- **Backend Server**: `server.js`
- **Contact Data**: `data/contacts.json` (auto-created)
- **Frontend Form**: `src/pages/ContactPage.tsx`

## Security Notes

- The system captures IP addresses for tracking purposes
- User agent information is stored for analytics
- All form data is sanitized (trimmed, email lowercase)
- The `/api/contacts` endpoint should be protected in production

## Production Deployment

For production deployment:

1. **Environment Variables**: Set `PORT` environment variable
2. **HTTPS**: Use HTTPS for secure data transmission
3. **Rate Limiting**: Add rate limiting to prevent spam
4. **Authentication**: Protect the `/api/contacts` endpoint
5. **Backup**: Regularly backup the `data/contacts.json` file

## Example Usage

1. User fills out the contact form on the website
2. Form data is sent to `/api/contact` endpoint
3. Server validates data and stores it in `data/contacts.json`
4. User receives success/error message
5. Admin can view all submissions via `/api/contacts`

The system automatically creates the `data` directory and `contacts.json` file on first use. 
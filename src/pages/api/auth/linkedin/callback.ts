import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { code, state } = req.query;

  if (state !== process.env.NEXT_PUBLIC_LINKEDIN_STATE_KEY)
    return res.status(401).json({ message: 'Invalid state.' });

  const { data } = await axios.post(
    'https://www.linkedin.com/oauth/v2/accessToken',
    {
      grant_type: 'authorization_code',
      code,
      client_id: process.env.NEXT_PUBLIC_LINKEDIN_CLIENT,
      client_secret: process.env.LINKEDIN_SECRET_KEY,
      redirect_uri: process.env.NEXT_PUBLIC_LINKEDIN_REDIRECT_URI,
    },
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  );

  const { access_token } = data;

  if (!access_token) return res.status(401).json({ message: 'Invalid token.' });

  return res.status(200).json({ message: 'success' });
}

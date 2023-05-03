import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
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

    if (!access_token)
      return res.status(401).json({ message: 'Invalid token.' });

    return res.status(200).json({ access_token });

    const { data: me } = await axios.get(
      'https://api.linkedin.com/v2/userinfo',
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      },
    );

    if (!me) return res.status(401).json({ message: 'Invalid user.' });

    if (me) return res.status(200).json({ message: 'valid user' });

    const body = {
      author: `url:li:person:${me.sub}`,
      lifecycleState: 'PUBLISHED',
      specificContent: {
        shareCommentary: 'RS/XP 2023',
        shareMediaCategory: 'ARTICLE',
        media: {
          status: 'READY',
          description: 'Vamos para o rsxp galera',
          media: 'https://rsxp-card.vercel.app/api/og',
          originalUrl: 'https://www.rocketseat.com.br/eventos/rsxp',
          title: 'Testeee',
        },
      },
      visibility: 'PUBLIC',
    };

    const { data: user } = await axios.post(
      'https://api.linkedin.com/v2/ugcPosts',
      body,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      },
    );

    console.log(user);

    return res.status(200).json({ message: 'success' });
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
}

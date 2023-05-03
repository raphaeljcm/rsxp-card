// eslint-disable
import { NextApiRequest } from 'next';

import { ImageResponse } from '@vercel/og';

const backgroundImage = process.env.BACKGROUND_OG_IMAGE_URL;
export const config = {
  runtime: 'edge',
};

export default async function handler(req: NextApiRequest) {
  try {
    const { searchParams } = new URL(req.url!);
    const username = searchParams.get('login')?.slice(0, 100) || 'username';
    const name = searchParams.get('name')?.slice(0, 100) || 'name';
    const bio = searchParams.get('bio')?.slice(0, 100) || 'bio';
    const url = `https://github.com/${username}.png`;

    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            position: 'relative',
          }}
        >
          <img src={`${backgroundImage}`} alt="" />
          <img
            src={url}
            alt="profile"
            width="170"
            height="170"
            style={{
              position: 'absolute',
              right: '140px',
              top: '110px',
              borderRadius: '50%',
            }}
          />

          <div
            style={{
              width: '100%',
              maxWidth: '230px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              textAlign: 'center',
              position: 'absolute',
              top: '290px',
              right: '110px',
              gap: '5px',
            }}
          >
            <h1
              style={{
                fontFamily: "'Roboto'",
                fontWeight: 'bold',
                color: '#E1E1E6',
                fontSize: 24,
                margin: 0,
              }}
            >
              {name}
            </h1>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '5px',
                marginBottom: '20px',
              }}
            >
              <svg
                width="22"
                height="23"
                viewBox="0 0 22 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.0353 0.883057C4.9914 0.883057 0.0900879 5.80352 0.0900879 11.8734C0.0900879 16.7282 3.22627 20.8468 7.57752 22.3013C8.12484 22.4026 8.32462 22.0632 8.32462 21.7718C8.32462 21.5104 8.31504 20.8194 8.30957 19.9027C5.26506 20.5663 4.62195 18.429 4.62195 18.429C4.12525 17.1592 3.40689 16.8212 3.40689 16.8212C2.41212 16.1398 3.48078 16.1535 3.48078 16.1535C4.57954 16.2315 5.15696 17.2864 5.15696 17.2864C6.13394 18.9654 7.71982 18.481 8.34377 18.1991C8.44229 17.4889 8.72554 17.0046 9.03888 16.7295C6.60875 16.4518 4.05273 15.509 4.05273 11.2987C4.05273 10.0987 4.47965 9.11759 5.18023 8.34859C5.06666 8.07082 4.69174 6.95291 5.28695 5.44092C5.28695 5.44092 6.20646 5.14536 8.29725 6.56704C9.17024 6.32348 10.1062 6.2017 11.038 6.1976C11.9671 6.20307 12.9044 6.32348 13.7787 6.56841C15.8681 5.14673 16.7863 5.44229 16.7863 5.44229C17.3829 6.95565 17.008 8.07219 16.8958 8.34996C17.5977 9.11895 18.0205 10.1 18.0205 11.3001C18.0205 15.5213 15.4618 16.4504 13.0234 16.7227C13.4161 17.062 13.7664 17.7325 13.7664 18.7574C13.7664 20.2269 13.7527 21.4119 13.7527 21.7718C13.7527 22.066 13.9498 22.408 14.5053 22.2999C18.8497 20.8441 21.9832 16.7268 21.9832 11.8734C21.9832 5.80352 17.0818 0.883057 11.0353 0.883057Z"
                  fill="#C4C4CC"
                />
              </svg>
              <p
                style={{
                  color: '#8D8D99',
                  fontWeight: 500,
                  fontSize: 14,
                  margin: 0,
                }}
              >
                {username}
              </p>
            </div>

            <p
              style={{
                color: '#C4C4CC',
                fontWeight: 400,
                fontSize: 16,
                margin: 0,
              }}
            >
              {bio}
            </p>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (error) {
    return new Response(`Failed to generate og image`, { status: 500 });
  }
}

import React from 'react';
import {NextPage} from 'next'
import Link from 'next/link'
import {css} from '@emotion/react';
import tw from 'twin.macro';

import Layout from '~/components/layout'

const IndexPage:NextPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a css={pinkLink}>About</a>
      </Link>
    </p>
  </Layout>
)

const pinkLink = css`
  ${tw`text-pink-500 underline cursor-pointer`}
`;

export default IndexPage

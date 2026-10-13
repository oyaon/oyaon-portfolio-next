import type { NextConfig } from 'next';

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'oyaon-portfolio-next';
const isProjectPage = process.env.GITHUB_ACTIONS === 'true' && repoName !== 'oyaon.github.io';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  ...(isProjectPage ? { basePath: `/${repoName}`, assetPrefix: `/${repoName}/` } : {}),
};

export default nextConfig;

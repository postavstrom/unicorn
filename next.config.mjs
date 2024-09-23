import withTM from 'next-transpile-modules';

/** @type {import('next').NextConfig} */


const nextConfig = withTM([
  "antd",
  "rc-util",
  'rc-pagination',
  'rc-picker',
  "@ant-design/icons",
  "@material-tailwind/react"
], {
  reactStrictMode: true,
});


export default nextConfig;

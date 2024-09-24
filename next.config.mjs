import withTM from 'next-transpile-modules';

/** @type {import('next').NextConfig} */


const nextConfig = withTM([
  "antd",
  "rc-util",
  "rc-pagination",
  "rc-picker",
  "@ant-design/icons",
  "@material-tailwind/react",
  "@antv/g2",
  "@antv/g-lite",
  "@antv/g",
  "d3-array",
  "d3-color",
  "d3-format",
  "d3-shape",

], {
  reactStrictMode: true,
});


export default nextConfig;

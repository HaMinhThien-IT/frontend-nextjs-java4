import { Box, Grid } from '@mui/material';
import React from 'react';
import Slider from 'react-slick';
const sliderContent = [
  {
    heading: 'Thành quả của học viên',
    description:
      'Để đạt được kết quả tốt trong mọi việc ta cần xác định mục tiêu rõ ràng cho việc đó. Học lập trình cũng không là ngoại lệ.',
    link: 'https://fullstack.edu.vn/blog/tong-hop-cac-san-pham-cua-hoc-vien-tai-f8.html',
    img: 'https://files.fullstack.edu.vn/f8-prod/banners/Banner_01_2.png',
    button: 'Xem thành quả',
    background: 'linear-gradient(to right, rgb(118, 18, 255), rgb(5, 178, 255));',
    hover: 'background-color: var(--white-color);',
    colorText: '#7612ff',
  },
  {
    heading: 'F8 trên Youtube',
    description:
      'F8 được nhắc tới ở mọi nơi, ở đâu có cơ hội việc làm cho nghề IT và có những con người yêu thích lập trình F8 sẽ ở đó.',
    link: 'https://www.youtube.com/channel/UCNSCWwgW-rwmoE3Yc4WmJhw',
    img: 'https://files.fullstack.edu.vn/f8-prod/banners/Banner_03_youtube.png',
    button: 'Truy cập kênh',
    background: 'linear-gradient(to right, rgb(254, 33, 94), rgb(255, 148, 2));',
    hover: 'background-color: var(--white-color);',
    colorText: '#fe215e',
  },
  {
    heading: 'F8 trên Facebook',
    description:
      'F8 được nhắc tới ở mọi nơi, ở đâu có cơ hội việc làm cho nghề IT và có những con người yêu thích lập trình F8 sẽ ở đó.',
    link: 'https://www.facebook.com/groups/649972919142215',
    img: 'https://files.fullstack.edu.vn/f8-prod/banners/Banner_04_2.png',
    button: 'Truy cập nhóm',
    background: 'linear-gradient(to right, rgb(0, 126, 254), rgb(6, 195, 254));',
    hover: 'background-color: var(--white-color);',
    colorText: '#007efe',
  },
];
export default function SlideHome() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Grid container direction="row" justifyContent="space-between" alignItems="center" lg={12}>
      <Grid item lg={6}></Grid>

      <Grid item lg={6}>
        <img
          src="https://files.fullstack.edu.vn/f8-prod/banners/Banner_04_2.png"
          style={{ width: '600px', height: '270px' }}
        />
      </Grid>
    </Grid>
  );
}

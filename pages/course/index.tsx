import React, { useEffect, useState } from 'react';
import UserLayout from '../../src/components/layout-user/UserLayout';
import SlideHome from '../../src/components/slider/SlideHome';
import { courseController } from '../../src/controller/CourseController';
import { Course } from '../../src/model/Course';
import ListCourse from '../home/components/ListCourse';
import { IoIosArrowForward } from 'react-icons/io';
import { Box, Stack } from '@mui/material';
import { Category } from '../../src/model/Category';
import { categoryController } from '../../src/controller/CategoryController';
type Props = {};
type State = {
  course: Course[];
  cate: Category[];
};
export default function HomePage({}: Props) {
  const [state, setState] = useState<State>({ course: [], cate: [] });
  let dataTemp: Category[] = [];
  useEffect(() => {
    categoryController.getListCategory().then((res) => {
      dataTemp = res;
    });
    courseController.getListCourse().then((res) => {
      setState({ ...state, course: res, cate: dataTemp });
    });
  }, []);
  return (
    <Box pt={1} pl={5} pb={5} pr={5}>
      <Box
        sx={{
          fontWeight: 900,
          fontSize: '24px',
          lineHeight: '28px',
          color: '#000000',
          marginBottom: '20px',
        }}
      >
        Khóa học
      </Box>
      <Box
        sx={{
          color: '#666666',
          fontSize: '14px',
          lineHeight: '16px',
          fontWeight: 400,
          marginBottom: '50px',
        }}
      >
        Các khóa học được thiết kế phù hợp cho cả người mới, miễn phí, nội dung dễ hiểu.
      </Box>
      {state.cate.map((item, index) => (
        <Box
          sx={{
            marginBottom: '40px',
            '&:last-child': {
              marginBottom: '0px',
            },
          }}
          key={index}
        >
          <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
            <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
              <Box
                sx={{
                  fontWeight: 900,
                  fontSize: '24px',
                  lineHeight: '28px',
                  color: '#000000',
                }}
              >
                {item.name}
              </Box>
              <Box
                sx={{
                  backgroundColor: '#41117721.9e6',
                  borderRadius: '4px',
                  color: '#fff',
                  fontSize: '12px',
                  fontWeight: 500,
                  padding: '3px 6px',
                  position: 'relative',
                  textTransform: 'uppercase',
                  width: '37px',
                }}
              >
                MỚI
              </Box>
            </Stack>
            <Stack direction="row" justifyContent="center" alignItems="center">
              <Box
                sx={{
                  color: '#f05123',
                  fontSize: '15px',
                  lineHeight: '17px',
                  fontWeight: 600,
                }}
              >
                Xem chi tiết
              </Box>
              <IoIosArrowForward fill="#f05123" />
            </Stack>
          </Stack>
          <Box>
            <ListCourse idCate={item.idCategory} cousre={state.course} />
          </Box>
        </Box>
      ))}
    </Box>
  );
}
HomePage.getLayout = UserLayout;

import { Box, Grid, Stack } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { formatMoney } from '../../../src/helper/format';
import { generateNameId } from '../../../src/helper/helper';
import { Course } from '../../../src/model/Course';
type Props = {
  cousre: Course[];
  idCate: number;
};
function ListCourse(props: Props) {
  let x = Math.floor(Math.random() * 10000 + 789);
  let newArr = props.cousre.filter((item) => item.idCategory == props.idCate);

  return (
    <Box>
      <Grid mt={0.5} container direction="row" justifyContent="flex-start" alignItems="center" spacing={3} lg={12}>
        {newArr.map((item, index) => (
          <Link key={index} href={`/course/${generateNameId(item.title, item.idCourse)}`}>
            <Grid item lg={2.9}>
              <img
                src={item.imageCourse}
                width={'100%'}
                style={{
                  borderRadius: '20px',
                }}
              />
              <Box
                sx={{
                  color: '#292929',
                  fontWeight: 600,
                  lineHeight: '22px',
                  fontSize: '16px',
                  marginTop: '8px',
                }}
              >
                {item.title}
              </Box>
              <Stack mt={1} direction="row" justifyContent="flex-start" alignItems="center" spacing={1}>
                <svg
                  width={'17px'}
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="users"
                  className="svg-inline--fa fa-users "
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path
                    fill="currentColor"
                    d="M319.9 320c57.41 0 103.1-46.56 103.1-104c0-57.44-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104C215.9 273.4 262.5 320 319.9 320zM369.9 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h327.2C499.3 512 512 500.1 512 485.3C512 411.7 448.4 352 369.9 352zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM183.9 216c0-5.449 .9824-10.63 1.609-15.91C174.6 194.1 162.6 192 149.9 192H88.08C39.44 192 0 233.8 0 285.3C0 295.6 7.887 304 17.62 304h199.5C196.7 280.2 183.9 249.7 183.9 216zM128 160c44.18 0 80-35.82 80-80S172.2 0 128 0C83.82 0 48 35.82 48 80S83.82 160 128 160zM551.9 192h-61.84c-12.8 0-24.88 3.037-35.86 8.24C454.8 205.5 455.8 210.6 455.8 216c0 33.71-12.78 64.21-33.16 88h199.7C632.1 304 640 295.6 640 285.3C640 233.8 600.6 192 551.9 192z"
                  />
                </svg>
                <Box
                  sx={{
                    color: '#666666',
                    fontSize: '14px',
                    lineHeight: '16px',
                    fontWeight: 400,
                  }}
                >
                  {formatMoney(x + item.idCourse * x - 9646)}
                </Box>
              </Stack>
            </Grid>
          </Link>
        ))}
      </Grid>
    </Box>
  );
}

export default ListCourse;

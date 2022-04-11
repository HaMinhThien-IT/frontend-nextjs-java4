import { Box, Button, Grid, Stack } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import KeyCourse from '../../src/components/key-course/KeyCourse';
import UserLayout from '../../src/components/layout-user/UserLayout';
import { courseController } from '../../src/controller/CourseController';
import { getIdFromNameId } from '../../src/helper/helper';
import useLocalStorage, { parseJSON } from '../../src/hook/useLocalStorage';
import { Cart } from '../../src/model/Cart';
import { Course } from '../../src/model/Course';
import { authContext } from '../../src/store/Auth';
import { cartContext } from '../../src/store/Cart';

type Props = {};
type State = {
  course: Course;
};
export default function DetailCourse({}: Props) {
  const [state, setState] = useState<State>({
    course: { idCourse: 0, imageCourse: '', title: '', content: '', description: '', name: '', idCategory: 0 },
  });
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const realId = getIdFromNameId(String(id));
    if (!isNaN(Number(realId))) {
      courseController.getCourseById(Number(realId)).then((res) => {
        setState({ ...state, course: res });
      });
    }
  }, [id]);
  const { getMe } = useContext(authContext);
  const arr = state.course.content.split('<p>');
  const arrr = arr.filter((item) => item != '');

  const uuidCart = uuidv4();
  const keyLocal: string = `cart-${getMe.idUser}`;
  let x = Math.floor(Math.random() * 10000 + 1);
  const itemCart: Cart = {
    idCart: uuidCart,
    idCourse: state.course.idCourse,
    idUser: 12,
    imageCourse: state.course.imageCourse,
    price: x + x * 230,
    title: state.course.title,
  };
  const { onListCart } = useContext(cartContext);

  const addToCart = () => {
    if (getMe.idUser >= 1) {
      let check = false;
      const itemCarts: Cart[] = parseJSON(localStorage.getItem(keyLocal)) || [];
      for (let i = 0; i < itemCarts.length; i++) {
        if (itemCarts[i]?.idCourse === itemCart.idCourse) {
          check = true;
        } else {
          check = false;
        }
      }
      if (!check) {
        itemCarts.push(itemCart);
        localStorage.setItem(keyLocal, JSON.stringify(itemCarts));
        onListCart();
        toast.success('Mua thành công ', {
          position: 'top-center',
          autoClose: 3000,
        });
      } else {
        toast.error('Bạn đã mua khóa học này rồi mà ? ', {
          position: 'top-center',
          autoClose: 3000,
        });
      }
    } else {
      router.push('/login');
    }
  };

  return (
    <Box pt={3} pl={5} pb={5} pr={5}>
      <Grid container direction="row" justifyContent="center" alignItems="flex-start" lg={12}>
        <Grid item lg={8} pr={7}>
          <Box
            sx={{
              fontWeight: 700,
              fontSize: '32px',
              lineHeight: '37px',
              color: '#000000',
            }}
          >
            {state.course.title}
          </Box>
          <Box
            sx={{
              color: '#666666',
              fontSize: '14px',
              lineHeight: '16px',
              fontWeight: 400,
              marginTop: '30px',
            }}
          >
            {state.course.description}
          </Box>
          <Box
            sx={{
              color: '#000000',
              fontSize: '20px',
              lineHeight: '23px',
              fontWeight: 700,
              marginTop: '30px',
            }}
          >
            Bạn sẽ học được gì?
          </Box>
          <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start" lg={12}>
            {arrr.map((item, index) => (
              <Grid key={index} mt={2} lg={6}>
                <Stack direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={1}>
                  <svg
                    width={'13px'}
                    style={{
                      marginTop: '3px',
                    }}
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="check"
                    className="svg-inline--fa fa-check CourseDetail_icon__sLJtd"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="rgb(240,81,35)"
                      d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"
                    />
                  </svg>
                  <Box
                    sx={{
                      color: '#333333',
                      fontSize: '14px',
                      lineHeight: '22px',
                      fontWeight: 400,
                    }}
                    dangerouslySetInnerHTML={{ __html: `<p className="hihihi" style="margin: 0;">${item}` || '' }}
                  ></Box>
                </Stack>
              </Grid>
            ))}
          </Grid>
          <Box
            sx={{
              color: '#000000',
              fontSize: '20px',
              lineHeight: '23px',
              fontWeight: 700,
              marginTop: '40px',
            }}
          >
            Nội dung khóa học
            <p style={{ margin: 0 }}></p>
          </Box>
          <KeyCourse />
        </Grid>

        <Grid item lg={3.5}>
          <Grid
            sx={{
              width: '100%',
              position: 'relative',
              '&:after': {
                backgroundImage: 'linear-gradient(180deg,rgba(30,30,28,0),rgba(30,30,28,.9))',
                bottom: '0',
                content: '""',
                display: 'block',
                left: '0',
                position: 'absolute',
                right: '0',
                top: '0',
                zIndex: 1,
                transition: 'all .3s linear',
                borderRadius: '20px',
              },
            }}
            item
            lg={12}
          >
            <Box
              sx={{
                position: 'absolute',
                top: '30%',
                left: '42%',
                zIndex: 99,
              }}
            >
              <svg
                width={'60px'}
                height={'60px'}
                style={{
                  cursor: 'pointer',
                }}
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="circle-play"
                className="svg-inline--fa fa-circle-play CourseDetail_icon__sLJtd"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#FFFF"
                  d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM176 168V344C176 352.7 180.7 360.7 188.3 364.9C195.8 369.2 205.1 369 212.5 364.5L356.5 276.5C363.6 272.1 368 264.4 368 256C368 247.6 363.6 239.9 356.5 235.5L212.5 147.5C205.1 142.1 195.8 142.8 188.3 147.1C180.7 151.3 176 159.3 176 168V168z"
                />
              </svg>
              <Box
                sx={{
                  position: 'relative',
                  top: '5px',
                  left: '-36%',
                  color: '#ffffff',
                  lineHeight: '18px',
                  fontSize: '16px',
                  fontWeight: 600,
                }}
              >
                Xem giới thiệu khóa học{' '}
              </Box>
            </Box>

            <Box>
              <img
                src={state.course.imageCourse}
                style={{
                  width: '100%',
                  borderRadius: '20px',
                }}
              />
            </Box>
          </Grid>
          <Grid lg={12}>
            <Stack mt={3} direction={'column'} justifyContent="center" alignItems="center">
              <Box
                sx={{
                  color: '#f05123',
                  fontSize: '32px',
                  lineHeight: '37px',
                  fontWeight: 400,
                }}
              >
                Miễn phí
              </Box>
              <button
                onClick={() => addToCart()}
                style={{
                  background: 'rgb(240,81,35)',
                  marginTop: '16px',
                  minWidth: '180px',
                  padding: '10px 20px',
                  border: 'none',
                  outline: 'none',
                  borderRadius: '20px',
                  color: '#ffffff',
                  fontSize: '16px',
                  lineHeight: '18px',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                ĐĂNG KÍ HỌC
              </button>
            </Stack>
            <Stack mt={2} direction={'column'} justifyContent="flex-start" alignItems="flex-start">
              <Stack p={0.7} pl={10} direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
                <svg
                  width={'14px'}
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="gauge-high"
                  className="svg-inline--fa fa-gauge-high CourseDetail_icon__sLJtd"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="black"
                    d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 64C238.3 64 224 78.33 224 96C224 113.7 238.3 128 256 128C273.7 128 288 113.7 288 96C288 78.33 273.7 64 256 64zM256 416C291.3 416 320 387.3 320 352C320 334.6 313.1 318.9 301.9 307.4L365.1 161.7C371.3 149.5 365.8 135.4 353.7 130C341.5 124.7 327.4 130.2 322 142.3L257.9 288C257.3 288 256.6 287.1 256 287.1C220.7 287.1 192 316.7 192 352C192 387.3 220.7 416 256 416V416zM144 112C126.3 112 112 126.3 112 144C112 161.7 126.3 176 144 176C161.7 176 176 161.7 176 144C176 126.3 161.7 112 144 112zM96 288C113.7 288 128 273.7 128 256C128 238.3 113.7 224 96 224C78.33 224 64 238.3 64 256C64 273.7 78.33 288 96 288zM416 224C398.3 224 384 238.3 384 256C384 273.7 398.3 288 416 288C433.7 288 448 273.7 448 256C448 238.3 433.7 224 416 224z"
                  />
                </svg>
                <Box> Trình độ cơ bản</Box>
              </Stack>

              <Stack p={0.7} pl={10} direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
                <svg
                  width={'14px'}
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="film"
                  className="svg-inline--fa fa-film CourseDetail_icon__sLJtd"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M463.1 32h-416C21.49 32-.0001 53.49-.0001 80v352c0 26.51 21.49 48 47.1 48h416c26.51 0 48-21.49 48-48v-352C511.1 53.49 490.5 32 463.1 32zM111.1 408c0 4.418-3.582 8-8 8H55.1c-4.418 0-8-3.582-8-8v-48c0-4.418 3.582-8 8-8h47.1c4.418 0 8 3.582 8 8L111.1 408zM111.1 280c0 4.418-3.582 8-8 8H55.1c-4.418 0-8-3.582-8-8v-48c0-4.418 3.582-8 8-8h47.1c4.418 0 8 3.582 8 8V280zM111.1 152c0 4.418-3.582 8-8 8H55.1c-4.418 0-8-3.582-8-8v-48c0-4.418 3.582-8 8-8h47.1c4.418 0 8 3.582 8 8L111.1 152zM351.1 400c0 8.836-7.164 16-16 16H175.1c-8.836 0-16-7.164-16-16v-96c0-8.838 7.164-16 16-16h160c8.836 0 16 7.162 16 16V400zM351.1 208c0 8.836-7.164 16-16 16H175.1c-8.836 0-16-7.164-16-16v-96c0-8.838 7.164-16 16-16h160c8.836 0 16 7.162 16 16V208zM463.1 408c0 4.418-3.582 8-8 8h-47.1c-4.418 0-7.1-3.582-7.1-8l0-48c0-4.418 3.582-8 8-8h47.1c4.418 0 8 3.582 8 8V408zM463.1 280c0 4.418-3.582 8-8 8h-47.1c-4.418 0-8-3.582-8-8v-48c0-4.418 3.582-8 8-8h47.1c4.418 0 8 3.582 8 8V280zM463.1 152c0 4.418-3.582 8-8 8h-47.1c-4.418 0-8-3.582-8-8l0-48c0-4.418 3.582-8 7.1-8h47.1c4.418 0 8 3.582 8 8V152z"
                  />
                </svg>

                <Box>Tổng số 10 bài học</Box>
              </Stack>

              <Stack p={0.7} pl={10} direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
                <svg
                  width={'14px'}
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="clock"
                  className="svg-inline--fa fa-clock CourseDetail_icon__sLJtd"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"
                  />
                </svg>

                <Box>Thời lượng 03 giờ 25 phút</Box>
              </Stack>

              <Stack p={0.7} pl={10} direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
                <svg
                  width={'14px'}
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="battery-full"
                  className="svg-inline--fa fa-battery-full CourseDetail_icon__sLJtd"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M448 320H96V192H448V320zM0 176C0 131.8 35.82 96 80 96H464C508.2 96 544 131.8 544 176V192C561.7 192 576 206.3 576 224V288C576 305.7 561.7 320 544 320V336C544 380.2 508.2 416 464 416H80C35.82 416 0 380.2 0 336V176zM80 160C71.16 160 64 167.2 64 176V336C64 344.8 71.16 352 80 352H464C472.8 352 480 344.8 480 336V176C480 167.2 472.8 160 464 160H80z"
                  />
                </svg>

                <Box>Học mọi lúc, mọi nơi</Box>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
DetailCourse.getLayout = UserLayout;

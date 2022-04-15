import { Box, Grid, Stack } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import UserLayout from '../../src/components/layout-user/UserLayout';
import { BiBookAlt } from 'react-icons/bi';
import { AiOutlineCode, AiOutlineCodepenCircle, AiOutlineMacCommand } from 'react-icons/ai';
import { orderController } from '../../src/controller/OrderController';
import { OrderCourseJoin, OrderPagination } from '../../src/model/Order';
import { authContext } from '../../src/store/Auth';
import moment from 'moment';
import Pagination from '@mui/material/Pagination';
type State = {
  listOrder: OrderCourseJoin[];
  total: number;
};
export default function ListOrder() {
  const { getMe } = useContext(authContext);
  const [state, setState] = useState<State>({ listOrder: [], total: 0 });
  let totalTemp: number = 0;
  let pageSizes = 2;
  useEffect(() => {
    const orderP: OrderPagination = {
      idUser: getMe.idUser,
      page: 1,
      pageSize: pageSizes,
    };
    orderController.getTotal(getMe.idUser).then((res1) => {
      totalTemp = res1.length;
    });
    orderController.listOrderById(orderP).then((res) => {
      console.log(res);

      setState({ ...state, listOrder: res, total: totalTemp });
    });
  }, [getMe.idUser]);
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    const orderP: OrderPagination = {
      idUser: getMe.idUser,
      page: page,
      pageSize: pageSizes,
    };
    orderController.listOrderById(orderP).then((res) => {
      setState({ ...state, listOrder: res });
    });
  };
  return (
    <Grid pt={2} container direction="row" justifyContent="space-between" alignItems="flex-start">
      <Grid
        sx={{
          boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
          borderRadius: '10px',
        }}
        item
        lg={2.5}
      >
        <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={2} p={3}>
          <img src={getMe.imgUser} alt="" width="100%" style={{ maxWidth: '50px', borderRadius: '50%' }} />
          <Box
            sx={{
              color: '#273167',
              fontSize: '20px',
              lineHeight: '30px',
              fontWeight: 700,
            }}
          >
            {getMe.name || getMe.email}
            <Box sx={{ color: '#666666', fontSize: '16px', lineHeight: '24px', fontWeight: 400 }}>
              Người dùng tại F8
            </Box>
          </Box>
        </Stack>
        <Stack p={3} pt={0} direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
          <BiBookAlt fontSize={'25px'} color="#273167" />
          <Box
            sx={{
              color: '#273167',
              fontSize: '16px',
              lineHeight: '27px',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            Khu vực học tập
          </Box>
        </Stack>
        <Stack p={3} pt={0} direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
          <AiOutlineMacCommand fontSize={'25px'} color="#273167" />
          <Box
            sx={{
              color: '#273167',
              fontSize: '16px',
              lineHeight: '27px',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            Thành viên vàng
          </Box>
        </Stack>
        <Stack p={3} pt={0} direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
          <AiOutlineCode fontSize={'25px'} color="#273167" />
          <Box
            sx={{
              color: '#273167',
              fontSize: '16px',
              lineHeight: '27px',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            Kích hoạt mã
          </Box>
        </Stack>
        <Stack p={3} pt={0} direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
          <AiOutlineCodepenCircle fontSize={'25px'} color="#273167" />
          <Box
            sx={{
              color: '#273167',
              fontSize: '16px',
              lineHeight: '27px',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            Nhận hộ trợ
          </Box>
        </Stack>
      </Grid>

      <Grid item lg={8.8}>
        <Box
          sx={{
            color: '#273167',
            fontSize: '25px',
            lineHeight: '38px',
            fontWeight: 800,
            cursor: 'pointer',
          }}
        >
          Khu vực học tập
        </Box>
        <Box
          sx={{
            color: '#444655',
            fontSize: '16px',
            lineHeight: '24px',
            fontWeight: 400,
            cursor: 'pointer',
          }}
        >
          Khóa học, tài liệu mà bạn đăng ký sẽ được hiển thị dưới đây
        </Box>
        <Stack mt={2} direction="column" justifyContent="center" alignItems="center" spacing={2}>
          {state.listOrder &&
            state.listOrder.map((item, index) => (
              <Grid
                key={index}
                sx={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px', borderRadius: '10px', padding: '20px' }}
                container
                lg={12}
              >
                <Grid item lg={3.5}>
                  <img
                    src={item.imageCourse}
                    alt=""
                    style={{
                      width: '100%',
                      maxWidth: '199px',
                      height: 'auto',
                      borderRadius: '20px',
                      boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                    }}
                  />
                </Grid>
                <Grid item lg={8.5}>
                  <Box
                    sx={{
                      fontWeight: 700,
                      fontSize: '21px',
                      lineHeight: '32px',
                      color: '#474747',
                    }}
                  >
                    {item.title}
                  </Box>
                  <Stack direction="row" mt={1} spacing={3}>
                    <Box
                      sx={{
                        color: '#444655',
                        fontSize: '16px',
                        lineHeight: '24px',
                        fontWeight: 400,
                        cursor: 'pointer',
                      }}
                    >
                      {item.description.length > 125 ? item.description.slice(0, 125) + ' ...' : item.description}
                    </Box>
                  </Stack>
                  <Stack direction="row" justifyContent="space-between" alignItems="center" mt={1} spacing={3}>
                    <Box
                      sx={{
                        color: '#444655',
                        fontSize: '16px',
                        lineHeight: '24px',
                        fontWeight: 400,
                        cursor: 'pointer',
                      }}
                    >
                      <span
                        style={{
                          color: '#000000',
                          fontSize: '14px',
                          lineHeight: '16px',
                          fontWeight: 600,
                        }}
                      >
                        Ngày đăng ký
                      </span>
                      : {moment(item.timeOrder).format('DD-MM-YYYY')}
                    </Box>
                    <Box
                      sx={{
                        color: '#f05123',
                        fontWeight: 600,
                        lineHeight: '16px',
                        fontSize: '14px',
                      }}
                    >
                      Xem chi tiết khóa học
                    </Box>
                  </Stack>
                </Grid>
              </Grid>
            ))}
          <Grid item>
            <Pagination
              page={page}
              onChange={handleChange}
              count={Math.ceil(Number(state.total / pageSizes))}
              variant="outlined"
              color="primary"
            />
          </Grid>
        </Stack>
      </Grid>
    </Grid>
  );
}
ListOrder.getLayout = UserLayout;

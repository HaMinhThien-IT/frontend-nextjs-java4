import { Box, Grid, Stack } from '@mui/material';
import React, { useContext } from 'react';
import UserLayout from '../../src/components/layout-user/UserLayout';
import { cartContext } from '../../src/store/Cart';
import { formatMoney } from '../../src/helper/format';
import Link from 'next/link';
import { authContext } from '../../src/store/Auth';
import { orderController } from '../../src/controller/OrderController';
import { OrderCourse, Orders } from '../../src/model/Order';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
export default function Cart() {
  const router = useRouter();
  const { listCart, onListCart } = useContext(cartContext);
  const { getMe } = useContext(authContext);
  const removeItem = (index: number) => {
    const user_id = getMe.idUser;
    const keyLocal: string = `cart-${user_id}`;
    listCart.splice(index, 1);
    localStorage.setItem(keyLocal, JSON.stringify(listCart));
    onListCart();
  };
  const checkout = () => {
    const user_id = getMe.idUser;
    const keyLocal: string = `cart-${user_id}`;
    const order: Orders = {
      idOrders: uuidv4(),
      timeOrder: '',
      status: 1,
      idUser: Number(getMe.idUser),
      paymentMethods: 'Viettel Pay',
      bankNumber: 56,
    };

    orderController
      .addOrder(order)
      .then(() => {
        for (let i = 0; i < listCart.length; i++) {
          const orderCourse: OrderCourse = {
            idOrders: order.idOrders,
            idOrderCourse: uuidv4(),
            idCourse: Number(listCart[i].idCourse),
            priceCourseOrder: Number(listCart[i].price),
          };
          orderController.addOrderCourse(orderCourse);
        }
      })
      .then(() => {
        toast.success('Thanh toán thành công', {
          position: 'top-center',
          autoClose: 3000,
        });
        localStorage.removeItem(keyLocal);
        router.push('/list-order');
        onListCart();
      });
  };
  return (
    <Stack mt={2} direction="column" justifyContent="center" alignItems="center" spacing={2}>
      {listCart.length >= 1 ? (
        <Box
          sx={{
            fontWeight: 700,
            fontSize: '32px',
            lineHeight: '37px',
            color: '#000000',
          }}
        >
          Xem lại yêu cầu đăng ký
        </Box>
      ) : (
        <Box
          sx={{
            fontWeight: 700,
            fontSize: '32px',
            lineHeight: '37px',
            color: '#000000',
          }}
        >
          Bạn chưa đăng ký khóa học nào
        </Box>
      )}

      {listCart &&
        listCart.map((item, index) => (
          <Grid
            key={index}
            sx={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px', borderRadius: '10px', padding: '20px' }}
            container
            lg={8}
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
            <Grid mt={2} item lg={8.5}>
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
                    fontWeight: 700,
                    fontSize: '21px',
                    lineHeight: '32px',
                    color: '#46b5a1',
                  }}
                >
                  {formatMoney(Number(item.price))}đ
                </Box>
                <Box
                  sx={{
                    fontWeight: 500,
                    fontSize: '21px',
                    lineHeight: '32px',
                    color: '#545454',
                    textDecorationLine: 'line-through',
                  }}
                >
                  {formatMoney(Number(item.price) + 9999)}đ
                </Box>
                <Box
                  onClick={() => removeItem(index)}
                  sx={{
                    fontWeight: 400,
                    fontSize: '20px',
                    lineHeight: '32px',
                    color: '#2979ff ',
                    paddingLeft: '130px',
                    cursor: 'pointer',
                  }}
                >
                  Bỏ khóa này
                </Box>
              </Stack>
            </Grid>
          </Grid>
        ))}
      {listCart.length >= 1 ? (
        <button
          onClick={() => checkout()}
          style={{
            background: 'rgb(240,81,35)',
            marginTop: '16px',
            padding: '10px 20px',
            border: 'none',
            outline: 'none',
            borderRadius: '5px',
            color: '#ffffff',
            fontSize: '16px',
            lineHeight: '18px',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Hoàn tất đăng ký
        </button>
      ) : (
        <Link href={'/course'}>
          <a>
            <button
              style={{
                background: 'rgb(240,81,35)',
                marginTop: '16px',
                padding: '10px 20px',
                border: 'none',
                outline: 'none',
                borderRadius: '5px',
                color: '#ffffff',
                fontSize: '16px',
                lineHeight: '18px',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Tham khảo các khóa học lại F8
            </button>
          </a>
        </Link>
      )}
    </Stack>
  );
}
Cart.getLayout = UserLayout;

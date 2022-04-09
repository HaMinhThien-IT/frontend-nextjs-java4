import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

import StarBorder from '@mui/icons-material/StarBorder';
import { AiOutlinePlus } from 'react-icons/ai';
import { HiOutlineMinusSm } from 'react-icons/hi';
import { Box, Typography } from '@mui/material';

export default function ListKeyCourse() {
  const [open, setOpen] = React.useState(false);
  const [opens, setOpens] = React.useState(true);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const handleClicks = () => {
    setOpens(!opens);
  };
  const handleClick3 = () => {
    setOpen3(!open3);
  };
  const handleClick4 = () => {
    setOpen4(!open4);
  };
  const openAll = () => {
    setOpen(!open);
    setOpen3(!open3);
    setOpens(!opens);
    setOpen4(!open4);
  };
  return (
    <List
      sx={{ width: '100%', bgcolor: 'background.paper', marginTop: '7px' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton
        sx={{
          backgroundColor: 'rgb(245,245,245)',
          borderRadius: '5px',
          border: '1px solid #ebebeb',
          padding: '10px',
          marginTop: '5px',
        }}
        onClick={handleClicks}
      >
        <ListItemIcon sx={{ minWidth: '30px' }}>
          {opens ? <HiOutlineMinusSm style={{ color: 'red' }} /> : <AiOutlinePlus style={{ color: 'red' }} />}
        </ListItemIcon>
        <ListItemText
          primary={
            <Box
              sx={{ color: '#333333', lineHeight: '18px', fontSize: '16px', fontWeight: 600, fontFamily: 'Montserrat' }}
            >
              1. Khái niệm kĩ thuật cần biết
            </Box>
          }
        />
        <Box>2 bài học </Box>
      </ListItemButton>
      <Collapse in={opens} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 5 }}>
            <svg
              width={'14px'}
              style={{
                marginRight: '13px',
              }}
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="circle-play"
              className="svg-inline--fa fa-circle-play CurriculumOfCourse_icon__1fxR9 CurriculumOfCourse_video__GQtG1"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="rgba(240,81,35,.4)"
                d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM176 168V344C176 352.7 180.7 360.7 188.3 364.9C195.8 369.2 205.1 369 212.5 364.5L356.5 276.5C363.6 272.1 368 264.4 368 256C368 247.6 363.6 239.9 356.5 235.5L212.5 147.5C205.1 142.1 195.8 142.8 188.3 147.1C180.7 151.3 176 159.3 176 168V168z"
              />
            </svg>
            <ListItemText
              primary={
                <Box
                  sx={{
                    color: '#333333',
                    fontSize: '14px',
                    fontWeight: 400,
                    fontFamily: 'Montserrat',
                  }}
                >
                  1. Mô hình Client - Server là gì?
                </Box>
              }
            />
            <Box>11:35 </Box>
          </ListItemButton>

          <ListItemButton sx={{ pl: 5 }}>
            <svg
              width={'14px'}
              style={{
                marginRight: '13px',
              }}
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="circle-play"
              className="svg-inline--fa fa-circle-play CurriculumOfCourse_icon__1fxR9 CurriculumOfCourse_video__GQtG1"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="rgba(240,81,35,.4)"
                d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM176 168V344C176 352.7 180.7 360.7 188.3 364.9C195.8 369.2 205.1 369 212.5 364.5L356.5 276.5C363.6 272.1 368 264.4 368 256C368 247.6 363.6 239.9 356.5 235.5L212.5 147.5C205.1 142.1 195.8 142.8 188.3 147.1C180.7 151.3 176 159.3 176 168V168z"
              />
            </svg>
            <ListItemText
              primary={
                <Box
                  sx={{
                    color: '#333333',
                    fontSize: '14px',
                    fontWeight: 400,
                    fontFamily: 'Montserrat',
                  }}
                >
                  2. Domain là gì? Tên miền là gì?
                </Box>
              }
            />
            <Box>10:35</Box>
          </ListItemButton>
        </List>
      </Collapse>

      {/* list 2 */}

      <ListItemButton
        sx={{
          backgroundColor: 'rgb(245,245,245)',
          borderRadius: '5px',
          border: '1px solid #ebebeb',
          padding: '10px',
          marginTop: '5px',
        }}
        onClick={handleClick}
      >
        <ListItemIcon sx={{ minWidth: '30px' }}>
          {open ? <HiOutlineMinusSm style={{ color: 'red' }} /> : <AiOutlinePlus style={{ color: 'red' }} />}
        </ListItemIcon>
        <ListItemText
          primary={
            <Box
              sx={{ color: '#333333', lineHeight: '18px', fontSize: '16px', fontWeight: 600, fontFamily: 'Montserrat' }}
            >
              2. Môi trường , con người IT
            </Box>
          }
        />
        <Box>3 bài học </Box>
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 5 }}>
            <svg
              width={'14px'}
              style={{
                marginRight: '13px',
              }}
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="circle-play"
              className="svg-inline--fa fa-circle-play CurriculumOfCourse_icon__1fxR9 CurriculumOfCourse_video__GQtG1"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="rgba(240,81,35,.4)"
                d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM176 168V344C176 352.7 180.7 360.7 188.3 364.9C195.8 369.2 205.1 369 212.5 364.5L356.5 276.5C363.6 272.1 368 264.4 368 256C368 247.6 363.6 239.9 356.5 235.5L212.5 147.5C205.1 142.1 195.8 142.8 188.3 147.1C180.7 151.3 176 159.3 176 168V168z"
              />
            </svg>
            <ListItemText
              primary={
                <Box
                  sx={{
                    color: '#333333',
                    fontSize: '14px',
                    fontWeight: 400,
                    fontFamily: 'Montserrat',
                  }}
                >
                  3. Học IT cần tố chất gì? Góc nhìn khác từ chuyên gia định hướng giáo dục
                </Box>
              }
            />
            <Box>24:10</Box>
          </ListItemButton>

          <ListItemButton sx={{ pl: 5 }}>
            <svg
              width={'14px'}
              style={{
                marginRight: '13px',
              }}
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="circle-play"
              className="svg-inline--fa fa-circle-play CurriculumOfCourse_icon__1fxR9 CurriculumOfCourse_video__GQtG1"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="rgba(240,81,35,.4)"
                d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM176 168V344C176 352.7 180.7 360.7 188.3 364.9C195.8 369.2 205.1 369 212.5 364.5L356.5 276.5C363.6 272.1 368 264.4 368 256C368 247.6 363.6 239.9 356.5 235.5L212.5 147.5C205.1 142.1 195.8 142.8 188.3 147.1C180.7 151.3 176 159.3 176 168V168z"
              />
            </svg>
            <ListItemText
              primary={
                <Box
                  sx={{
                    color: '#333333',
                    fontSize: '14px',
                    fontWeight: 400,
                    fontFamily: 'Montserrat',
                  }}
                >
                  4. Sinh viên IT đi thực tập tại doanh nghiệp cần biết những gì?
                </Box>
              }
            />
            <Box>34:51</Box>
          </ListItemButton>

          <ListItemButton sx={{ pl: 5 }}>
            <svg
              width={'14px'}
              style={{
                marginRight: '13px',
              }}
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="circle-play"
              className="svg-inline--fa fa-circle-play CurriculumOfCourse_icon__1fxR9 CurriculumOfCourse_video__GQtG1"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="rgba(240,81,35,.4)"
                d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM176 168V344C176 352.7 180.7 360.7 188.3 364.9C195.8 369.2 205.1 369 212.5 364.5L356.5 276.5C363.6 272.1 368 264.4 368 256C368 247.6 363.6 239.9 356.5 235.5L212.5 147.5C205.1 142.1 195.8 142.8 188.3 147.1C180.7 151.3 176 159.3 176 168V168z"
              />
            </svg>
            <ListItemText
              primary={
                <Box
                  sx={{
                    color: '#333333',
                    fontSize: '14px',
                    fontWeight: 400,
                    fontFamily: 'Montserrat',
                  }}
                >
                  5. Trải nghiệm thực tế sau 2 tháng làm việc tại doanh nghiệp của học viên F8?
                </Box>
              }
            />
            <Box>47:13</Box>
          </ListItemButton>
        </List>
      </Collapse>

      {/* list 3 */}
      <ListItemButton
        sx={{
          backgroundColor: 'rgb(245,245,245)',
          borderRadius: '5px',
          border: '1px solid #ebebeb',
          padding: '10px',
          marginTop: '5px',
        }}
        onClick={handleClick3}
      >
        <ListItemIcon sx={{ minWidth: '30px' }}>
          {open3 ? <HiOutlineMinusSm style={{ color: 'red' }} /> : <AiOutlinePlus style={{ color: 'red' }} />}
        </ListItemIcon>
        <ListItemText
          primary={
            <Box
              sx={{ color: '#333333', lineHeight: '18px', fontSize: '16px', fontWeight: 600, fontFamily: 'Montserrat' }}
            >
              3. Phương pháp,định hướng
            </Box>
          }
        />
        <Box>4 bài học </Box>
      </ListItemButton>
      <Collapse in={open3} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 5 }}>
            <svg
              width={'14px'}
              style={{
                marginRight: '13px',
              }}
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="circle-play"
              className="svg-inline--fa fa-circle-play CurriculumOfCourse_icon__1fxR9 CurriculumOfCourse_video__GQtG1"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="rgba(240,81,35,.4)"
                d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM176 168V344C176 352.7 180.7 360.7 188.3 364.9C195.8 369.2 205.1 369 212.5 364.5L356.5 276.5C363.6 272.1 368 264.4 368 256C368 247.6 363.6 239.9 356.5 235.5L212.5 147.5C205.1 142.1 195.8 142.8 188.3 147.1C180.7 151.3 176 159.3 176 168V168z"
              />
            </svg>
            <ListItemText
              primary={
                <Box
                  sx={{
                    color: '#333333',
                    fontSize: '14px',
                    fontWeight: 400,
                    fontFamily: 'Montserrat',
                  }}
                >
                  3. Học IT cần tố chất gì? Góc nhìn khác từ chuyên gia định hướng giáo dục
                </Box>
              }
            />
            <Box>24:10</Box>
          </ListItemButton>

          <ListItemButton sx={{ pl: 5 }}>
            <svg
              width={'14px'}
              style={{
                marginRight: '13px',
              }}
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="circle-play"
              className="svg-inline--fa fa-circle-play CurriculumOfCourse_icon__1fxR9 CurriculumOfCourse_video__GQtG1"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="rgba(240,81,35,.4)"
                d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM176 168V344C176 352.7 180.7 360.7 188.3 364.9C195.8 369.2 205.1 369 212.5 364.5L356.5 276.5C363.6 272.1 368 264.4 368 256C368 247.6 363.6 239.9 356.5 235.5L212.5 147.5C205.1 142.1 195.8 142.8 188.3 147.1C180.7 151.3 176 159.3 176 168V168z"
              />
            </svg>
            <ListItemText
              primary={
                <Box
                  sx={{
                    color: '#333333',
                    fontSize: '14px',
                    fontWeight: 400,
                    fontFamily: 'Montserrat',
                  }}
                >
                  4. Sinh viên IT đi thực tập tại doanh nghiệp cần biết những gì?
                </Box>
              }
            />
            <Box>34:51</Box>
          </ListItemButton>

          <ListItemButton sx={{ pl: 5 }}>
            <svg
              width={'14px'}
              style={{
                marginRight: '13px',
              }}
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="circle-play"
              className="svg-inline--fa fa-circle-play CurriculumOfCourse_icon__1fxR9 CurriculumOfCourse_video__GQtG1"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="rgba(240,81,35,.4)"
                d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM176 168V344C176 352.7 180.7 360.7 188.3 364.9C195.8 369.2 205.1 369 212.5 364.5L356.5 276.5C363.6 272.1 368 264.4 368 256C368 247.6 363.6 239.9 356.5 235.5L212.5 147.5C205.1 142.1 195.8 142.8 188.3 147.1C180.7 151.3 176 159.3 176 168V168z"
              />
            </svg>
            <ListItemText
              primary={
                <Box
                  sx={{
                    color: '#333333',
                    fontSize: '14px',
                    fontWeight: 400,
                    fontFamily: 'Montserrat',
                  }}
                >
                  5. Trải nghiệm thực tế sau 2 tháng làm việc tại doanh nghiệp của học viên F8?
                </Box>
              }
            />
            <Box>47:13</Box>
          </ListItemButton>
        </List>
      </Collapse>

      {/* list 4 */}
      <ListItemButton
        sx={{
          backgroundColor: 'rgb(245,245,245)',
          borderRadius: '5px',
          border: '1px solid #ebebeb',
          padding: '10px',
          marginTop: '5px',
        }}
        onClick={handleClick4}
      >
        <ListItemIcon sx={{ minWidth: '30px' }}>
          {open4 ? <HiOutlineMinusSm style={{ color: 'red' }} /> : <AiOutlinePlus style={{ color: 'red' }} />}
        </ListItemIcon>
        <ListItemText
          primary={
            <Box
              sx={{ color: '#333333', lineHeight: '18px', fontSize: '16px', fontWeight: 600, fontFamily: 'Montserrat' }}
            >
              4. Ứng tuyển ,xin việc làm
            </Box>
          }
        />
        <Box>1 bài học </Box>
      </ListItemButton>
      <Collapse in={open4} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 5 }}>
            <svg
              width={'14px'}
              style={{
                marginRight: '13px',
              }}
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="circle-play"
              className="svg-inline--fa fa-circle-play CurriculumOfCourse_icon__1fxR9 CurriculumOfCourse_video__GQtG1"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="rgba(240,81,35,.4)"
                d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM176 168V344C176 352.7 180.7 360.7 188.3 364.9C195.8 369.2 205.1 369 212.5 364.5L356.5 276.5C363.6 272.1 368 264.4 368 256C368 247.6 363.6 239.9 356.5 235.5L212.5 147.5C205.1 142.1 195.8 142.8 188.3 147.1C180.7 151.3 176 159.3 176 168V168z"
              />
            </svg>
            <ListItemText
              primary={
                <Box
                  sx={{
                    color: '#333333',
                    fontSize: '14px',
                    fontWeight: 400,
                    fontFamily: 'Montserrat',
                  }}
                >
                  3. Học IT cần tố chất gì? Góc nhìn khác từ chuyên gia định hướng giáo dục
                </Box>
              }
            />
            <Box>24:10</Box>
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}

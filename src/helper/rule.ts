import { isEmail } from './helper';

export const rules = {
  title: {
    maxLength: {
      value: 160,
      message: 'Title có độ dài tối đa là 160 ký tự',
    },
    minLength: {
      value: 10,
      message: 'Title có độ dài tối thiểu là 10 ký tự',
    },
  },
  image: {
    required: {
      value: true,
      message: 'Image là bắt buộc nhập',
    },
    maxLength: {
      value: 20,
      message: 'Image có độ dài tối đa là 20 ký tự',
    },
    minLength: {
      value: 10,
      message: 'Image có độ dài tối thiểu là 10 ký tự',
    },
  },
  Description: {
    maxLength: {
      value: 160,
      message: 'Description có độ dài tối đa là 160 ký tự',
    },
    minLength: {
      value: 10,
      message: 'Description có độ dài tối thiểu là 10 ký tự',
    },
  },
  email: {
    required: {
      value: true,
      message: 'Email là bắt buộc nhập',
    },
    minLength: {
      value: 5,
      message: 'Email có độ dài từ 5 - 160 ký tự',
    },
    maxLength: {
      value: 160,
      message: 'Email có độ dài từ 5 - 160 ký tự',
    },
    validate: {
      email: (v: string) => isEmail(v) || 'Email không đúng định dạng',
    },
  },
  password: {
    required: {
      value: true,
      message: 'Mật khẩu là bắt buộc nhập',
    },
    minLength: {
      value: 6,
      message: 'Mật khẩu có độ dài từ 6 - 160 ký tự',
    },
    maxLength: {
      value: 160,
      message: 'Mật khẩu có độ dài từ 6 - 160 ký tự',
    },
  },
  confirmedPassword: {
    required: {
      value: true,
      message: 'Nhập lại mật khẩu là bắt buộc nhập',
    },
    minLength: {
      value: 6,
      message: 'Nhập lại mật khẩu có độ dài từ 6 - 160 ký tự',
    },
    maxLength: {
      value: 160,
      message: 'Nhập lại mật khẩu có độ dài từ 6 - 160 ký tự',
    },
  },
  name: {
    required: {
      value: true,
      message: 'Name là bắt buộc nhập',
    },
    maxLength: {
      value: 50,
      message: 'Name có độ dài tối đa là 50 ký tự',
    },
    minLength: {
      value: 5,
      message: 'Name có độ dài tối thiểu là 5 ký tự',
    },
  },
};

import * as yup from 'yup';

export const schema = yup
  .object({
    phone: yup
      .string()
      .required('This field is Required')
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        'Phone number is not valid'
      ),
    email: yup.string().email('Please enter a valid email address!').required('You must enter your email address!'),
    fullName: yup.string().required('You must enter your name!'),
    image: yup.string().required('You must enter your image!'),
    desc: yup.string().required('You must enter your desc!'),
    address: yup.string().required('You must enter your address!'),
    service: yup.string().required('You must enter service!'),
    branch: yup.string().required('You must select branch!'),
    employee: yup.string().required('You must select employee!'),
    total: yup
      .number()
      .typeError('Total must be greater than or equal to 1')
      .min(1, 'Total must be greater than or equal to 1')
      .required('You must enter total!'),
  })
  .required();

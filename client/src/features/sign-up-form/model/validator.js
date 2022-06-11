import { object, string } from 'yup';

const SignUpSchema = object({
  username: string()
    .required('Username is required'),
  email: string()
    .required('Email is required')
    .email('Enter valid email please'),
  password: string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters long')
})

export default SignUpSchema;

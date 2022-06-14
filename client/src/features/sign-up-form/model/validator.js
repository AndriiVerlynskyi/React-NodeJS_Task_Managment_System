import { object, string } from 'yup';

const SignUpSchema = object({
  username: string()
    .required('Username is required'),
  email: string()
    .required('Email is required')
    .email('Enter valid email please'),
  password: string()
    .required('Password is required')
    .min(6, 'Should have at least 6 characters')
})

export default SignUpSchema;

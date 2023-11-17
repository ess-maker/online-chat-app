import { useFormik } from 'formik';
import { Mysingup_types } from '@/types/types';
import * as yup from 'yup';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { UserAuth } from '@/context/AuthContextProvider'
import { useRouter } from 'next/navigation'



const Singuplogic = () => {
  const validationSchema = yup.object({
    email: yup.string().email('Enter a valid email').required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
    name: yup.string()
      .min(4, 'Name should be of minimum 4 characters length')
      .max(10, 'Name should be of maximum 10 characters length')
      .required('Name is required'),
  });
  const {signIn} = UserAuth()
  const router = useRouter()


  const initialValues: Mysingup_types = { email: '', password: '', name: '' };

  const formik_signup = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const auth = getAuth();
        const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
        const user = userCredential.user;
        router.push('/')
      } catch (error:any) {
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.log(errorMessage);
      }
    },
  });

  return formik_signup;
};

export default Singuplogic;
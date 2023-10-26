import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { addDoc,collection } from 'firebase/firestore'
import { auth, db } from '../../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
export const CreateForm=()=>{
    const navigate=useNavigate();
  const [user]=useAuthState(auth);
    const schema=yup.object().shape({
        title:yup.string().required("Please enter title"),
        description:yup.string().min(10).required("Please enter description")
    })
    const {register,handleSubmit,formState:{errors}}=useForm({
        resolver:yupResolver(schema)
    })
    const postsRef=collection(db,'posts');
    const onCreatePost=async(data)=>{
       await addDoc(postsRef,{
        // title:data.title,
        // description:data.description,
        ...data,
        username:user?.displayName,
        userId:user?.uid
       })
       navigate('/');
    }
    return(
        <form onSubmit={handleSubmit(onCreatePost)}>
            <input placeholder='Title' {...register('title')}/>
            <p style={{color:"red"}}>{errors.title?.message}</p>
            <textarea placeholder='Description' {...register("description")}/>
            <p style={{color:"red"}}>{errors.description?.message}</p>
            <input type='submit' className='.submitForm'/>
        </form>
    )
}
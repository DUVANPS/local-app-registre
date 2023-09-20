import { useForm } from "react-hook-form";
import { useEffect } from "react";

const FormUsers = ( {createUsers, infoUpdate, updateUsers, setInfoUpdate} ) => {
    const {handleSubmit, register, reset} = useForm()

    useEffect(() => {
    reset(infoUpdate)
    }, [infoUpdate])
    

    const submit = data =>{
        if(infoUpdate){
            updateUsers('/users', infoUpdate.id, data)
            setInfoUpdate()

        }else{
            createUsers('/users', data)
        }
        
        reset({
            email: ' ',
            password: ' ',
            firs_name: ' ',
            last_name: ' ',
            birthday: ' '
        })

    }
    return (
        <form onSubmit={handleSubmit(submit)} className="conten" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div>
            <label htmlFor="email">Email</label>
            <input {...register('email')} type="email" id='email' />
        </div>
    
        <div>
            <label htmlFor="password">Password</label>
            <input {...register('password')} type="password" id='password' />
        </div>
    
        <div>
            <label htmlFor="first_name">First Name</label>
            <input {...register('first_name')} type="text" id='first_name' />
        </div>
    
        <div>
            <label htmlFor="last_name">Last Name</label>
            <input {...register('last_name')} type="text" id='last_name' />
        </div>
    
        <div>
            <label htmlFor="birthday">Birthday</label>
            <input {...register('birthday')} type="date" id='birthday' />
        </div>
    
        <button>{infoUpdate ? 'Update' : 'Create'}</button>
        </form>
    )
}      

export default FormUsers
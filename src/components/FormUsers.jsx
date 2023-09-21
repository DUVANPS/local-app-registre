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
        <form onSubmit={handleSubmit(submit)} className="conten">
        <div>
            <label htmlFor="email" className="text_mail">Email <br /></label>
            <input {...register('email')} type="email" id='email' />
        </div>
    
        <div>
            <label htmlFor="password" className="text_mail">Password <br /></label>
            <input {...register('password')} type="password" id='password' />
        </div>
    
        <div>
            <label htmlFor="first_name" className="text_mail">First Name <br /></label>
            <input {...register('first_name')} type="text" id='first_name' />
        </div>
    
        <div>
            <label htmlFor="last_name" className="text_mail">Last Name <br /></label>
            <input {...register('last_name')} type="text" id='last_name' />
        </div>
    
        <div>
            <label htmlFor="birthday" className="text_mail">Birthday <br /></label>
            <input {...register('birthday')} type="date" id='birthday' />
        </div>
    
        <button className="btn_form">{infoUpdate ? 'Update' : 'Create'}</button>
        </form>
    )
}      

export default FormUsers
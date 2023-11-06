import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {userService} from "../../services/user.service";

const Form = () => {

    const [formError, setFormError] = useState({});

    const {
        register, handleSubmit, watch, formState:{errors}
    } = useForm();

    const submit = async (user) => {
      try{
          const newUser = await userService.create(user);
          console.log(newUser);
      }
      catch (error){
          setFormError(error.response.data)
      }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div><label>Name: <input type="text" defaultValue={''} {...register('name')}/></label></div>
                {formError.name && <span>{formError.name[0]}</span>}
                <div><label>Age: <input type="number" defaultValue={''} {...register('age')}/></label></div>
                {formError.age && <span>{formError.age[0]}</span>}
                <div><label>Email: <input type="text" defaultValue={''} {...register('email')}/></label></div>
                {formError.email && <span>{formError.email[0]}</span>}
                <div><label>Password: <input type="text" defaultValue={''} {...register('password')}/></label></div>
                {formError.password && <span>{formError.password[0]}</span>}
                {/*<div><label><input type="text"  defaultValue={''} {...register(('confirm password'))}/></label></div>*/}
                <button>Register</button>
            </form>
        </div>
    );
};

export default Form;
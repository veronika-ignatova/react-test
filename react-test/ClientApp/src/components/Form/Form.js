import React, {ChangeEvent, useState} from 'react';
import {Controller, useForm} from "react-hook-form";
import {userService} from "../../services/user.service";

import "./Form.css"
import {joiResolver} from "@hookform/resolvers/joi";
import {UserValidator} from "../../validators/user.validator";
import axiosService from "../../services/axios.service";

const Form = () => {

    const [isEmailValid, setIsEmailValid] = useState(false);

    const {
        setError,
        trigger,
        control,
        handleSubmit,
        getValues,
        register,
        formState: {errors}
    } = useForm();

    // const {
    //     register, handleSubmit,watch,formState:{errors}
    // } = useForm({resolver:joiResolver(UserValidator)});
    //
    const submit = async (user) => {
        console.log(user);
        const newUser = await userService.create(user)
            .then(value => value)
            .catch(value => {
                if (!!value?.response?.data?.errors) {
                    for (const valueKey of value.response.data.errors) {
                        setError(valueKey.field.toLowerCase(), {type: 'server', message: valueKey.message})
                    }
                }
            });
        console.log(newUser);
    }

    const isEmailAvailable = async (email) => {
        console.log('send to backend' + email)
        const {isSuccess, messages} = await userService.checkEmail(email)
        setIsEmailValid(isSuccess)
        return isSuccess || messages
    }

    const checkEmail = async (email) => {
        console.log('trigger ' + email)
        const check = await trigger('email');
        setError('name', {type: 'server', message: 'Пробна помилка'})
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <label>Name:</label>
                    <input
                        {...register('name', {
                            required: 'Це поле обов\'язкове',
                            minLength: {
                                value: 2,
                                message: 'Ім\'я занадто коротке'
                            }
                        })}
                        placeholder={'Name'}
                        type={'text'}
                    />
                    {errors.name && (<p>{errors.name.message}</p>)}
                </div>

                <div>
                    <label>Email:</label>
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        rules={{
                            onChange: async (event) => await checkEmail(event.target.value),
                            required: 'Це поле обов\'язкове',
                            minLength: {
                                value: 3, message: 'Назва занадто коротка',
                            },
                            pattern: {
                                value: /^\S+@\S+\.\S+$/, message: 'Некоректна адреса електронної пошти',
                            },
                            validate: {
                                isAvailable: async (value) => {
                                    return await isEmailAvailable(value);
                                },
                            },
                        }}
                        render={({field, fieldState}) => (<div>
                            <input {...field} type="email" placeholder="Email"/>
                            {isEmailValid ? <p>{'true'}</p> : <p>{'false'}</p>}
                            {fieldState.error && (<p>{fieldState.error.message}</p>)}
                        </div>)}
                    />
                </div>

                <div>
                    <label>Age:</label>
                    <Controller
                        name="age"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: 'Це поле обов\'язкове', min: {
                                value: 14, message: 'Мінімум 14 років',
                            },
                        }}
                        render={({field, fieldState}) => (<div>
                            <input {...field} type="number" placeholder="Age"/>
                            {fieldState.error && (<p>{fieldState.error.message}</p>)}
                        </div>)}
                    />
                </div>

                <div>
                    <label>Password:</label>
                    <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: 'Це поле обов\'язкове', pattern: {
                                value: /^(?=.*[A-Z])(?=.*\d).{8,}$/, message: 'Некоректний пароль',
                            }
                        }}
                        render={({field, fieldState}) => (<div>
                            <input {...field} type="password" placeholder="Password"/>
                            {fieldState.error && (<p>{fieldState.error.message}</p>)}
                        </div>)}
                    />
                </div>

                <div>
                    <label>Confirm Password:</label>
                    <Controller
                        name="confirmPassword"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: 'Це поле обов\'язкове',
                            validate: (value) => value === getValues('password') || 'Паролі не співпадають',
                        }}
                        render={({field, fieldState}) => (<div>
                            <input {...field} type="password" placeholder="Confirm Password"/>
                            {fieldState.error && (<p>{fieldState.error.message}</p>)}
                        </div>)}
                    />
                </div>

                <div>
                    <label>Photo:</label>
                    <input type="file" {...register('image')}
                         // onChange={onChange}
                    />
                </div>

                <button type="submit">Зареєструватися</button>
            </form>
            {/*<form onSubmit={handleSubmit(submit)}>*/}
            {/*    <div><label>Name: <input type="text" defaultValue={''} {...register('name')}/></label></div>*/}
            {/*    {errors.name && <span className="mySpan">{errors.name.message}</span>}*/}
            {/*    <div><label>Age: <input type="number" defaultValue={''} {...register('age')}/></label></div>*/}
            {/*    {errors.age && <span>{errors.age.message}</span>}*/}
            {/*    <div><label>Email: <input type="text" defaultValue={''} {...register('email')}/></label></div>*/}
            {/*    {errors.email && <span>{errors.email.message}</span>}*/}
            {/*    <div><label>Password: <input type="text" defaultValue={''} {...register('password')}/></label></div>*/}
            {/*    {errors.password && <span>{errors.password.message}</span>}*/}
            {/*    /!*<div><label><input type="text"  defaultValue={''} {...register(('confirm password'))}/></label></div>*!/*/}
            {/*    <button>Register</button>*/}
            {/*</form>*/}
        </div>);
};

export default Form;
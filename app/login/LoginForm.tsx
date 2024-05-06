'use client'

import { useState } from "react";
import Heading from "../components/Heading";
import Input from "../components/inputs/Input";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import Button from "../components/Button";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";

const LoginForm = () => {

    const [ isLoading, setIsLoading ] = useState(false)
    const { register, handleSubmit, formState: { errors } } = 
    useForm<FieldValues>({
        defaultValues:{
            name: '',
            email: '',
            password: '',

        }
    })

    const onSubmit:SubmitHandler<FieldValues> = (data) =>{
        setIsLoading(true)
        console.log(data)
        // setTimeout(() => {
        //     setIsLoading(false)
        // }, 2000);
        // console.log(errors)
    }
    return (
        <>
            <Heading title="Sign Up for E-shop" />
            <Button 
            outline 
            label="Sign up with Google" 
            icon={AiOutlineGoogle}
            onClick={()=>{}}
            />
            <hr className="bg-slate-300 w-full h-px" />
            <Input
                id="name"
                label="Name"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="email"
                label="Email"
                disabled={isLoading}
                register={register}
                errors={errors}
                required 
                type="email"       
            />
            <Input
                id="password"
                label="password"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
                type="password"
            />
            <Button label={isLoading ? "Loading" : "Sign Up"}
            onClick={handleSubmit(onSubmit)}/>

            <p className="text-sm">
                Already have an account ? 
                <Link href='/login'className="underline">Log in</Link>
            </p>
        </>);
}

export default LoginForm;
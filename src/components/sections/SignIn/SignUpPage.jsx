import React from 'react';
import InputField from './InputField';
import Button from './Button';
import GoogleSignIn from './GoogleSignIn';
import LoginLink from './LoginLink';

function SignInPage() {
  const inputFields = [
    { label: 'Email or Phone Number', type: 'text' },
    { label: 'Password', type: 'password' }
  ];

  return (
    <main className="flex flex-wrap gap-10 items-center">
      <section className="flex overflow-hidden flex-col self-stretch pt-20 my-auto rounded-none bg-slate-300 min-w-[240px] w-[805px] max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6594d301cb527008d7fb7314d7d2eed187b8a3e63d4350ddbd40a61b0b55a5ec?placeholderIfAbsent=true&apiKey=fc9062f21cc44ad5ad201376f7951edc" alt="" className="object-contain w-full aspect-[1.14] max-md:max-w-full max-sm:hidden" />
      </section>
      <section className="flex flex-col self-stretch my-auto min-w-[240px]">
        <header className="flex flex-col self-start text-black">
          <h1 className="text-4xl font-medium tracking-widest leading-none max-sm:ml-4">
            Log in to your account
          </h1>
          <p className="mt-6 text-base max-sm:ml-4">
            Enter your details below
          </p>
        </header>
        <form className="flex flex-col items-center mt-12 max-md:mt-10">
          <div className="flex flex-col max-w-full w-[370px]">
            {inputFields.map((field, index) => (
              <InputField key={index} label={field.label} type={field.type} />
            ))}
          </div>
          <Button text="Login" />
          <GoogleSignIn />
          <LoginLink />
        </form>
      </section>
    </main>
  );
}

export default SignInPage;
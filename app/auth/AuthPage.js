"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "../components/Input";
import { useForm } from "react-hook-form";
import Container from "../components/Container";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

const AuthPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setvalue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      //   name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      signIn("credentials", { ...data, redirect: false })
        .then(() => {
          router.refresh();
          router.push("/profiles");
          console.log("success");
        })
        .catch(() => {
          console.log("failed");
        })
        .finally(() => {
          setIsLoading(false);
        });
    } catch (error) {
      console.log("register failed");
    }
  };

  return (
    <Container>
      {/*"bg-black w-full h-full lg:bg-opacity-50"  this means large = lg screen opacity-50   and when it gets small becomes bg-black  */}
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <Image
            src="/images/logo.png"
            alt="logo"
            className="h-12"
            height="20"
            width="200"
            onClick={() => router.push("/")}
          />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold ">LOGIN</h2>
            <div className="flex flex-col gap-4">
              {/* <Input
                label="Username"
                register={register}
                id="name"
                type="text"
                required
              /> */}

              <Input
                label="Email"
                register={register}
                id="email"
                type="email"
                required
              />
              <Input
                label="Password"
                register={register}
                id="password"
                type="password"
                required
              />
            </div>
            <button
              onClick={handleSubmit(onSubmit)}
              className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition"
            >
              LOGIN
            </button>

            <div className="flex flex-row items-cetner gap-8 mt-8 justify-center">
              <div
                onClick={() => signIn("google", { callbackUrl: "/profiles" })}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
              >
                <FcGoogle size={30} />
              </div>
              <div
                onClick={() => signIn("githup", { callbackUrl: "/profiles" })}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
              >
                <FaGithub size={30} />
              </div>
            </div>
            <p className="text-neutral-500 mt-12 flex flex-row justify-center">
              "Need an account?"
              <span
                onClick={() => {
                  router.push("/register");
                }}
                className="text-white ml-1 hover:underline cursor-pointer"
              >
                "Create an account"
              </span>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AuthPage;

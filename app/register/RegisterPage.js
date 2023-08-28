"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "../components/Input";
import { useForm } from "react-hook-form";
import Container from "../components/Container";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import axios from "axios";
import { signIn } from "next-auth/react";
import Image from "next/image";

const RegisterPage = () => {
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
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      await axios
        .post("/api/register", data)
        .then(() => {
          router.refresh();
          router.push("/auth");
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
            width="180"
            height="20"
            className="h-12"
            onClick={() => router.push("/")}
          />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold ">
              Register
            </h2>
            <div className="flex flex-col gap-4">
              <Input
                label="Username"
                register={register}
                id="name"
                type="text"
                required
              />

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
              Create
            </button>

            <div className="flex flex-row items-cetner gap-8 mt-8 justify-center">
              <div
                onClick={() => signIn("google", { callbackUrl: "/" })}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
              >
                <FcGoogle size={30} />
              </div>
              <div
                onClick={() => signIn("github", { callbackUrl: "/" })}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
              >
                <FaGithub size={30} />
              </div>
            </div>
            <p className="text-neutral-500 mt-12 flex flex-row justify-center">
              "Have an account?"
              <span
                onClick={() => {
                  router.push("/auth");
                }}
                className="text-white ml-1 hover:underline cursor-pointer"
              >
                "Sign in"
              </span>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RegisterPage;

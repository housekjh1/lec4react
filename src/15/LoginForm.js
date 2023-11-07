import ButtonBlue from "../comm/ButtonBlue";
import { useEffect, useState } from "react";

const LoginForm = ({ setUser }) => {
    const [inUser, setInUser] = useState();
    const [inPw, setInPw] = useState();

    const handleLogin = (e) => {
        e.preventDefault();

        if (inUser === "pnumin@pusan.ac.kr" && inPw === "1234") {
            localStorage.setItem("user", inUser);
            setUser(inUser);
        } else {
            alert("로그인 입력오류");
        }
    }

    useEffect(() => {
        console.log("inUser", inUser);
        console.log("inPw", inPw);
    }, [inUser, inPw])

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email"
                                    name="email"
                                    id="email"
                                    placeholder="name@company.com"
                                    required=""
                                    onChange={(e) => setInUser(e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    required=""
                                    onChange={(e) => setInPw(e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                            <ButtonBlue caption="로그인" handleClick={handleLogin} />

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginForm
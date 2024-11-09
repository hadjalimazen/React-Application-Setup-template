// login page component
import React from "react";
import { Link } from "react-router-dom";
import StyledLogo from "src/components/atoms/styledlogo";
import { DASHBOARD } from "src/routingpaths";

export default function Login() {
    return (
        <React.Fragment>
            <div className="min-h-screen flex items-center justify-center w-full ">
                <div className="bg-white  shadow-md rounded-lg px-8 py-6 max-w-md w-full ">

                    <h1 className="text-4xl font-bold text-center my-4" >
                        <StyledLogo />
                    </h1>

                    <h1 className="text-2xl font-bold text-center mb-4">Welcome Back!</h1>

                    <form action="#">
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 ">Email Address</label>
                            <input type="email" id="email" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="your@email.com" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 ">Password</label>
                            <input type="password" id="password" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your password" required />

                        </div>
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                                <input type="checkbox" id="remember" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none" />
                                <label htmlFor="remember" className="ml-2 block text-sm text-gray-700 ">Remember me</label>
                            </div>
                        </div>
                        <Link to={DASHBOARD} type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</Link>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
}

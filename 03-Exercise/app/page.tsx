"use client";

import { useActionState } from "react";
import { greet } from "./form/actions";

const initialState = { success: false, message: "", errors: {} };

const Home = () => {
  const [state, formAction] = useActionState(greet, initialState);

  return (
    <form action={formAction} className="space-y-4 max-w-md mx-auto mt-10">
      <div>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          className="border p-2 w-full"
        />
        {state.errors?.firstName && (
          <p className="text-red-600 mt-1">{state.errors.firstName}</p>
        )}
      </div>

      <div>
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          className="border p-2 w-full"
        />
        {state.errors?.lastName && (
          <p className="text-red-600 mt-1">{state.errors.lastName}</p>
        )}
      </div>


      <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border p-2 w-full"
        />
        {state.errors?.email && (
          <p className="text-red-600 mt-1">{state.errors.email}</p>
        )}
      </div>

      <div>
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border p-2 w-full"
        />
        {state.errors?.password && (
          <p className="text-red-600 mt-1">{state.errors.password}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Submit
      </button>

      {state.success && (
        <p className="text-green-600 mt-4 font-medium">{state.message}</p>
      )}
    </form>
  );
};

export default Home;

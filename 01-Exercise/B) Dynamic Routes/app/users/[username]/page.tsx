import React from "react";

interface IUserDetails {
  params: Promise<{
    username: string;
  }>;
}

const UserDetails = async ({ params }: IUserDetails) => {
  const { username } = await params;
  return <div>
    <h1>Welcome {username}</h1>
  </div>;
};

export default UserDetails;

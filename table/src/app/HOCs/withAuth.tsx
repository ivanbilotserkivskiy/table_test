"use client";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../GlobalRedux/store";
import { redirect } from "next/navigation";

const withAuth = (Component: any) => {
  const WithAuth = (props: any) => {
    const authrized = useSelector(
      (state: RootState) => state.authorize.authorized
    );
    useEffect(() => {
      if (!authrized) {
        redirect("/user/login");
      }
    }, []);

    if (!authrized) {
      return null;
    }

    return <Component {...props} />;
  };

  return WithAuth;
};

export default withAuth;

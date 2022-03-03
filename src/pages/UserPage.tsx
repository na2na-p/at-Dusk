import React, { memo } from "react";
import { useParams } from "react-router-dom";

import { Avatar } from "../components/Avatar";
import { Loading } from "../components/ui/Loading";
import { useGetUserData } from "../features/swr/useGetUserData";

export const UserPage = memo(function Fn() {
  const { id } = useParams();
  const { data, error, isLoading } = useGetUserData(id);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <>{error.message}</>
      ) : (
        <>
          <Avatar user={data} />
        </>
      )}
    </>
  );
});

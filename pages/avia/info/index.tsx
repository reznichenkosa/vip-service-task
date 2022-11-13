import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import BigTicketCard from "../../../components/BigTicketCard/BigTicketCard";
import SmallTicketCard from "../../../components/SmallTicketCard/SmallTicketCard";
import { IFormData, IResponse } from "../../../interfaces/data.interface";
import MainLayout from "../../../layouts/MainLayout/MainLayout";
import { fakeFetchingData } from "../../../services/fakeApi";

const Info = () => {
  const [data, setData] = useState<IResponse>();
  const { query } = useRouter();
  const params = query as unknown as IFormData;

  useEffect(() => {
    setData(fakeFetchingData(params));
  }, [params]);

  return (
    <MainLayout>
      {data && data.returnTicket && (
        <BigTicketCard ticket={data.ticket} returnTicket={data.returnTicket} />
      )}
      {data && !data.returnTicket && <SmallTicketCard ticket={data.ticket} />}
    </MainLayout>
  );
};

export default Info;

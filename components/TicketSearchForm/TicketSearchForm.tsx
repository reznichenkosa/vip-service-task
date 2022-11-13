import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import { validateFormData } from "../../helpers";
import { IFormData } from "../../interfaces/data.interface";
import CustomButton from "../CustomButton/CustomButton";
import DateInput from "../DateInput/DateInput";
import TextInput from "../TextInput/TextInput";
import styles from "./TicketSearchForm.module.css";
import { TicketSearchFormProps } from "./TicketSearchForm.props";

const initialState: IFormData = {
  fromCity: "",
  toCity: "",
  startDate: "",
  endDate: "",
};

const currentTime = new Date();

const TicketSearchForm: FC<TicketSearchFormProps> = () => {
  const [formData, setFormData] = useState<IFormData>(initialState);
  const router = useRouter();

  const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push({ pathname: "avia/info", query: { ...formData } });
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={formHandler} className={styles.wrapper}>
      <div className={styles.top}>
        <TextInput
          value={formData.fromCity}
          onChange={changeHandler}
          label="Откуда"
          placeholder="Город вылета"
          name="fromCity"
          minLength={3}
        />
        <TextInput
          value={formData.toCity}
          onChange={changeHandler}
          label="Куда"
          placeholder="Город прилета"
          name="toCity"
          minLength={3}
        />
        <DateInput
          value={formData.startDate}
          name="startDate"
          onChange={changeHandler}
          min={`${currentTime.getFullYear()}-${
            currentTime.getMonth() + 1
          }-${currentTime.getDate()}`}
          label="Туда"
          max="2024-01-01"
          className={formData.startDate.length > 0 ? "text-gray-800" : "text-gray-400"}
        />
        <DateInput
          value={formData.endDate}
          name="endDate"
          min={formData.startDate}
          onChange={changeHandler}
          label="Обратно"
          max="2024-01-01"
          className={formData.endDate.length > 0 ? "text-gray-800" : "text-gray-400"}
        />
      </div>
      <div className={styles.bottom}>
        <CustomButton disabled={validateFormData(formData)}>Найти билеты</CustomButton>
      </div>
    </form>
  );
};

export default TicketSearchForm;

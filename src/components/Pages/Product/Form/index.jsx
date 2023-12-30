import CMaskField from "../../../UI/CMaskField";
import { HFInput } from "../../../UI/HFElements/HFInput";
import useTranslation from "next-translate/useTranslation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { CircularProgress } from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { websiteActions } from "store/website/websiteSlice";
import axios from "axios";

export const Form = ({ productInfo = {} }) => {
  const { t } = useTranslation("common");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    full_name: yup.string().trim().required(t("required_field")),
    phone_number: yup.string().trim().required(t("required_field")),
    // region: yup.string().trim().required(t("required_field")),
  });

  const { control, handleSubmit, reset } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const telegramBotToken = "6811167119:AAGZmPErnV0GoJDrvRczkLcZ6e9Cb3SfcmM";
  const chatId = "-1002078204146";

  const sendMessageToTelegram = async (message) => {
    try {
      const response = await axios.post(
        `https://api.telegram.org/bot${telegramBotToken}/sendMessage`,
        {
          chat_id: chatId,
          text: message,
        }
      );

      if (response?.status === 200) reset();

      dispatch(
        websiteActions.setAlertData({
          title: "order_created_success",
          text: "contact_u_soon",
          translation: "common",
        })
      );
    } catch (error) {
      console.log("error", error);
      dispatch(
        websiteActions.setAlertData({
          title: "error_occured_try_again",
          translation: "common",
          type: "error",
        })
      );
    }
  };

  const onSubmit = (data) => {
    console.log("111");
    const message = `Ism: ${data.full_name} \nTel.raqam: ${
      data.phone_number
    } \nTovar: ${productInfo?.slug} \nSoni: ${
      productInfo?.count || 1
    } \nViloyat: ${data?.region || ""}`;
    sendMessageToTelegram(message);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid mobile:grid-cols-2 gap-4">
        <HFInput
          name="full_name"
          control={control}
          label={t("full_name")}
          required={true}
        />
        <CMaskField
          name="phone_number"
          control={control}
          label={t("phone")}
          mask={"+\\9\\9\\8 99 999 99 99"}
          required={true}
        />
      </div>
      <button
        type={loading ? "button" : "submit"}
        className={`h-[48px] text-white px-4 flex items-center w-full justify-center space-x-2 ${
          loading ? "bg-grayLighter cursor-none" : "bg-yellow"
        }`}
      >
        {loading && <CircularProgress size={24} />}
        <span>{t("make_order")}</span>
      </button>
    </form>
  );
};

import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { notifyError } from "@/utils/toast";

const useTaxSubmit = () => {
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm();

  const [taxList, setTaxList] = useState([]);
  const buttonType = ["PERCENTAGE (%)", "FLAT IN ₹"];
  const [taxName, setTaxName] = useState("");
  const [taxAmount, setTaxAmount] = useState("");
  const [taxType, setTaxType] = useState("PERCENTAGE (%)");
  console.log("taxList", taxList);

  //   -------------type select-----------
  const handleSelectType = (val) => {
    setTaxType(val);
  };

  //   -------------Tax Name-----------------
  const handleTaxName = (value) => {
    setValue("taxName", value.toLowerCase().replace(/[^A-Z0-9]+/gi, "-"));
    setTaxName(value.toLowerCase().replace(/[^A-Z0-9]+/gi, "-"));
    console.log("value", value);
  };
  //   -------------Tax Amount-----------------
  const handleTaxAmount = (value) => {
    setValue("taxAmount", value.toLowerCase().replace(/[^A-Z0-9]+/gi, "-"));
    setTaxAmount(value.toLowerCase().replace(/[^A-Z0-9]+/gi, "-"));
  };
  //   --------------------- submit form------------------------
  const onSubmit = () => {
    let error = 0;
    if (taxName.trim().length == 0) {
      error = error + 1;
      notifyError("Please enter Tax Name.");
    }
    if (!taxAmount.trim()) {
      error = error + 1;
      notifyError("please fill tax amount.");
    }
    if (error === 0) {
      validation();
    }
  };
  const validation = () => {
    let type = taxAmount + `${taxType === "PERCENTAGE (%)" ? "%" : "₹"}`;
    let newTax = {
      id: taxList.length > 0 ? taxList[taxList.length - 1].id : 0,
      name: taxName,
      amount: type,
      type: taxType,
    };
    console.log("newTax", newTax);
    setTaxList([...taxList, newTax]);
    setTaxName("");
    setTaxAmount("");
    setValue("taxAmount", "");
    setValue("taxName", "");
    setTaxType("PERCENTAGE (%)");
    clearErrors("taxAmount");
    clearErrors("taxName");
  };
  const handleCancel = () => {
    setTaxName("");
    setTaxAmount("");
    setTaxType("PERCENTAGE (%)");
  };

  return {
    taxName,
    setTaxName,
    register,
    handleSubmit,
    setValue,
    clearErrors,
    errors,
    taxAmount,
    buttonType,
    setTaxAmount,
    taxList,
    handleTaxName,
    handleTaxAmount,
    taxType,
    handleSelectType,
    onSubmit,
    handleCancel,
  };
};

export default useTaxSubmit;

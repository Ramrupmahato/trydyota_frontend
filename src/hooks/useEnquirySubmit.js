import { useForm } from "react-hook-form";
import React, { useContext, useEffect, useState } from "react";
import { notifyError, notifySuccess } from "@/utils/toast";
import { SidebarContext } from "@/context/SidebarContext";
import TaxService from "@/services/TaxService";
import shippingService from "@/services/ShippingService";
import EnquiryService from "@/services/EnquiryService";

const useEnquirySubmit = () => {
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm();
  const {
    toggleDrawer,
    isDrawerOpen,
    currentPage,
    toggleModal,
    limitData,
    toggleBulkDrawer,
    taxEdit,
    setTaxEdit,
  } = useContext(SidebarContext);

  const [search, setSearch] = useState("");
  const [enquiryList, setEnquiryList] = useState([]);
  const [enquiryPage, setEnquiryPage] = useState("");

  const EnquiryData = [
    {
      id: 1,
      productName: "bulb",
      quantity: 2,
      requestedBY: "Rahul",
      contact: 9800000000,
      message: "i did'n get my product",
      status: "",
    },
    {
      id: 2,
      productName: "light",
      quantity: 3,
      requestedBY: "Rahul",
      contact: 9800000000,
      message: "i did'n get my product",
      status: "",
    },
    {
      id: 3,
      productName: "fan",
      quantity: 4,
      requestedBY: "Rahul",
      contact: 9800000000,
      message: "i did'n get my product",
      status: "",
    },
  ];

  //   -------------Charges Amount-----------------
  const handleSearchMethod = (value) => {
    setValue(
      "shippingCharges",
      value.toLowerCase().replace(/[^A-Z0-9]+/gi, "-")
    );
    setSearch(value.toLowerCase().replace(/[^A-Z0-9]+/gi, "-"));
  };

  const validation = () => {
    let newShipping = {
      id: shippingId ? shippingId : "",
      shippingMethod: shippingMethod,
      icon: shippingIcon.length > 0 ? shippingIcon[0] : "",
      cost: parseInt(shippingCharges, 10),
      deliveryTime: deliveryTime,
    };

    shippingService.postShipping(newShipping).then((res) => {
      if (res?.success === true) {
        notifySuccess(res.message);
        if (shippingId) {
          toggleDrawer();
        }
        setValue("shippingMethod", "");
        setShippingMethod("");
        setValue("shippingCharges", "");
        setShippingCharges("");
        setValue("deliveryTime", "");
        setDeliveryTime("");
        setShippingIcon([]);
        clearErrors("shippingMethod");
        clearErrors("shippingCharges");
        clearErrors("deliveryTime");
        getEnquiryDetails();
      } else {
        notifyError(res.message);
      }
    });
  };

  // -------------------get tax details------------------------
  const getEnquiryDetails = () => {
    EnquiryService.getEnquiry({ page: currentPage, limit: limitData }).then(
      (res) => {
        if (res?.success === true) {
          notifySuccess(res.message);
          // setEnquiryList(res.ProductRequestDetailsdData);
          setEnquiryPage(res?.Pagination);
        } else {
          notifyError(res.message);
        }
      }
    );
  };
  return { EnquiryData, handleSearchMethod, enquiryPage, getEnquiryDetails };
};

export default useEnquirySubmit;

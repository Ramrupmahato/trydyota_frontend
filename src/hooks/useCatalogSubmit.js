import { useForm } from "react-hook-form";
import React, { useContext, useEffect, useState } from "react";
import { notifyError, notifySuccess } from "@/utils/toast";
import { SidebarContext } from "@/context/SidebarContext";
import shippingService from "@/services/CatalogService";
import CatalogService from "@/services/CatalogService";

const useCatalogSubmit = () => {
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
    limitData,
    toggleModal,
    toggleBulkDrawer,
    taxEdit,
    setTaxEdit,
  } = useContext(SidebarContext);
  // console.log("taxEdit-->", taxEdit);

  const [brandIcon, setBrandIcon] = useState([]);
  const [brandName, setBrandName] = useState("");
  const [dec, setDec] = useState("");
  const [brandFile, setBrandFile] = useState([]);
  const [itemId, setItemId] = useState("");
  const [getAllList, setGetAllList] = useState("");
  const [catalogPage, setCatalogPage] = useState("");

  console.log("shipping details", {
    brandIcon: brandIcon,
    brandName: brandName,
    dec: dec,
    brandFile: brandFile,
  });

  //   -------------type select-----------
  const handleSelectType = (val) => {
    setTaxType(val);
  };

  //   -------------shipping Method-----------------
  const handleBrandName = (value) => {
    setValue("brandName", value);
    setBrandName(value);
  };
  //   -------------dec-----------------
  const handleDec = (value) => {
    setValue("description", value.toLowerCase().replace(/[^A-Z0-9]+/gi, "-"));
    setDec(value.toLowerCase().replace(/[^A-Z0-9]+/gi, "-"));
  };
  //   --------------------- submit form------------------------
  const onSubmit = () => {
    let error = 0;
    if (brandIcon.length === 0) {
      error = error + 1;
      notifyError("Please select Icon.");
    }
    if (brandName.trim().length == 0) {
      error = error + 1;
      notifyError("Please enter shipping method.");
    }
    if (brandFile.length === 0) {
      error = error + 1;
      notifyError("Please select Icon.");
    }

    if (error === 0) {
      validation();
    }
  };
  const validation = () => {
    let newCatalog = {
      id: itemId ? itemId : "",
      brandName: brandName,
      brandLogo: brandIcon && brandIcon[0],
      description: dec,
      file: brandFile && brandFile[0],
    };

    CatalogService.postCatalog(newCatalog).then((res) => {
      if (res?.success === true) {
        notifySuccess(res.message);
        if (itemId) {
          toggleDrawer();
        }
        setValue("brandName", "");
        setBrandName("");
        setValue("description", "");
        setDec("");
        setBrandIcon([]);
        clearErrors("brandName");
        clearErrors("description");
        getCatalogDetails();
      } else {
        notifyError(res.message);
      }
    });
  };
  const handleCancel = () => {
    setTaxName("");
    setTaxAmount("");
    setValue("taxAmount", "");
    setValue("taxName", "");
    setTaxType("PERCENTAGE (%)");
    clearErrors("taxAmount");
    clearErrors("taxName");
  };
  // ----------------select for update tax------------
  const handleUpdate = (id) => {
    toggleDrawer();

    let AllData = [...getAllList];
    // console.log("AllData===>", AllData);

    AllData.forEach((item, i) => {
      if (item._id === id) {
        setValue("brandName", item.brandName);
        setBrandName(item.brandName);
        setValue("description", item.description);
        setDec(item.description);
        setBrandIcon([item.brandLogo]);
        setBrandFile([item.file]);
        setItemId(id);
      }
    });
  };
  // ----------------cancel update------------------
  const cancelUpdate = () => {
    setTaxName("");
    setTaxAmount("");
    setValue("taxAmount", "");
    setValue("taxName", "");
    setTaxType("PERCENTAGE (%)");
    clearErrors("taxAmount");
    clearErrors("taxName");
    toggleDrawer();
  };
  // -------------------get tax details------------------------
  const getCatalogDetails = () => {
    CatalogService.getCatalog({ page: currentPage, limit: limitData }).then(
      (res) => {
        if (res?.success === true) {
          notifySuccess(res?.message);
          setGetAllList(res?.brandCatalogDetailsdData);
          setCatalogPage(res?.Pagination);
        } else {
          notifyError(res.message);
        }
      }
    );
  };
  return {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    errors,
    onSubmit,
    handleCancel,
    handleUpdate,
    cancelUpdate,
    validation,
    catalogPage,
    brandName,
    brandIcon,
    setBrandIcon,
    dec,
    brandFile,
    getAllList,
    setBrandFile,
    handleDec,
    handleBrandName,
    getCatalogDetails,
  };
};

export default useCatalogSubmit;

import combinate from "combinate";
import { useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import swal from "sweetalert";

//internal import
import useAsync from "@/hooks/useAsync";
import { SidebarContext } from "@/context/SidebarContext";
import AttributeServices from "@/services/AttributeServices";
import ProductServices from "@/services/ProductServices";
import { notifyError, notifySuccess } from "@/utils/toast";
import SettingServices from "@/services/SettingServices";
import {
  showingTranslateValue,
  handlerTextTranslateHandler,
} from "@/utils/translate";
import TaxService from "@/services/TaxService";

const useProductSubmit = (id) => {
  const location = useLocation();
  const { isDrawerOpen, closeDrawer, setIsUpdate, lang } =
    useContext(SidebarContext);

  const { data: attribue } = useAsync(AttributeServices.getShowingAttributes);
  const { data: globalSetting } = useAsync(SettingServices.getGlobalSetting);

  // react ref
  const resetRef = useRef([]);
  const resetRefTwo = useRef("");

  // react hook
  const [imageUrl, setImageUrl] = useState([]);
  const [tag, setTag] = useState([]);
  const [values, setValues] = useState({});
  let [variants, setVariants] = useState([]);
  const [variant, setVariant] = useState([]);
  const [totalStock, setTotalStock] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const [originalPrice, setOriginalPrice] = useState(0);
  const [price, setPrice] = useState(0);
  const [sku, setSku] = useState("");
  const [barcode, setBarcode] = useState("");
  const [isBasicComplete, setIsBasicComplete] = useState(false);
  const [tapValue, setTapValue] = useState("Basic Info");
  const [isCombination, setIsCombination] = useState(false);
  const [attTitle, setAttTitle] = useState([]);
  const [variantTitle, setVariantTitle] = useState([]);
  const [attributes, setAttributes] = useState([]);
  const [productId, setProductId] = useState("");
  const [updatedId, setUpdatedId] = useState(id);
  const [imgId, setImgId] = useState("");
  const [isBulkUpdate, setIsBulkUpdate] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [defaultCategory, setDefaultCategory] = useState([]);
  const [resData, setResData] = useState({});
  const [language, setLanguage] = useState(lang);
  const [openModal, setOpenModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [slug, setSlug] = useState("");
  const [userManual, setUserManual] = useState([]);
  const [technical, setTechnical] = useState([]);
  const [test, setTest] = useState([]);
  const [tax, setTax] = useState([]);
  const [minimumOrder, setMinimumOrder] = useState("");
  const [warrantyPeriod, setWarrantyPeriod] = useState("");
  const [taxOption, setTaxOption] = useState([]);
  const [taxRes, setTaxRes] = useState([]);
  const [slabStatus, setSlabStatus] = useState(true);
  const [slab, setSlab] = useState([
    {
      name: "MOQ slab 1",
      minQuantity: 0,
      maxQuantity: 0,
      moqSalePrice: 0,
    },
  ]);

  console.log("All product drawer data=>", {
    slab: slab,
    minimumOrder: minimumOrder,
  });

  // console.log(
  //   "defaultCategory",
  //   defaultCategory,
  //   "selectedCategory",
  //   selectedCategory
  // );

  // handle click
  const onCloseModal = () => setOpenModal(false);
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // console.log('data is data',data)
    try {
      if (!imageUrl) return notifyError("Image is required!");

      if (data.originalPrice < data.price) {
        setIsSubmitting(false);
        return notifyError(
          "SalePrice must be less then or equal of product price!"
        );
      }
      if (!defaultCategory[0]) {
        setIsSubmitting(false);
        return notifyError("Default Category is required!");
      }

      const updatedVariants = variants.map((v, i) => {
        const newObj = {
          ...v,
          price: Number(v?.price || 0),
          originalPrice: Number(v?.originalPrice || 0),
          discount: Number(v?.discount || 0),
          quantity: Number(v?.quantity || 0),
        };
        return newObj;
      });

      setIsBasicComplete(true);
      setPrice(data.price);
      setQuantity(data.stock);
      setBarcode(data.barcode);
      setSku(data.sku);
      setOriginalPrice(data.originalPrice);

      // const titleTranslates = await handlerTextTranslateHandler(
      //   data.title,
      //   language
      // );
      // const descriptionTranslates = await handlerTextTranslateHandler(
      //   data.description,
      //   language
      // );
      const productImage = (arr) => {
        let imageArr = [];
        const img = arr?.map((item, i) => {
          let newImg = {
            medialink: item,
            defaultOrNot: i === 0 ? true : false,
          };
          imageArr.push(newImg);
        });
        return imageArr;
      };

      console.log("taxRes=>>>", taxRes);
      const AllTax = tax?.map((item) => item._id);
      console.log("AllTax=>>>", AllTax);

      const productData = {
        barcode: data?.barcode || "",
        title: data.title,
        description: data.description ? data.description : "",
        slug: data.slug
          ? data.slug
          : data.title.toLowerCase().replace(/[^A-Z0-9]+/gi, "-"),
        categories: selectedCategory.map((item) => item._id),
        category: defaultCategory[0]._id,
        image: productImage(imageUrl),
        stock: variants?.length < 1 ? data.stock : totalStock,
        tax: AllTax,
        warrantyPeriods: {
          duration: warrantyPeriod,
          unit: "months",
        },
        minimumOrderOfQuantity: minimumOrder,
        moqSlab: slab,
        sales: 100,
        tag: tag,
        prices: {
          price: data.originalPrice || 0,
          salePrice: data.price || 0,
          discount: data.originalPrice - data.price,
        },
        variants: isCombination ? updatedVariants : [],
        isCombination: updatedVariants?.length > 0 ? isCombination : false,
        status: "show",
        userManual: productImage(userManual),
        technicalSpecification: productImage(technical),
        testCertification: productImage(test),
      };

      console.log("productData ===========>", productData, "data", data);
      // return setIsSubmitting(false);
      let check = true;
      for (let ele of slab) {
        if (parseInt(ele.minQuantity, 10) > parseInt(minimumOrder, 10)) {
          if (parseInt(ele.minQuantity, 10) > parseInt(ele.maxQuantity, 10)) {
            setSlabStatus(false);
            check = false;
            setIsSubmitting(false);

            notifyError(`in ${ele.name} ,min slab is less the MAx Slab`);
          }
        } else {
          setSlabStatus(false);
          check = false;
          setIsSubmitting(false);

          notifyError(
            `in ${ele.name}, min slab is greater then minimum order quantity`
          );
        }
      }
      if (check === true) {
        if (updatedId) {
          const res = await ProductServices.updateProduct(
            updatedId,
            productData
          );
          if (res) {
            if (isCombination) {
              setIsUpdate(true);
              notifySuccess(res.message);
              setIsBasicComplete(true);
              setIsSubmitting(false);
              handleProductTap("Combination", true);
            } else {
              setIsUpdate(true);
              notifySuccess(res.message);
              setIsSubmitting(false);
            }
          }

          if (
            tapValue === "Combination" ||
            (tapValue !== "Combination" && !isCombination)
          ) {
            closeDrawer();
          }
        } else {
          const res = await ProductServices.addProduct(productData);
          // console.log("res is ", res);
          if (isCombination) {
            setUpdatedId(res._id);
            setValue("title", res.title[language ? language : "en"]);
            setValue(
              "description",
              res.description[language ? language : "en"]
            );
            setValue("slug", res.slug);
            setValue("show", res.show);
            setValue("barcode", res.barcode);
            setValue("stock", res.stock);
            setTag(JSON.parse(res.tag));
            setImageUrl(res.image);
            setVariants(res.variants);
            setValue("productId", res.productId);
            setProductId(res.productId);
            setOriginalPrice(res?.prices?.originalPrice);
            setPrice(res?.prices?.price);
            setBarcode(res.barcode);
            setSku(res.sku);
            setValue("minimumOrder", "");
            setValue("warrantyPeriod", "");
            setSlab([
              {
                name: "MOQ slab 1",
                minQuantity: 0,
                maxQuantity: 0,
                moqSalePrice: 0,
              },
            ]);

            const result = res.variants.map(
              ({
                originalPrice,
                price,
                discount,
                quantity,
                barcode,
                sku,
                productId,
                image,
                ...rest
              }) => rest
            );

            setVariant(result);
            setIsUpdate(true);
            setIsBasicComplete(true);
            setIsSubmitting(false);
            handleProductTap("Combination", true);
            notifySuccess("Product Added Successfully!");
          } else {
            setIsUpdate(true);
            notifySuccess("Product Added Successfully!");
          }

          if (
            tapValue === "Combination" ||
            (tapValue !== "Combination" && !isCombination)
          ) {
            setIsSubmitting(false);
            closeDrawer();
          }
        }
      }
    } catch (err) {
      // console.log("err", err);
      setIsSubmitting(false);
      notifyError(err ? err?.response?.data?.message : err.message);
      closeDrawer();
    }
    setIsSubmitting(false);
  };

  useEffect(() => {
    if (!isDrawerOpen) {
      setSlug("");
      setLanguage(lang);
      setValue("language", language);
      handleProductTap("Basic Info", true);
      setResData({});
      setValue("sku");
      setValue("title");
      setValue("slug");
      setValue("description");
      setValue("quantity");
      setValue("stock");
      setValue("originalPrice");
      setValue("price");
      setValue("barcode");
      setValue("productId");

      setProductId("");
      // setValue('show');
      setImageUrl([]);
      setTag([]);
      setVariants([]);
      setVariant([]);
      setValues({});
      setTotalStock(0);
      setSelectedCategory([]);
      setDefaultCategory([]);
      if (location.pathname === "/products") {
        resetRefTwo?.current?.resetSelectedValues();
      }

      clearErrors("sku");
      clearErrors("title");
      clearErrors("slug");
      clearErrors("description");
      clearErrors("stock");
      clearErrors("quantity");
      setValue("stock", 0);
      setValue("costPrice", 0);
      setValue("price", 0);
      setValue("originalPrice", 0);
      clearErrors("show");
      clearErrors("barcode");
      setIsCombination(false);
      setIsBasicComplete(false);
      setIsSubmitting(false);
      setAttributes([]);

      setUpdatedId();
      return;
    } else {
      handleProductTap("Basic Info", true);
    }

    if (id) {
      setIsBasicComplete(true);
      (async () => {
        try {
          const res = await ProductServices.getProductById(id);

          // console.log("res", res);

          if (res) {
            let response = res?.tax;
            let allTax = [];
            for (let ele of response) {
              taxRes.map((item) => {
                if (ele == item._id) {
                  allTax.push(item);
                }
              });
            }
            let arr = allTax.map((item) => ({
              amount: `${item.taxName} (${item.type === "flatin" ? "₹" : ""}${
                item.ammount
              } ${item.type === "percentage" ? "%" : ""})`,
              _id: item._id,
              taxName: item.taxName,
              type: item.type,
            }));
            setTax(arr);

            setResData(res);
            setSlug(res.slug);
            setUpdatedId(res._id);
            setValue("title", res.title);
            setValue("description", res.description);
            setValue("slug", res.slug);
            setValue("show", res.show);
            setValue("sku", res.sku);
            setValue("barcode", res.barcode);
            setValue("stock", res.stock);
            setValue("productId", res.productId);
            setValue("price", res?.prices?.salePrice);
            setValue("originalPrice", res?.prices?.price);
            setValue("stock", res?.stock);
            setMinimumOrder(res?.minimumOrderOfQuantity);
            setValue("minimumOrder", res?.minimumOrderOfQuantity);
            setWarrantyPeriod(res?.warrantyPeriods?.duration);
            setValue("warrantyPeriod", res?.warrantyPeriods?.duration);
            setTag(res?.tag);

            setProductId(res.productId ? res.productId : res._id);
            setBarcode(res.barcode);
            setSku(res.sku);

            res.categories.map((category) => {
              category.name = showingTranslateValue(category?.name, lang);

              return category;
            });

            res.category.name = showingTranslateValue(
              res?.category?.name,
              lang
            );
            const allImg = (arr) => {
              let img = arr.map((item) => item?.medialink);
              return img;
            };
            setSelectedCategory(res.categories);
            setDefaultCategory([res?.category]);

            setImageUrl(res?.image && allImg(res?.image));
            setUserManual(res?.userManual && allImg(res?.userManual));
            setTechnical(
              res?.technicalSpecification && allImg(res?.technicalSpecification)
            );
            setTest(res?.testCertification && allImg(res?.testCertification));
            setVariants(res.variants);
            setIsCombination(res.isCombination);
            setQuantity(res?.stock);
            setTotalStock(res.stock);
            setOriginalPrice(res?.prices?.originalPrice);
            setPrice(res?.prices?.price);
            setSlab(res.moqSlab);
          }
        } catch (err) {
          notifyError(err ? err?.response?.data?.message : err.message);
        }
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    id,
    setValue,
    isDrawerOpen,
    location.pathname,
    clearErrors,
    language,
    lang,
  ]);

  //for filter related attribute and extras for every product which need to update
  useEffect(() => {
    const result = attribue
      ?.filter((att) => att.option !== "Checkbox")
      .map((v) => {
        return {
          label: showingTranslateValue(v?.title, lang),
          value: showingTranslateValue(v?.title, lang),
        };
      });

    setAttTitle([...result]);

    const res = Object?.keys(Object.assign({}, ...variants));
    const varTitle = attribue?.filter((att) => res.includes(att._id));

    if (variants?.length > 0) {
      const totalStock = variants?.reduce((pre, acc) => pre + acc.quantity, 0);
      setTotalStock(Number(totalStock));
    }
    setVariantTitle(varTitle);
  }, [attribue, variants, language, lang]);

  //for adding attribute values
  const handleAddAtt = (v, el) => {
    const result = attribue.filter((att) => {
      const attribueTItle = showingTranslateValue(att?.title, lang);
      return v.some((item) => item.label === attribueTItle);
    });

    const attributeArray = result.map((value) => {
      const attributeTitle = showingTranslateValue(value?.title, lang);
      return {
        ...value,
        label: attributeTitle,
        value: attributeTitle,
      };
    });

    setAttributes(attributeArray);
  };

  //generate all combination combination
  const handleGenerateCombination = () => {
    if (Object.keys(values).length === 0) {
      return notifyError("Please select a variant first!");
    }

    const result = variants.filter(
      ({
        originalPrice,
        discount,
        price,
        quantity,
        barcode,
        sku,
        productId,
        image,
        ...rest
      }) => JSON.stringify({ ...rest }) !== "{}"
    );

    // console.log("result", result);

    setVariants(result);

    const combo = combinate(values);

    combo.map((com, i) => {
      if (JSON.stringify(variant).includes(JSON.stringify(com))) {
        return setVariant((pre) => [...pre, com]);
      } else {
        const newCom = {
          ...com,

          originalPrice: originalPrice || 0,
          price: price || 0,
          quantity: Number(quantity),
          discount: Number(originalPrice - price),
          productId: productId && productId + "-" + (variants.length + i),
          barcode: barcode,
          sku: sku,
          image: imageUrl[0] || "",
        };

        setVariants((pre) => [...pre, newCom]);
        return setVariant((pre) => [...pre, com]);
      }
    });

    setValues({});

    // resetRef?.current?.map((v, i) =>
    //   resetRef?.current[i]?.resetSelectedValues()
    // );
  };

  //for clear selected combination
  const handleClearVariant = () => {
    setVariants([]);
    setVariant([]);
    setValues({});
    resetRef?.current?.map(
      async (v, i) => await resetRef?.current[i]?.resetSelectedValues()
    );

    // console.log('value', selectedList, removedItem, resetRef.current);
  };

  //for edit combination values
  const handleEditVariant = (variant) => {
    setTapValue("Combine");
  };

  //for remove combination values
  const handleRemoveVariant = (vari, ext) => {
    // console.log("handleRemoveVariant", vari, ext);
    swal({
      title: `Are you sure to delete this ${ext ? "Extra" : "combination"}!`,
      text: `(If Okay, It will be delete this ${
        ext ? "Extra" : "combination"
      })`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const result = variants.filter((v) => v !== vari);
        setVariants(result);
        // console.log("result", result);
        const {
          originalPrice,
          price,
          discount,
          quantity,
          barcode,
          sku,
          productId,
          image,
          ...rest
        } = vari;
        const res = variant.filter(
          (obj) => JSON.stringify(obj) !== JSON.stringify(rest)
        );
        setVariant(res);
        setIsBulkUpdate(true);
        // setTimeout(() => setIsBulkUpdate(false), 500);
        const timeOutId = setTimeout(() => setIsBulkUpdate(false), 500);
        return clearTimeout(timeOutId);
      }
    });
  };

  // handle notification for combination and extras
  const handleIsCombination = () => {
    if ((isCombination && variantTitle.length) > 0) {
      swal({
        title: "Are you sure to remove combination from this product!",
        text: "(It will be delete all your combination and extras)",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((value) => {
        // console.log(value);
        if (value) {
          setIsCombination(!isCombination);
          setTapValue("Basic Info");
          setVariants([]);
          setVariant([]);
        }
      });
    } else {
      setIsCombination(!isCombination);
      setTapValue("Basic Info");
    }
  };

  //for select bulk action images
  const handleSelectImage = (img) => {
    if (openModal) {
      variants[imgId].image = img;
      setOpenModal(false);
    }
  };

  //for select individual combination image
  const handleSelectInlineImage = (id) => {
    setImgId(id);
    setOpenModal(!openModal);
  };

  //this for variant/combination list
  const handleSkuBarcode = (value, name, id) => {
    variants[id][name] = value;
  };

  const handleProductTap = (e, value, name) => {
    // console.log(e);

    if (value) {
      if (!value)
        return notifyError(
          `${"Please save product before adding combinations!"}`
        );
    } else {
      if (!isBasicComplete)
        return notifyError(
          `${"Please save product before adding combinations!"}`
        );
    }
    setTapValue(e);
  };

  //this one for combination list
  const handleQuantityPrice = (value, name, id, variant) => {
    // console.log(
    //   "handleQuantityPrice",
    //   "name",
    //   name,
    //   "value",
    //   value,
    //   "variant",
    //   variant
    // );
    if (name === "originalPrice" && Number(value) < Number(variant.price)) {
      // variants[id][name] = Number(variant.originalPrice);
      notifyError("Price must be more then or equal of originalPrice!");
      setValue("originalPrice", variant.originalPrice);
      setIsBulkUpdate(true);
      const timeOutId = setTimeout(() => setIsBulkUpdate(false), 100);
      return () => clearTimeout(timeOutId);
    }
    if (name === "price" && Number(variant.originalPrice) < Number(value)) {
      // variants[id][name] = Number(variant.originalPrice);
      notifyError("SalePrice must be less then or equal of product price!");
      setValue("price", variant.originalPrice);
      setIsBulkUpdate(true);
      const timeOutId = setTimeout(() => setIsBulkUpdate(false), 100);
      return () => clearTimeout(timeOutId);
    }
    setVariants((pre) =>
      pre.map((com, i) => {
        if (i === id) {
          const updatedCom = {
            ...com,
            [name]: Math.round(value),
          };

          if (name === "price") {
            updatedCom.discount = Number(variant.originalPrice) - Number(value);
          }
          if (name === "originalPrice") {
            updatedCom.discount = Number(value) - Number(variant.price);
          }

          return updatedCom;
        }
        return com;
      })
    );

    const totalStock = variants.reduce(
      (pre, acc) => pre + Number(acc.quantity),
      0
    );
    setTotalStock(Number(totalStock));
  };

  //for change language in product drawer
  const handleSelectLanguage = (lang) => {
    setLanguage(lang);
    if (Object.keys(resData).length > 0) {
      setValue("title", resData.title[lang ? lang : "en"]);
      setValue("description", resData.description[lang ? lang : "en"]);
    }
  };

  //for handle product slug
  const handleProductSlug = (value) => {
    setValue("slug", value.toLowerCase().replace(/[^A-Z0-9]+/gi, "-"));
    setSlug(value.toLowerCase().replace(/[^A-Z0-9]+/gi, "-"));
  };

  //for handle product minimum Order
  const handleProductMinimumOrder = (value) => {
    setValue("minimumOrder", value.toLowerCase().replace(/[^A-Z0-9]+/gi, "-"));
    setMinimumOrder(value.toLowerCase().replace(/[^A-Z0-9]+/gi, "-"));
  };

  //for handle product "Warranty Period Year
  const handleProductWarrantyPeriod = (value) => {
    setValue(
      "warrantyPeriod",
      value.toLowerCase().replace(/[^A-Z0-9]+/gi, "-")
    );
    setWarrantyPeriod(value.toLowerCase().replace(/[^A-Z0-9]+/gi, "-"));
  };
  // for MOQ slab -----------------------------------
  const handleAddSlab = (id) => {
    let newArray = [...slab];
    const newSlab = {
      name: `MOQ slab ${id}`,
      minQuantity: 0,
      maxQuantity: 0,
      moqSalePrice: 0,
    };
    setSlab([...newArray, newSlab]);
  };

  const isNumber = (input) => {
    const numberPattern = /^\d+$/;
    return numberPattern.test(input);
  };
  // for MOQ slab Price--------------------------
  const handleDeleteSlab = (id) => {
    let newArray = [...slab];
    const slabFilter = newArray.filter((item) => item.name !== id);
    setSlab(slabFilter);
  };

  // for MOQ slab price ---------------------------------
  const handleInputField = (val, id) => {
    let price = parseInt(val, 10);
    if (isNumber(price)) {
      let newArray = [...slab];
      newArray.forEach((ele, i) => {
        if (ele.name === id) {
          ele.moqSalePrice = price;
        }
      });
      setSlab(newArray);
    }
  };
  const handleMaxMOQ = (val, id) => {
    let price = parseInt(val, 10);
    let newArray = [...slab];
    setSlabStatus(true);
    if (isNumber(val)) {
      newArray.forEach((ele, i) => {
        if (ele.name === id) {
          ele.maxQuantity = val;
        }
      });
      setSlab(newArray);
    } else {
      if (val === "") {
        newArray.forEach((ele, i) => {
          if (ele.name === id) {
            ele.maxQuantity = val;
          }
        });
        setSlab(newArray);
      }
    }
  };
  const handleMinMOQ = (val, id) => {
    let price = parseInt(val, 10);
    let newArray = [...slab];
    setSlabStatus(true);

    if (isNumber(val)) {
      newArray.forEach((ele, i) => {
        if (ele.name === id) {
          ele.minQuantity = val;
        }
      });
      setSlab(newArray);
    } else {
      if (val === "") {
        newArray.forEach((ele, i) => {
          if (ele.name === id) {
            ele.minQuantity = "";
          }
        });
        setSlab(newArray);
      }
    }
  };
  // useEffect(() => {
  //   setTimeout(() => {
  //     for (let ele of slab) {
  //       if (ele.minQuantity > minimumOrder) {
  //         if (ele.minQuantity >= ele.maxQuantity) {
  //           notifyError(`${ele.name} is less the MAx Slab`);
  //         }
  //       } else {
  //         notifyError(`${ele.name} is greater then minimum order quantity`);
  //       }
  //     }
  //   }, 2000);
  // }, [slab]);
  // for handle get tax option
  const getTaxDetails = () => {
    TaxService.getTax().then((res) => {
      if (res?.success === true) {
        setTaxRes(res?.taxDetails);
        let response = res?.taxDetails;
        let arr = response.map((item) => ({
          amount: `${item.taxName} (${item.type === "flatin" ? "₹" : ""}${
            item.ammount
          } ${item.type === "percentage" ? "%" : ""})`,
          _id: item._id,
          taxName: item.taxName,
          type: item.type,
        }));
        setTaxOption(arr);
      }
    });
  };
  useEffect(() => {
    getTaxDetails();
  }, []);
  return {
    tag,
    setTag,
    values,
    language,
    register,
    onSubmit,
    errors,
    slug,
    openModal,
    attribue,
    setValues,
    variants,
    imageUrl,
    setImageUrl,
    handleSubmit,
    isCombination,
    variantTitle,
    attributes,
    attTitle,
    handleAddAtt,
    productId,
    onCloseModal,
    isBulkUpdate,
    globalSetting,
    isSubmitting,
    tapValue,
    setTapValue,
    resetRefTwo,
    userManual,
    setUserManual,
    technical,
    setTechnical,
    test,
    setTest,
    tax,
    setTax,
    minimumOrder,
    setMinimumOrder,
    warrantyPeriod,
    setWarrantyPeriod,
    taxOption,
    slab,
    setSlab,

    handleProductMinimumOrder,
    handleSkuBarcode,
    handleProductTap,
    selectedCategory,
    setSelectedCategory,
    setDefaultCategory,
    defaultCategory,
    handleProductSlug,
    handleSelectLanguage,
    handleIsCombination,
    handleEditVariant,
    handleRemoveVariant,
    handleClearVariant,
    handleQuantityPrice,
    handleSelectImage,
    handleSelectInlineImage,
    handleGenerateCombination,
    handleProductWarrantyPeriod,
    handleAddSlab,
    handleInputField,
    handleMaxMOQ,
    handleMinMOQ,
    handleDeleteSlab,
  };
};

export default useProductSubmit;

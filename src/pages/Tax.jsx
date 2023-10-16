import React, { useContext, useState } from "react";
import {
  Table,
  TableHeader,
  TableCell,
  TableFooter,
  TableContainer,
  Input,
  Pagination,
} from "@windmill/react-ui";
import { useTranslation } from "react-i18next";

//internal import

import useAsync from "@/hooks/useAsync";
import useToggleDrawer from "@/hooks/useToggleDrawer";
import NotFound from "@/components/table/NotFound";
import ProductServices from "@/services/ProductServices";
import PageTitle from "@/components/Typography/PageTitle";
import { SidebarContext } from "@/context/SidebarContext";
import ProductTable from "@/components/product/ProductTable";
import MainDrawer from "@/components/drawer/MainDrawer";
import ProductDrawer from "@/components/drawer/ProductDrawer";
import CheckBox from "@/components/form/CheckBox";
import useProductFilter from "@/hooks/useProductFilter";
import TableLoading from "@/components/preloader/TableLoading";
import useTaxSubmit from "@/hooks/useTaxSubmit";
import LabelArea from "@/components/form/LabelArea";
import Error from "@/components/form/Error";
import { Button } from "@windmill/react-ui";

const Tax = ({ id }) => {
  const { title, allId, serviceId, handleDeleteMany, handleUpdateMany } =
    useToggleDrawer();

  const { t } = useTranslation();
  const {
    toggleDrawer,
    lang,
    currentPage,
    handleChangePage,
    searchText,
    category,
    sortedField,
    limitData,
  } = useContext(SidebarContext);

  const { data, loading, error } = useAsync(() =>
    ProductServices.getAllProducts({
      page: currentPage,
      limit: limitData,
      category: category,
      title: searchText,
      price: sortedField,
    })
  );
  const {
    register,
    errors,
    taxName,
    taxAmount,
    isSubmitting,
    buttonType,
    taxType,
    taxList,
    handleTaxName,
    handleTaxAmount,
    handleSelectType,
    onSubmit,
    handleCancel,
  } = useTaxSubmit();

  // react hooks
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);

  const handleSelectAll = () => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(data?.products.map((li) => li._id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  // console.log('productss',products)
  const { serviceData } = useProductFilter(data?.products);

  return (
    <>
      <PageTitle>{t("Tax Details")}</PageTitle>
      {/* <DeleteModal ids={allId} setIsCheck={setIsCheck} title={title} /> */}
      {/* <BulkActionDrawer ids={allId} title="Products" /> */}
      <MainDrawer>
        <ProductDrawer id={serviceId} />
      </MainDrawer>

      <from onSubmit={onSubmit}>
        <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
          <LabelArea label={t("TAX NAME")} />
          <div className="col-span-8 sm:col-span-4">
            <Input
              {...register(`taxName`, {
                required: "Tax Name is required!",
              })}
              className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
              name="taxName"
              type="text"
              defaultValue={taxName}
              placeholder={t("Enter Tax Title.")}
              onBlur={(e) => handleTaxName(e.target.value)}
            />
            <Error errorName={errors.taxName} />
          </div>
        </div>
        <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
          <LabelArea label={t("TYPE")} />
          <div className="col-span-8 sm:col-span-4 w-full flex gap-1 flex-wrap">
            {buttonType &&
              buttonType.map((item, i) => (
                <p
                  onClick={() => handleSelectType(item)}
                  className={`py-3 px-4 rounded bg-gray-200 w-48 text-xs text-center cursor-pointer ${
                    taxType === item
                      ? "border-2 border-dashed border-green-500"
                      : ""
                  } `}
                >
                  {item}
                </p>
              ))}
          </div>
        </div>

        <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
          <LabelArea label={t("AMOUNT")} />
          <div className="col-span-8 sm:col-span-4">
            <Input
              {...register(`taxAmount`, {
                required: "Amount is required!",
              })}
              className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
              name="taxAmount"
              type="text"
              defaultValue={taxAmount}
              placeholder={t("Please Enter Amount.")}
              onBlur={(e) => handleTaxAmount(e.target.value)}
            />
            <Error errorName={errors.taxAmount} />
          </div>
        </div>
        <div className=" z-10  w-full py-4 lg:py-8 px-6 grid gap-4 lg:gap-6 xl:gap-6 bg-gray-50 border-t border-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
          <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
            <LabelArea />
            <div className="col-span-8 sm:col-span-4 flex gap-1 justify-between w-full">
              <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                <Button
                  onClick={()=>handleCancel()}
                  className="h-12 bg-white w-full text-red-500 hover:bg-red-50 hover:border-red-100 hover:text-red-600 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-red-700"
                  layout="outline"
                >
                  {t("CancelBtn")}
                </Button>
              </div>

              <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow flex-row">
                {isSubmitting ? (
                  <Button disabled={true} type="button" className="w-full h-12">
                    <img
                      src={spinnerLoadingImage}
                      alt="Loading"
                      width={20}
                      height={10}
                    />{" "}
                    <span className="font-serif ml-2 font-light">
                      Processing
                    </span>
                  </Button>
                ) : (
                  <Button type="submit" className="w-full h-12" onClick={onSubmit}>
                    {id ? (
                      <span>
                        {t("UpdateBtn")} {title}
                      </span>
                    ) : (
                      <span>ADD {title}</span>
                    )}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </from>

      {loading ? (
        <TableLoading row={12} col={7} width={160} height={20} />
      ) : error ? (
        <span className="text-center mx-auto text-red-500">{error}</span>
      ) : serviceData?.length !== 0 ? (
        <TableContainer className="mb-8 rounded-b-lg">
          <Table>
            <TableHeader>
              <tr>
                <TableCell>
                  <CheckBox
                    type="checkbox"
                    name="selectAll"
                    id="selectAll"
                    isChecked={isCheckAll}
                    handleClick={handleSelectAll}
                  />
                </TableCell>
                <TableCell>{t("Tax Name")}</TableCell>
                <TableCell>{t("Amount")}</TableCell>
              </tr>
            </TableHeader>
            <ProductTable
              lang={lang}
              isCheck={isCheck}
              products={data?.products}
              setIsCheck={setIsCheck}
              //   currency={currency}
            />
          </Table>
          <TableFooter>
            <Pagination
              totalResults={data?.totalDoc}
              resultsPerPage={limitData}
              onChange={handleChangePage}
              label="Product Page Navigation"
            />
          </TableFooter>
        </TableContainer>
      ) : (
        <NotFound title="Product" />
      )}
    </>
  );
};

export default Tax;

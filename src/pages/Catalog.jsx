import React, { useContext, useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableCell,
  TableFooter,
  TableContainer,
  Input,
  Pagination,
  Textarea,
} from "@windmill/react-ui";
// import {
//   Button,
//   Input,
//   TableCell,
//   TableContainer,
//   TableHeader,
//   Table,
// } from "@windmill/react-ui";
import { useTranslation } from "react-i18next";
import { FiEdit, FiTrash2, FiZoomIn } from "react-icons/fi";
import { FaRegFilePdf } from "react-icons/fa";

//internal import

import useAsync from "@/hooks/useAsync";
import useToggleDrawer from "@/hooks/useToggleDrawer";
// import NotFound from "@/components/table/NotFound";
import ProductServices from "@/services/ProductServices";
import PageTitle from "@/components/Typography/PageTitle";
import { SidebarContext } from "@/context/SidebarContext";
import MainDrawer from "@/components/drawer/MainDrawer";
// import ProductDrawer from "@/components/drawer/ProductDrawer";
// import CheckBox from "@/components/form/CheckBox";
import useProductFilter from "@/hooks/useProductFilter";
// import TableLoading from "@/components/preloader/TableLoading";
import LabelArea from "@/components/form/LabelArea";
import Error from "@/components/form/Error";
import { Button } from "@windmill/react-ui";
import Uploader from "@/components/image-uploader/Uploader";

import useCatalogSubmit from "@/hooks/useCatalogSubmit";
import CatalogTable from "@/components/Catalog/CatalogTable";
import CatalogDrawer from "@/components/drawer/CatalogDrawer";
// import Tooltip from "@/components/tooltip/Tooltip";

const Catalog = ({ id }) => {
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

  // const { data, loading, error } = useAsync(() =>
  //   ProductServices.getAllProducts({
  //     page: currentPage,
  //     limit: limitData,
  //     category: category,
  //     title: searchText,
  //     price: sortedField,
  //   })
  // );
  const {
    register,
    errors,
    isSubmitting,
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
    getAllList,
    brandFile,
    setBrandFile,
    handleBrandName,
    handleDec,
    getCatalogDetails,
  } = useCatalogSubmit();

  // react hooks
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);

  // const handleSelectAll = () => {
  //   setIsCheckAll(!isCheckAll);
  //   setIsCheck(data?.products.map((li) => li._id));
  //   if (isCheckAll) {
  //     setIsCheck([]);
  //   }
  // };

  // console.log('productss',products)
  // const { serviceData } = useProductFilter(data?.products);

  useEffect(() => {
    getCatalogDetails();
  }, []);
  return (
    <>
      <PageTitle>{"Shipping Details"}</PageTitle>
      {/* <DeleteModal ids={allId} setIsCheck={setIsCheck} title={title} /> */}
      {/* <BulkActionDrawer ids={allId} title="Products" /> */}
      <MainDrawer>
        <CatalogDrawer
          id={serviceId}
          isSubmitting={isSubmitting}
          brandName={brandName}
          UpdateCatalogData={validation}
          cancelUpdate={cancelUpdate}
          handleBrandName={handleBrandName}
          brandIcon={brandIcon}
          setBrandIcon={setBrandIcon}
          dec={dec}
          handleDec={handleDec}
          brandFile={brandFile}
          setBrandFile={setBrandFile}
        />
      </MainDrawer>
      <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
        <LabelArea label={"Brand Name"} />
        <div className="col-span-8 sm:col-span-4">
          <Input
            {...register(`brandName`, {
              required: "Brand Name is required!",
            })}
            className="border h-12 text-sm focus:outline-none block w-full   dark:bg-gray-700 border-transparent "
            name="brandName"
            type="text"
            defaultValue={brandName}
            placeholder={"Enter Brand Name."}
            onBlur={(e) => handleBrandName(e.target.value)}
          />
          <Error errorName={errors.brandName} />
        </div>
      </div>
      <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
        <LabelArea label={"Brand Logo"} />
        <div className="col-span-8 sm:col-span-4">
          <Uploader
            product
            folder="product"
            imageUrl={brandIcon}
            setImageUrl={setBrandIcon}
          />
        </div>
      </div>

      <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
        <LabelArea label={"Description"} />
        <div className="col-span-8 sm:col-span-4">
          <Textarea
            className="border text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white"
            {...register("description", {
              required: false,
            })}
            name="description"
            placeholder={"Brand Description"}
            rows="4"
            spellCheck="false"
            defaultValue={dec}
            onBlur={(e) => handleDec(e.target.value)}
          />
          <Error errorName={errors.description} />
        </div>
      </div>
      <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
        <LabelArea label={"File"} />
        <div className="col-span-8 sm:col-span-4">
          <label
            htmlFor="filesss"
            className="flex justify-items-center items-center border text-sm focus:outline-none cursor-pointer block w-ful border-transparent focus:bg-whit p-1 rounded-md bg-gray-200  dark:text-primaryOn dark:bg-bgBlack "
          >
            {" "}
            <FaRegFilePdf className="text-4xl" /> select file
          </label>

          <input id="filesss" type="file" accept=".pdf,.docx,.xlsx" />
        </div>
      </div>
      <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
        <LabelArea label={"Brand Logo"} />
        <div className="col-span-8 sm:col-span-4">
          <Uploader
            product
            pdf={true}
            pdfName={"name"}
            folder="product"
            imageUrl={brandFile}
            setImageUrl={setBrandFile}
          />
        </div>
      </div>

      <div className=" z-10  w-full py-4 lg:py-8 px-6 grid gap-4 lg:gap-6 xl:gap-6 bg-gray-50 border-t border-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
        <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
          <LabelArea />
          <div className="col-span-8 sm:col-span-4 flex gap-1 justify-between w-full">
            <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
              <Button
                onClick={() => cancelUpdate()}
                className="h-12 bg-white w-full text-red-500 hover:bg-red-50 hover:border-red-100 hover:text-red-600 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-red-700"
                layout="outline"
              >
                {"Cancel"}
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
                  <span className="font-serif ml-2 font-light">Processing</span>
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="w-full h-12"
                  onClick={onSubmit}
                >
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

      {getAllList.length > 0 && (
        <TableContainer className="mb-8 rounded-b-lg">
          <Table>
            <TableHeader>
              <tr>
                <TableCell>{"Brand Name"}</TableCell>
                <TableCell>{"Description"}</TableCell>
                <TableCell>{"File "}</TableCell>

                <TableCell>
                  <button
                    disabled={isCheck?.length > 0}
                    // onClick={() => handleModalOpen(id, title, product)}
                    className="p-2 w-full  flex gap-0 items-center justify-end text-base cursor-pointer dark:text-gray-400"
                  >
                    Edit/Delete
                  </button>
                </TableCell>
              </tr>
            </TableHeader>
            <CatalogTable
              lang={lang}
              isCheck={isCheck}
              getAllList={getAllList}
              setIsCheck={setIsCheck}
              handleUpdate={handleUpdate}
              getCatalogDetails={getCatalogDetails}
              //   currency={currency}
            />
          </Table>
          <TableFooter>
            <Pagination
              totalResults={catalogPage?.TotalPages}
              resultsPerPage={limitData}
              onChange={handleChangePage}
              label="Product Page Navigation"
            />
          </TableFooter>
        </TableContainer>
      )}
    </>
  );
};

export default Catalog;

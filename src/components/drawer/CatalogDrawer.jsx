import { Button, Input, Textarea } from "@windmill/react-ui";
import React, { useContext } from "react";

import "react-responsive-modal/styles.css";
import Error from "@/components/form/Error";
import LabelArea from "@/components/form/LabelArea";
import { useTranslation } from "react-i18next";
import Title from "../form/Title";
import { useForm } from "react-hook-form";
import Uploader from "../image-uploader/Uploader";
import { FaRegFilePdf } from "react-icons/fa";

const CatalogDrawer = ({
  id,
  isSubmitting,
  cancelUpdate,
  brandName,
  handleBrandName,
  brandIcon,
  setBrandIcon,
  dec,
  handleDec,
  brandFile,
  setBrandFile,
  UpdateCatalogData,
}) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm();
  return (
    <>
      <div className=" h-full flex flex-col gap-6 dark:bg-gray-800 mb-5">
        <div className="w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
          <Title
            register={register}
            // handleSelectLanguage={handleSelectLanguage}
            title={"Update Catalog"}
            description={" Please provide correct information !"}
          />
        </div>
        <div className="p-3">
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
                pdfName={brandFile && brandFile[0]}
                folder="product"
                imageUrl={brandFile}
                setImageUrl={setBrandFile}
              />
            </div>
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
                    <span className="font-serif ml-2 font-light">
                      Processing
                    </span>
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="w-full h-12"
                    onClick={() => UpdateCatalogData()}
                  >
                    {id ? <span>{t("UpdateBtn")}</span> : <span>Update</span>}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CatalogDrawer;

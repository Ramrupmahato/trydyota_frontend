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
import TaxTable from "@/components/Tax/TaxTable";
import TaxDrawer from "@/components/drawer/TaxDrawer";
import useShippingSubmit from "@/hooks/useShippingSubmit";
import Uploader from "@/components/image-uploader/Uploader";
import ShippingDrawer from "@/components/drawer/ShippingDrawer";
import ShippingTable from "@/components/Shipping/ShippingTable";
import useEnquirySubmit from "@/hooks/useEnquirySubmit";
import EnquiryTable from "@/components/Enquiry/EnquiryTable";
// import Tooltip from "@/components/tooltip/Tooltip";

const Enquiry = ({ id }) => {
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

  const { EnquiryData, handleSearchMethod, enquiryPage, getEnquiryDetails } =
    useEnquirySubmit();
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
    getEnquiryDetails();
  }, []);
  return (
    <>
      <PageTitle>{" Enquiry"}</PageTitle>

      <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
        <div className="col-span-8 sm:col-span-4">
          <Input
            className="border h-12 text-sm focus:outline-none block w-full   dark:bg-gray-700 border-transparent "
            name="shippingMethod"
            type="text"
            defaultValue={""}
            placeholder={"Search..."}
            onBlur={(e) => handleSearchMethod(e.target.value)}
          />
        </div>
      </div>

      {EnquiryData.length > 0 && (
        <TableContainer className="mb-8 rounded-b-lg">
          <Table>
            <TableHeader>
              <tr>
                <TableCell>{"id"}</TableCell>

                <TableCell>{"Product Name"}</TableCell>
                <TableCell>{"Quantity"}</TableCell>
                <TableCell>{"Requested BY"}</TableCell>
                <TableCell>{"Contact Number "}</TableCell>
                <TableCell>{"Message "}</TableCell>
                <TableCell>{"Details "}</TableCell>
                <TableCell>{"Status "}</TableCell>
              </tr>
            </TableHeader>
            <EnquiryTable
              lang={lang}
              isCheck={isCheck}
              EnquiryData={EnquiryData}
              setIsCheck={setIsCheck}
            />
          </Table>
          <TableFooter>
            <Pagination
              totalResults={enquiryPage?.TotalPages}
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

export default Enquiry;

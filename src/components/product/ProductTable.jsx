import {
  TableBody,
  TableCell,
  TableRow,
} from "@windmill/react-ui";

//internal import
import MainDrawer from "@/components/drawer/MainDrawer";
import ProductDrawer from "@/components/drawer/ProductDrawer";
import CheckBox from "@/components/form/CheckBox";
import DeleteModal from "@/components/modal/DeleteModal";
import EditDeleteButton from "@/components/table/EditDeleteButton";
import useToggleDrawer from "@/hooks/useToggleDrawer";
import { showingTranslateValue } from "@/utils/translate";

//internal import

const ProductTable = ({ products, isCheck, setIsCheck, currency, lang }) => {
  const { title, serviceId, handleModalOpen, handleUpdate } = useToggleDrawer();

  const handleClick = (e) => {
    const { id, checked } = e.target;
    // console.log("id", id, checked);

    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  };

  return (
    <>
      {isCheck?.length < 1 && <DeleteModal id={serviceId} title={title} />}

      {isCheck?.length < 2 && (
        <MainDrawer>
          <ProductDrawer currency={currency} id={serviceId} />
        </MainDrawer>
      )}

      <TableBody>
        {products?.map((product, i) => (
          <TableRow key={i + 1}>
            <TableCell>
              <CheckBox
                type="checkbox"
                name={product?.title?.en}
                id={product._id}
                handleClick={handleClick}
                isChecked={isCheck?.includes(product._id)}
              />
            </TableCell>

            <TableCell>
              <div className="flex items-center">
                {/* {product?.image[0] ? (
                  <Avatar
                    className="hidden p-1 mr-2 md:block bg-gray-50 shadow-none"
                    src={product?.image[0]}
                    alt="product"
                  />
                ) : (
                  <Avatar
                    src={`https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png`}
                    alt="product"
                  />
                )} */}
                <div>
                  <h2 className="text-sm font-medium">
                    {showingTranslateValue(product?.title, lang)?.substring(
                      0,
                      28
                    )}
                  </h2>
                </div>
              </div>
            </TableCell>

            <TableCell>
              <span className="text-sm">{product.stock}</span>
            </TableCell>

            <TableCell>
              <EditDeleteButton
                id={product._id}
                product={product}
                isCheck={isCheck}
                handleUpdate={handleUpdate}
                handleModalOpen={handleModalOpen}
                title={showingTranslateValue(product?.title, lang)}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default ProductTable;

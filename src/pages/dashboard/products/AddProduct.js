import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addProduct, updateProduct } from "../../../redux/actions/ActionProducts";
import styles from "./products.module.css";
import { toast } from "react-toastify";
import { useProducts } from "../../../custom-hooks/useProducts";
import { renderInputField } from "../../../components/dashboard/RenderInputField";

export default function AddProduct() {
    const products = useProducts();
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const product = products.find((prod) => prod.id === parseInt(id));

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            title: product?.title || "",
            category: product?.category || "",
            price: product?.price || "",
            count: product?.count || "",
            images: product?.images || [],
            description: product?.description || "",
        },
        validationSchema: Yup.object({
            title: Yup.string()
                .min(3, "Title must be at least 3 characters")
                .required("Title is required"),
            category: Yup.string()
                .min(3, "Category must be at least 3 characters")
                .required("Category is required"),
            price: Yup.number()
                .typeError("Price must be a number")
                .positive("Price must be positive")
                .required("Price is required"),
            count: Yup.number()
                .typeError("Count must be a number")
                .positive("Count must be positive")
                .required("Count is required"),
            description: Yup.string()
                .min(10, "Description must be at least 10 characters")
                .required("Description is required")
        }),
        onSubmit: (values) => handleSubmit(values),
    });

    const handleSubmit = (values) => {
        const file = formik.values.images instanceof File ? formik.values.images : null;
        const imageUrl = file ? URL.createObjectURL(file) : formik.values.images;

        const objProduct = {
            id: id ? parseInt(id) : products?.length + 1,
            ...formik.values,
            images: [imageUrl]
        };

        dispatch(id ? updateProduct(objProduct) : addProduct(objProduct));
        toast.success(`Product ${id ? "updated" : "added"} successfully!`);
        navigate("/products");
    };

    return (
        <main>
            <h2 className={styles.title}>{id ? "Edit" : "Add New"} Product</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className="d-flex items-start justify-between">
                    {renderInputField("Title", "title", "text", "Enter product title", formik)}
                    {renderInputField("Category", "category", "text", "Enter product category", formik)}
                </div>
                <div className="d-flex items-start justify-between">
                    {renderInputField("Price", "price", "number", "Enter product price", formik)}
                    <div className={styles.divInput}>
                        <p>Image</p>
                        <input
                            name="image"
                            type="file"
                            onChange={(event) => {
                                const file = event.target.files[0];
                                formik.setFieldValue("images", file);
                            }}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.images && formik.errors.images && (
                            <span className={styles.error}>{formik.errors.images}</span>
                        )}
                    </div>
                </div>
                <div className="d-flex items-start justify-between">
                    {renderInputField("Count", "count", "number", "Enter count of product", formik)}
                    <div className={styles.divInput}>
                        <p>Description</p>
                        <textarea
                            name="description"
                            placeholder="Enter product description"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.description}
                        />
                        {formik.touched.description && formik.errors.description && (
                            <span className={styles.error}>{formik.errors.description}</span>
                        )}
                    </div>
                </div>
                <button className={styles.saveBtn} type="submit">Save</button>
            </form>
        </main>
    );
}

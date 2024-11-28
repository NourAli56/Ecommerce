import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteProduct, loadProducts } from '../../../redux/actions/ActionProducts'
import Table from '../../../components/dashboard/table/Table'
import styles from './products.module.css'
import { useNavigate } from 'react-router-dom'
import { useProducts } from '../../../custom-hooks/useProducts'

export default function Products() {
    let dispatch = useDispatch()
    let navigate = useNavigate()
    const products = useProducts();
    const [allProducts,setAllProducts]= useState(products)
    useEffect(()=>{
        setAllProducts(products)
    },[products])
    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            dispatch(deleteProduct(id));
        }
    };
    const handleEdit = (id) => {
        navigate(`/edit-product/${id}`)
    };
    const columns = [
        {
            name: <span>ID</span>, sortable: true, width: "5%",
            cell: (row) => (
                <span>{row['id']}</span>
            )
        },
        {
            name: <span>Title</span>, sortable: true, width: "15%",
            cell: (row) => (
                <span>{row['title']}</span>
            )
        },
        {
            name: <span>Image</span>, sortable: true,
            cell: (row) => (
                <img className={styles.imgProduct} src={row?.images[0]} />
            )
        },
        {
            name: <span>Description</span>, sortable: true, width: "30%",
            cell: (row) => (
                <span>{row['description']}</span>
            )
        },
        {
            name: <span>Category</span>, sortable: true,
            cell: (row) => (
                <span>{row['category']}</span>
            )
        },
        {
            name: <span>Price</span>, sortable: true,
            cell: (row) => (
                <span>{row['price']}</span>
            )
        },
        {
            name: <span>Count</span>, sortable: true,
            cell: (row) => (
                <span>{row['count']}</span>
            )
        },
        {
            name: <span>Actions</span>, sortable: true,
            cell: (row) => (
                <div className='d-flex items-center gap-10' >
                    <i onClick={() => handleDelete(row?.id)} className={`${styles.delete} fa fa-trash`} ></i>
                    <i onClick={() => handleEdit(row?.id)} className={`${styles.edit} fa fa-edit`} ></i>
                </div>
            )
        },
    ]
    return (
        <main>
            <Table row={allProducts} col={columns} />
        </main>
    )
}

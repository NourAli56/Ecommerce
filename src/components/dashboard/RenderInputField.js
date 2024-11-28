import styles from '../../pages/dashboard/products/products.module.css' 
export const renderInputField = (label, name, type = "text", placeholder = "",formik) => (
    <div className={styles.divInput}>
        <p>{label}</p>
        <input
            name={name}
            type={type}
            placeholder={placeholder}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values[name]}
        />
        {formik.touched[name] && formik.errors[name] && (
            <span className={styles.error}>{formik.errors[name]}</span>
        )}
    </div>
);
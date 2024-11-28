import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./auth.module.css";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    let navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem("tokenTest");
        if (token) {
            navigate('/dashboard');
        }
    }, []);
    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .min(3, "Username must be at least 3 characters")
                .required("Username is required"),
            email: Yup.string()
                .email("Please enter a valid email")
                .required("Email is required"),
            password: Yup.string()
                .min(6, "Password must be at least 6 characters")
                .required("Password is required"),
        }),
        onSubmit: (values) => {
            console.log("Form Submitted", values);
            alert("Sign Up Successful");
        },
    });
    const Login = () => {
        navigate('/login')
    }
    const goToDashboard = () => {
        localStorage.setItem('tokenTest', "token")
        navigate('/dashboard')
    }

    return (
        <div className={styles.signin}>
            <div className={styles.innerSignIn}>
                <h1>Sign Up</h1>
                <form className={styles.formSignIn} onSubmit={formik.handleSubmit}>
                    {console.log("formik", formik)}


                    <div
                        className={`${styles.divInput} ${formik.touched.username && formik.errors.username
                            ? styles.inputError
                            : styles.marginBottom
                            }`}
                    >
                        <i className="fa fa-user"></i>
                        <input
                            name="username"
                            type="text"
                            placeholder="Your Name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.username}
                        />
                    </div>
                    {formik.touched.username && formik.errors.username && (
                        <div className={styles.errorMsg}>{formik.errors.username}</div>
                    )}
                    <div
                        className={`${styles.divInput} ${formik.touched.email && formik.errors.email
                            ? styles.inputError
                            : styles.marginBottom
                            }`}
                    >
                        <i className="fa fa-envelope"></i>
                        <input
                            name="email"
                            type="email"
                            placeholder="fullname@gmail.com"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                    </div>
                    {formik.touched.email && formik.errors.email && (
                        <div className={styles.errorMsg}>{formik.errors.email}</div>
                    )}

                    <div
                        className={`${styles.divInput} ${formik.touched.password && formik.errors.password
                            ? styles.inputError
                            : styles.marginBottom
                            }`}
                    >
                        <i className="fa fa-lock"></i>
                        <input
                            name="password"
                            type="password"
                            placeholder="**********"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                        />
                    </div>
                    {formik.touched.password && formik.errors.password && (
                        <div className={styles.errorMsg}>{formik.errors.password}</div>
                    )}

                    <button onClick={goToDashboard} type="submit" className={styles.btnLogin}>
                        Sign Up
                    </button>
                </form>

                <div className="d-flex items-center gap-10" style={{ marginBottom: "40px" }}>
                    <span className="text-white">Already have an account?</span>
                    <span onClick={Login} className={styles.createAccount}>Sign In</span>
                </div>
            </div>
        </div>
    );
}

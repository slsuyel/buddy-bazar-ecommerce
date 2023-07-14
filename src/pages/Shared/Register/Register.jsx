import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../provider/AuthProviders';
import { baseUrl } from '../../../baseUrl/baseUrl';

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        setError('')
        createUser(data.email, data.password)
            .then(result => {

                const loggedUser = result.user;
                console.log(loggedUser);

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email, dp: data.photoURL }
                        fetch(`${baseUrl}/users`, {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json',
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    // reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })
                    })
                    .catch(error => console.log('--', error))
            })
            .catch(error => setError(error.message))
    };

    return (
        <div className='row mx-auto container'>
            <h2 className='text-center mb-5'>Registration Page</h2>
            <div className='col-md-6'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2EU5ufwbPcnUI0ZqZ-maegvAi-59dIBiybuo16bdFNPnrUk67yMNIcXg4eHUWr5a-BOk&usqp=CAU" alt="" className='w-100' />
            </div>
            <div className="col-md-6">
                <form className="needs-validation" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            className="form-control fs-2"
                            id="name"
                            {...register('name', { required: true })}
                        />
                        {errors.name && <span className="text-danger">Name is required</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            className="form-control fs-2"
                            id="email"
                            {...register('email', { required: true })}
                        />
                        {errors.email && <span className="text-danger">Email is required</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            className="form-control fs-2"
                            id="password"
                            {...register('password', { required: true, minLength: 6 })}
                        />
                        {errors.password?.type === 'required' && (
                            <span className="text-danger">Password is required</span>
                        )}
                        {errors.password?.type === 'minLength' && (
                            <span className="text-danger">Password must be at least 6 characters long</span>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password:</label>
                        <input
                            type="password"
                            className="form-control fs-2"
                            id="confirmPassword"
                            {...register('confirmPassword', {
                                required: true,
                                validate: (value) =>
                                    value === document.getElementById('password').value,
                            })}
                        />
                        {errors.confirmPassword?.type === 'required' && (
                            <span className="text-danger">Confirm Password is required</span>
                        )}
                        {errors.confirmPassword?.type === 'validate' && (
                            <span className="text-danger">Passwords do not match</span>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="photoUrl">Photo URL:</label>
                        <input
                            type="text"
                            className="form-control fs-2"
                            id="photoURL"
                            {...register('photoURL', { required: true })}
                        />
                        {errors.photoUrl && <span className="text-danger fs-4">Photo URL is required</span>}
                    </div>
                    <div className="form-group fs-2">
                        <p className='text-danger'>{error}</p>
                        <Link to="/login">Already have an account</Link>
                    </div>
                    <button type="submit" className="btn btn-primary my-2 fs-3">Register</button>
                </form>

            </div>

        </div>
    );
};

export default Register;

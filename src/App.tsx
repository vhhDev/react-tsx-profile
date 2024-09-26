import React, { useState, ChangeEvent } from 'react';
import logo from './logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faShieldAlt, faUserCircle, faArrowRight, faCheck, faUser } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
    const [avatar, setAvatar] = useState<string | null>(null);

    const fakeUserData = {
        avatar: null,
        email: 'hh1203@gmail.com',
        uid: '308438329',
        status: {
            isVip: false,
            accountType: 'Main Account',
            isVerified: true, // Thay đổi giá trị này để kiểm tra trường hợp đã xác minh
        },
    };
    const handleAvatarChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setAvatar(e.target?.result as string);
            };
            reader.readAsDataURL(file);
        }
    };
    return (
        <div className='max-w-4xl mx-auto p-4 sm:p-6 bg-gray-100'>
            <div className='flex flex-col sm:flex-row items-center justify-between p-4 bg-gray-50 shadow-md rounded-lg'>
                <div className='flex items-center space-x-4'>
                <label htmlFor="avatar-upload" className="cursor-pointer">
                    <div className='w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center'>

                        {fakeUserData.avatar ? (
                                    <img src={fakeUserData.avatar} alt="User Avatar" className="w-full h-full object-cover" />
                                ) : (
                                    <FontAwesomeIcon icon={faUserCircle} className='text-white text-2xl' />
                        )}
                        <input
                                type="file"
                                id="avatar-upload"
                                className="hidden"
                                accept="image/*"
                                onChange={handleAvatarChange}
                            />
                    </div>
                </label>
                    <div>
                        <h1 className='text-xl font-semibold'>{fakeUserData.email}</h1>
                        <p className='text-gray-500'>UID: {fakeUserData.uid}</p>
                    </div>
                </div>
                <div className='flex flex-wrap items-center space-x-2 mt-4 sm:mt-0'>
                    <div className='px-2 py-1 bg-gray-200 rounded-full text-sm'>{fakeUserData.status.isVip ? 'VIP' : 'Non-VIP'}</div>
                    <div className='px-2 py-1 bg-gray-200 rounded-full text-sm'>{fakeUserData.status.accountType}</div>
                    <div className={`px-2 py-1 rounded-full text-sm ${fakeUserData.status.isVerified ? 'bg-green-100' : 'bg-yellow-100'}`}>
                        {fakeUserData.status.isVerified ? (
                            <>
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    className='text-green-500 mr-2'
                                />
                                Verified
                            </>
                        ) : (
                            'Not Verified'
                        )}
                    </div>
                </div>
                <div className='flex space-x-4 mt-4 sm:mt-0'>
                    <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center'>
                        <FontAwesomeIcon
                            icon={faCog}
                            className='text-xl text-gray-500 cursor-pointer'
                        />
                    </div>
                    <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center'>
                        <FontAwesomeIcon
                            icon={faShieldAlt}
                            className='text-xl text-gray-500 cursor-pointer'
                        />
                    </div>
                    <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center'>
                        <FontAwesomeIcon
                            icon={faUserCircle}
                            className='text-xl text-gray-500 cursor-pointer'
                        />
                    </div>
                </div>
            </div>

            <div className='mt-8 bg-white p-4 sm:p-6 rounded-lg shadow'>
                <h2 className='text-2xl font-semibold text-center sm:text-left'>Profile</h2>
                <p className='text-gray-600 mt-2 text-center sm:text-left'>Complete the following steps to unlock up to $5,020 in New User Rewards.</p>
                <div
                    className={`mt-6 p-4 rounded-lg flex flex-col sm:flex-row justify-between items-center ${
                        fakeUserData.status.isVerified ? 'bg-green-100' : 'bg-yellow-100'
                    }`}
                >
                    <div className='text-center sm:text-left'>
                        {fakeUserData.status.isVerified ? (
                            <>
                                <h3 className='text-xl font-semibold text-green-600'>You are Verified!</h3>
                                <ul className='mt-4 space-y-2'>
                                    <li className='flex items-center justify-center sm:justify-start'>
                                        <FontAwesomeIcon
                                            icon={faCheck}
                                            className='text-green-500 mr-2'
                                        />
                                        <span>Congratulations! You can now fully access all features.</span>
                                    </li>
                                </ul>
                            </>
                        ) : (
                            <>
                                <h3 className='text-xl font-semibold'>Complete Identity Verification to start earning</h3>
                                <ul className='mt-4 space-y-2'>
                                    <li className='flex items-center justify-center sm:justify-start'>
                                        <FontAwesomeIcon
                                            icon={faCheck}
                                            className='text-green-500 mr-2'
                                        />
                                        <span>Verification to start take money to wallet</span>
                                    </li>
                                </ul>
                            </>
                        )}
                    </div>

                    {!fakeUserData.status.isVerified && (
                        <button className='mt-4 sm:mt-0 bg-yellow-400 text-white px-4 py-2 rounded-lg font-semibold'>
                            Get Verified Now{' '}
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                className='ml-2'
                            />
                        </button>
                    )}
                </div>
                <p className='mt-4 text-gray-600 text-center sm:text-left'>
                    Need more help? Click to view our{' '}
                    <a
                        href='#'
                        className='text-yellow-500'
                    >
                        FAQs
                    </a>
                </p>
            </div>
        </div>
    );
}

export default App;

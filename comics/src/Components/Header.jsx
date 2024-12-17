import React, { useState } from 'react';
import '../Styles/header.scss';

const Header = () => {
    // State để lưu trạng thái hiển thị dropdown
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedValue, setSelectedValue] = useState('Danh sách'); // Giá trị đã chọn mặc định

    // Xử lý khi nhấn vào mục để hiển thị dropdown
    const handleToggleDropdown = () => {
        setShowDropdown(!showDropdown); // Đảo trạng thái giữa hiển thị và ẩn
    };

    // Xử lý khi chọn giá trị
    const handleSelect = (value) => {
        setSelectedValue(value); 
        setShowDropdown(false); 
    };

    return (
        <div className='header'>
            <nav className='header_menu'>
                <ul className='header-nav'>
                    <li className='header-logo'>
                        <h2>
                            <a href="/">
                                <i className="fa-solid fa-book-open"></i> Comics
                            </a>
                        </h2>
                    </li>
                    
                    <li className='header_dropdown'>
                        <span 
                            className='dropdown_label' 
                            onClick={handleToggleDropdown}
                        >
                            {selectedValue}
                        </span>
                        {showDropdown && (
                            <ul className='dropdown_menu'>
                                <li onClick={() => handleSelect('Truyện mới')}>Truyện mới</li>
                                <li onClick={() => handleSelect('Truyện hot')}>Truyện hot</li>
                            </ul>
                        )}
                    </li>
                </ul>
            </nav>
            {/* Hiển thị thông điệp */}
            <p>{selectedValue === 'Danh sách' ? 'Đọc truyện vui vẻ' : `Bạn đã chọn: ${selectedValue}`}</p>
        </div>
    );
};

export default Header;

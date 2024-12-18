import React, { useState, useEffect } from 'react';
import '../Styles/header.scss';

const Header = () => {
    const [showDropdownDanhSach, setShowDropdownDanhSach] = useState(false);
    const [showDropdownTheLoai, setShowDropdownTheLoai] = useState(false);
    const [selectedValue, setSelectedValue] = useState('Danh sách');
    const [isOn, setIsOn] = useState(false);

    useEffect(() => {
        const savedMode = localStorage.getItem('darkMode');
        if (savedMode === 'Dark') {
            setIsOn(true);
            document.body.classList.add("dark-mode");
        }

        const handleOutsideClick = (event) => {
            if (
                !event.target.closest('.header_row1_menu_dropdown_label') &&
                !event.target.closest('.header_row1_menu_dropdown_menu')
            ) {
                setShowDropdownDanhSach(false);
                setShowDropdownTheLoai(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    const handleToggle = () => {
        setIsOn(!isOn);
        if (!isOn) {
            document.body.classList.add("dark-mode");
            localStorage.setItem('darkMode', 'Dark');

        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem('darkMode', 'Light');

        }
    };

    const handleToggleDropdownDanhSach = () => {
        setShowDropdownDanhSach(!showDropdownDanhSach);
        if (showDropdownTheLoai) setShowDropdownTheLoai(false);
    };

    const handleToggleDropdownTheLoai = () => {
        setShowDropdownTheLoai(!showDropdownTheLoai);
        if (showDropdownDanhSach) setShowDropdownDanhSach(false);
    };

    const handleSelect = (value) => {
        setSelectedValue(value);
        setShowDropdownDanhSach(false);
        setShowDropdownTheLoai(false);
    };

    return (
        <div>
            <div className='header'>
                <nav className='header_row1'>
                    <ul className='header_row1_menu'>
                        <li className='header_row1_menu_logo'>
                            <h2>
                                <a href="/">
                                    <i className="fa-solid fa-book-open"></i> Comics
                                </a>
                            </h2>
                        </li>

                        {/* Dropdown "Danh sách" */}
                        <li className='header_row1_menu_dropdown'>
                            <div
                                className='header_row1_menu_dropdown_label'
                                onClick={handleToggleDropdownDanhSach}
                            >
                                <i className="fa-solid fa-list"></i>
                                Danh sách
                                <i className="fa-solid fa-caret-down"></i>
                            </div>
                            {showDropdownDanhSach && (
                                <ul className='header_row1_menu_dropdown_menu show'>
                                    <li
                                        className='header_row1_menu_dropdown_menu_item'
                                        onClick={() => handleSelect('Truyện mới')}
                                    >
                                        Truyện mới
                                    </li>
                                    <li
                                        className='header_row1_menu_dropdown_menu_item'
                                        onClick={() => handleSelect('Truyện hot')}
                                    >
                                        Truyện hot
                                    </li>
                                </ul>
                            )}
                        </li>

                        <li className='header_row1_menu_dropdown'>
                            <div
                                className='header_row1_menu_dropdown_label'
                                onClick={handleToggleDropdownTheLoai}
                            >
                                <i className="fa-solid fa-list"></i>
                                Thể loại
                                <i className="fa-solid fa-caret-down"></i>
                            </div>
                            {showDropdownTheLoai && (
                                <ul className='header_row1_menu_dropdown_menu show'>
                                    <li
                                        className='header_row1_menu_dropdown_menu_item'
                                        onClick={() => handleSelect('Hành động')}
                                    >
                                        Hành động
                                    </li>
                                    <li
                                        className='header_row1_menu_dropdown_menu_item'
                                        onClick={() => handleSelect('Kỳ ảo')}
                                    >
                                        Kỳ ảo
                                    </li>
                                    <li
                                        className='header_row1_menu_dropdown_menu_item'
                                        onClick={() => handleSelect('Tình cảm')}
                                    >
                                        Tình cảm
                                    </li>
                                    <li
                                        className='header_row1_menu_dropdown_menu_item'
                                        onClick={() => handleSelect('Phiêu lưu')}
                                    >
                                        Phiêu lưu
                                    </li>
                                    <li
                                        className='header_row1_menu_dropdown_menu_item'
                                        onClick={() => handleSelect('Kinh dị')}
                                    >
                                        Kinh dị
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li className="toggle">
                            <div
                                className={`toggle_btn ${isOn ? "Dark" : "Light"}`}
                                onClick={handleToggle}
                            >
                                <div className="toggle_btn_thumb"></div>
                            </div>
                            <p>{isOn ? "Dark" : "Light"}</p>
                        </li>
                        <li>
                            <div className='header_row1_menu_search'>
                                <input type="text" id="search-input" className="header_row1_menu_search_input" placeholder="Tìm kiếm..." />
                                <button className="header_row1_menu_search_btn">
                                    <i className="fa fa-search"></i>
                                </button>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='header_tb'>
                <p>
                    {selectedValue === 'Danh sách' ? 'Đọc truyện vui vẻ' : `${selectedValue}`}
                </p>
            </div>
        </div>
    );
};

export default Header;

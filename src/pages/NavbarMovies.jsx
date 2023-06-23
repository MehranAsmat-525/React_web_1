const NavbarMovies = ({ filteredCategoryList, filterItem }) => {
    console.log(filteredCategoryList)
    return (
        <>
            <nav className="menu_category">
                <ul>
                    {filteredCategoryList.map((CV) => {
                        return (
                            <li key={CV}>
                                <button className="api_btn" onClick={() => filterItem(CV)}>
                                    {CV}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
};

export default NavbarMovies;

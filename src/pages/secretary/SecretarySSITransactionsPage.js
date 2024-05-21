import React, {useState} from "react";
import classes from "./SecretaryHomePage.module.css";
import { useNavigate } from 'react-router-dom';
import MenuSelectedTabButton from '../../components/MenuSelectedTabButton';
import MenuUnselectedTabButton from '../../components/MenuUnselectedTabButton';
import { useSearchParams } from "react-router-dom";

const SecretarySSITransactionsPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [[keyId, id], [keyToken, token]] = searchParams;

    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        console.log('Searching for:', searchQuery);   /* search logic will be implemented*/

    };

    const navigateTo = (path) => {
        navigate({pathname: path, search: `?id=${id}&token=${token}`});
    };

    return (
        <>
            <div className={classes.sideBar}>
                <MenuUnselectedTabButton click={() => navigateTo('/secretary/home')} condition={false}/>
                <MenuSelectedTabButton/>
            </div>
            <div className={classes.container}>
                <div className={classes.headerContainer}>
                    <div className={classes.headerLeftContainer}>
                        <h2 className={classes.greeting}>SSI Transactions</h2>
                        <form onSubmit={handleSearchSubmit}>
                            <input
                                type="text"
                                className={classes.searchInput}
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={handleSearchChange}
                            />
                        </form>
                    </div>
                    <div className={classes.profileContainer}>
                        <button className={classes.profileButton}></button>
                        <span className={classes.profileName}>Name, S.</span>
                    </div>
                </div>
                <p className={classes.welcomeMessage}>See all students with SGK requirement.</p>
                <div className={classes.boxesContainer}>
                    <div className={classes.studentBox}>
                            <h3 className={classes.studentName}>Student-1</h3>
                    </div>
                    <div className={classes.studentBox}>
                            <h3 className={classes.studentName}>Student-2</h3>
                    </div>
                    <div className={classes.studentBox}>
                            <h3 className={classes.studentName}>Student-3</h3>
                    </div>

                </div>
            </div>
        </>
    );
};

export default SecretarySSITransactionsPage;
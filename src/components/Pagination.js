import React from 'react';
import classes from './Pagination.module.css';

const Pagination = ({ currentPage, notificationsPerPage, totalNotifications, paginate }) => {
    const pageCount = Math.ceil(totalNotifications / notificationsPerPage);
    const dots = Array.from({ length: pageCount }, (_, index) => index + 1);

    return (
        <div className={classes.pagination}>
            {dots.map(number => (
                <span
                    key={number}
                    className={`${classes.pageDot} ${currentPage === number ? classes.active : ''}`}
                    onClick={() => paginate(number)}
                />
            ))}
        </div>
    );
};

export default Pagination;

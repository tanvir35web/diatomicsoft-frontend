import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useFetchData = (actionCreator, selector) => {
    const dispatch = useDispatch();
    const { data, status, error } = useSelector(selector);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(actionCreator());
        }
    }, [status, dispatch, actionCreator]);

    return { data, status, error };
};

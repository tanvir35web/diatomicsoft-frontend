import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchData } from '@/store/slices/projectSlices';

const useFetchProjects = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.project);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchData());
    }
  }, [status, dispatch]);

  const projects = data?.data;  

  return { projects, status, error };
};

export default useFetchProjects;

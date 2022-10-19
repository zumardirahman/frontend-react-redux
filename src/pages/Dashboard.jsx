import React, { useEffect } from "react";
import Layout from "./Layout";
import Welcome from "../components/Welcome"; //render komponen welcome to dashboard

//prteksi dashboard
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetMe } from "../features/authSlice";


const Dashboard = () => {

  //proteksi page
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //ambil error dari state
  const { isError } = useSelector((state) => state.auth);

  //dsipatch funsi getme saat komponen mounted ke dom
  useEffect(() => {
    dispatch(GetMe());
  }, [dispatch]);

  //2 useeffect agar didispat dulu baru validasi
  useEffect(() => {
    if(isError){
      navigate("/")
    }
  }, [isError, navigate]);
//proteksi page


  return (
    <Layout>
      <Welcome />
    </Layout>
  );
};

export default Dashboard;

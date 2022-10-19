import React, { useEffect } from "react";
import Layout from '../Layout'
import ProductList from '../../components/products/ProductList'

//prteksi dashboard
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetMe } from "../../features/authSlice";

const RenderProductList = () => {

  //proteksi page
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //ambil error dari state
  const { isError, user } = useSelector((state) => state.auth); //user dari global state

  //dsipatch funsi getme saat komponen mounted ke dom
  useEffect(() => {
    dispatch(GetMe());
  }, [dispatch]);

  //2 useeffect agar didispat dulu baru validasi
  useEffect(() => {
    if(isError){
      navigate("/")
    }
    if((user && user.role) !== "admin"){
      navigate("/dashboard")
    }

  }, [isError, user, navigate]);
//proteksi page



  return (
   <Layout>
    <ProductList/>
   </Layout>
  )
}

export default RenderProductList
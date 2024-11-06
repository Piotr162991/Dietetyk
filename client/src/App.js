import logo from './logo.svg';
import './App.css';
import api from './api/axiosConfig'
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Layout from './components/Layout';
import UsersCarousel from './components/slickslides/UsersCarousel'
import DietsCarousel from './components/dietSlider/DietsCarousel'
import UserDiet from './components/userDiet/UserDiet';


function App() {

  const [users, setUsers]=useState();
  const [diets, setDiets]=useState();
  const [diet, setDiet]=useState();



    const getUsers= async()=>{
      try{

        const response = await api.get("/api/v1/users");
        console.log(response.data);
        setUsers(response.data);

      }
      catch(err){
        console.log(err);
      }

    }
useEffect(()=>{
getUsers();


},[])



const getDiets= async()=>{
  try{

    const response = await api.get("/api/v1/diet");
    console.log(response.data);
    setDiets(response.data);

  }
  catch(err){
    console.log(err);
  }

}
useEffect(()=>{
getDiets();},[])

const getUserData = async (usermane) =>{

  try{
    const response = await api.get('/api/v1/users/${username}');
    console.log(response.data);
    const singleUser =response.data;
    setUsers(singleUser);
    setDiets(singleUser.diets);

  }catch(err){
    console.log(err);
    
  }

}

  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home users={users} />}></Route>
          <Route path='/Diets/:username' element={<UserDiet getUserData = {getUserData} diets ={diets} setDiets= {setDiets}/>}></Route>
        </Route>
      </Routes>
      <UsersCarousel users = {users}/>
      <DietsCarousel diets = {diets}/>
    </div>
    
  );
}

export default App;

import {useEffect, useRef} from 'react';
import api from '../../api/axiosConfig';
import {useParams} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import AddDiet from '../addDiet/AddDiet';

import React from 'react'

const UserDiet = ({getUserData,user,diets,setDiet}) => {

    const dietText = useRef();
    let params = useParams();
    const username = params.username;

    useEffect(()=>{
        getUserData(username);
    },[])

    const addDiet = async (e) =>{
        e.preventDefault();

        const diet = dietText.current;

        try
        {
            const response = await api.post("/api/v1/diet",{dietBody:diet.value,username:dietaIds});

            const updatedDiets = [...diets, {body:diet.value}];
    
            diet.value = "";
    
            setDiet(updatedDiets);
        }
        catch(err)
        {
            console.error(err);
        }
        



    }

  return (
    <Container>
        <Row>
            <Col><h3>Diets</h3></Col>
        </Row>
        <Row className="mt-2">
            <Col>
                <img src={user?.poster} alt="" />
            </Col>
            <Col>
                {
                    <>
                        <Row>
                            <Col>
                                <DietForm handleSubmit={addDiet} dietText={dietText} labelText = "Write a diet" />  
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <hr />
                            </Col>
                        </Row>
                    </>
                }
                {
                    diets?.map((r) => {
                        return(
                            <>
                                <Row>
                                    <Col>{r.body}</Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <hr />
                                    </Col>
                                </Row>                                
                            </>
                        )
                    })
                }
            </Col>
        </Row>
        <Row>
            <Col>
                <hr />
            </Col>
        </Row>        
    </Container>
  )
}

export default UserDiet
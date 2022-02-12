import React, { useState } from 'react';
import { Tabs, Tab, Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../../styles/pages/catalogue.css';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';

const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
}));

export default function Catalogue() {
    const [picture, setPicture] = useState(null);
    const [imgData, setImgData] = useState(null);
    const [tab, setTab] = useState("home");
    const [type, setType] = useState('T-Shirts');
    const [productName, setProductName] = useState('');
    const [chipData, setChipData] = React.useState([{}]);

    const onChangePicture = e => {
        if (e.target.files[0]) {
          console.log("picture: ", e.target.files);
          setPicture(e.target.files[0]);
          const reader = new FileReader();
          reader.addEventListener("load", () => {
            setImgData(reader.result);
          });
          reader.readAsDataURL(e.target.files[0]);
          setTab("profile");
        }
    };

    const updateProductName = e => {
        console.log(e.target.value);
        setProductName(e.target.value);
    }

    const handleType = (event, newType) => {
        setType(newType);
    };

    const handleDelete = (chipToDelete) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };

    return (
        <Container>
            <div className='page-content'>
                <Row lg={2}>                    
                    <Col>
                        <div className='image-section'>
                            <Tabs defaultActiveKey="home" activeKey={tab} onSelect={(key) => setTab(key)} className="mb-3">
                                <Tab eventKey="home" title="Image Gallery">
                                    <input id="profilePic" type="file" onChange={onChangePicture} />                                    
                                </Tab>
                                <Tab eventKey="profile" title="Preview">
                                    <div className="previewProfilePic">
                                        { (imgData == null) ? <p>Nothing to preview! Start adding product details on the right.</p> :
                                            <div>
                                                <img className="playerProfilePic_home_tile" src={imgData} alt="imagePreview" />
                                                <p>{productName}</p>
                                            </div>
                                        }
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>
                    </Col>                    
                    <Col>
                    <div className='form-section'></div>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Product Name</Form.Label>
                                <Form.Control type="text" placeholder="Name your listing, keep it short and sweet!" onChange={updateProductName} />
                            </Form.Group>
                            <Row lg={2}>
                                <Col>                                    
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <div className='category-section'>
                                            <Form.Label>Category</Form.Label>
                                            <ToggleButtonGroup
                                                value={type}
                                                exclusive
                                                onChange={handleType}
                                            >
                                                <ToggleButton value="Collectables">
                                                    Collectables
                                                </ToggleButton>
                                                <ToggleButton value="Accessories">
                                                    Accessories
                                                </ToggleButton>
                                                <ToggleButton value="T-Shirts">
                                                    T-Shirts
                                                </ToggleButton>
                                            </ToggleButtonGroup>
                                        </div>
                                    </Form.Group>                                    
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <div className='category-section'>
                                            <Form.Label>Thumbnail Image</Form.Label>
                                            <input id="profilePic" type="file" onChange={onChangePicture} />
                                        </div>
                                    </Form.Group>
                                </Col>                          
                            </Row>
                            <Form.Group className="mb-3">
                                <Form.Label>Brand (up tp 2)</Form.Label>
                                <Form.Control type="text" placeholder="Add Keyword and press enter" />
                                <Paper
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        flexWrap: 'wrap',
                                        listStyle: 'none',
                                        p: 0.5,
                                        m: 0,
                                    }}
                                    component="ul"
                                    >
                                    {(Object.keys(chipData[0]).length === 0) ? <></> : 
                                        <div>
                                            {chipData.map((data) => {
                                                return (
                                                    <ListItem key={data.key}>
                                                        <Chip
                                                            label={data.label}
                                                            onDelete={handleDelete(data)}
                                                        />
                                                    </ListItem>
                                                );
                                            })} 
                                        </div>
                                    }
                                </Paper>
                                <Form.Text className="text-muted">
                                    Eg. Popmart, Kaws
                                </Form.Text>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

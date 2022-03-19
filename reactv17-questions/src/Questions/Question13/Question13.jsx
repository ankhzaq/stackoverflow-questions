/*
* Question: how to style an accordion into 50% height and give a scrollbar if the content is too long (reactjs)
* Url: https://stackoverflow.com/questions/71527283/how-to-style-an-accordion-into-50-height-and-give-a-scrollbar-if-the-content-is
* */

import React, { useEffect, useState } from 'react';
import { Accordion, ListGroup } from 'react-bootstrap';

import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const DivStyled = styled.div`
  .container-scroll {
    max-height: ${props => `${props.height}px`};
    overflow: scroll;
  }
`;

let timeOutHeight = null;

function Question13() {

  const getHeight = () => window.innerHeight * 0.5;

  const [height, setHeight] = useState(getHeight());

  const updateHeight = () => {
    clearTimeout(timeOutHeight);
    timeOutHeight = setTimeout(() => {
      setHeight(getHeight());
    }, 250)
  }

  useEffect(() => {
    window.addEventListener('resize', updateHeight);
  }, []);

  return (
    <DivStyled className='has-text-centered mb-3' height={height}>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header><strong>PILIH RUTE</strong></Accordion.Header>
          <Accordion.Body style={{ maxHeight: '50px' }}>
            <ListGroup className='container-scroll has-text-left'>
              <ListGroup.Item>
                <strong className='is-size-5 mr-2'>Rute A</strong>
                <em><small>Probolinggo, Surabaya</small></em>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong className='is-size-5 mr-2'>Rute B</strong>
                <em><small>Surabaya Utara, Surabaya Timur</small></em>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong className='is-size-5 mr-2'>Rute C</strong>
                <em><small>Surabaya Selatan, Sidoarjo, Bangkalan</small></em>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong className='is-size-5 mr-2'>Rute D</strong>
                <em><small>Madura, Surabaya Utara, Surabaya Barat</small></em>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong className='is-size-5 mr-2'>Rute D</strong>
                <em><small>Madura, Surabaya Utara, Surabaya Barat</small></em>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong className='is-size-5 mr-2'>Rute D</strong>
                <em><small>Madura, Surabaya Utara, Surabaya Barat</small></em>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong className='is-size-5 mr-2'>Rute D</strong>
                <em><small>Madura, Surabaya Utara, Surabaya Barat</small></em>
              </ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </DivStyled>
  );
}

export default Question13;

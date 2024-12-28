import React, { useContext, useEffect, useState } from 'react'
import classNames from 'classnames'

import {
  CHeader,
  CImage,
  CAvatar,
  CButtonGroup,
  CProgress,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardGroup,
  CCardHeader,
  CCardImage,
  CCardLink,
  CCardSubtitle,
  CCardText,
  CCardTitle,
  CListGroup,
  CListGroupItem,
  CNav,
  CNavItem,
  CNavLink,
  CCol,
  CRow,
  COffcanvas,
  COffcanvasHeader,
  COffcanvasTitle,
  CCloseButton,
  COffcanvasBody,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CContainer
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import ReactImg from 'src/assets/images/react.jpg'
import { DocsComponents, DocsExample } from 'src/components'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'
import MainChart from './MainChart'

import Carousels from '../base/carousels/Carousels'
import SensorContext from '../../contexts'

const Dashboard = () => {
  const {sensorData} = useContext(SensorContext);

  const progressExample = []

  const [visible, setVisible] = useState(false)
  const [roastLevel, setRoastLevel] = useState("Light")
  const [beanType, setBeanType] = useState("Arabica")

  useEffect(() => {
    // console.log(sensorData);
  },[sensorData]);

  return (
    <>
      {/* <CCol
        className={'d-none d-xl-block'}
      >
        <div className="text-body-secondary">{"Roast Level Detection"}</div>
        <div className="fw-semibold text-truncate">
          Light (87%)
        </div>
        <CProgress thin className="mt-2" color={"red"} value={87} />
      </CCol> */}
      <h1>{"Electronic Nose"}</h1>
      <WidgetsDropdown className="mb-4" />
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Gas Sensor
              </h4>
              {/* <div className="small text-body-secondary">January - July 2023</div> */}
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              {/* <CButton color="primary" className="float-end">
                <CIcon icon={cilCloudDownload} />
              </CButton> */}
              <CButtonGroup className="float-end me-3">
                {['15 Min', '5 Min', '1 Min'].map((value) => (
                  <CButton
                    color="outline-secondary"
                    key={value}
                    className="mx-0"
                    active={value === 'Month'}
                  >
                    {value}
                  </CButton>
                ))}
              </CButtonGroup>
            </CCol>
          </CRow>
          <MainChart />
        </CCardBody>
        <CCardFooter>
          <CRow
            xs={{ cols: 1, gutter: 4 }}
            sm={{ cols: 2 }}
            lg={{ cols: 4 }}
            xl={{ cols: 5 }}
            className="mb-2 text-center"
          >
            {progressExample.map((item, index, items) => (
              <CCol
                className={classNames({
                  'd-none d-xl-block': index + 1 === items.length,
                })}
                key={index}
              >
                <div className="text-body-secondary">{item.title}</div>
                <div className="fw-semibold text-truncate">
                  {item.value} ({item.percent}%)
                </div>
                <CProgress thin className="mt-2" color={item.color} value={item.percent} />
              </CCol>
            ))}
          </CRow>
        </CCardFooter>
      </CCard>
      {/* <WidgetsBrand className="mb-4" withCharts /> */}

      <h1>{"Electronic Eye"}</h1>
      <CCard className="mb-4">
        <CCardBody>
        <h4>{"Vision Sensor"}</h4>
          <CRow>
            <CCol xs>
              <CImage fluid rounded src={new URL("http://127.0.0.1:5000/video_feed")} width={500} height={500}/>
            </CCol>
            <CCol xs>
              <CTable>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Parameter</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Value</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Camera Type</CTableDataCell>
                    <CTableDataCell>Webcam</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">2</CTableHeaderCell>
                    <CTableDataCell>FPS</CTableDataCell>
                    <CTableDataCell>28</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">3</CTableHeaderCell>
                    <CTableDataCell>Resolution</CTableDataCell>
                    <CTableDataCell>1280x720</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
      
      <br/>
      
      <h1>{"Electronic Ear"}</h1>
      <CCard className="mb-4">
        <CCardBody>
        <h4>{"Audio Sensor"}</h4>
          <CRow>
            <CCol xs>
              <CImage fluid rounded src={new URL("http://127.0.0.1:5000/audio_feed")} width={500} height={500}/>
            </CCol>
            <CCol xs>
              <CTable>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Parameter</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Value</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Microphone Type</CTableDataCell>
                    <CTableDataCell>Dynamic</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">2</CTableHeaderCell>
                    <CTableDataCell>Channel</CTableDataCell>
                    <CTableDataCell>1</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">3</CTableHeaderCell>
                    <CTableDataCell>Sampling Rate</CTableDataCell>
                    <CTableDataCell>48kHz</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </CCol>
          </CRow>          
        </CCardBody>
      </CCard>
      
      <COffcanvas placement="end" visible={visible} onHide={() => setVisible(false)}>
        <COffcanvasHeader>
          <COffcanvasTitle>Side Panel</COffcanvasTitle>
          <CCloseButton className="text-reset" onClick={() => setVisible(false)} />
        </COffcanvasHeader>
        <COffcanvasBody>          
          <CCard>
            <CCardBody>
              <h4>Info</h4>
              <div>Roasting is on progress!</div>
            </CCardBody>
          </CCard>
          
          <CCard className='mt-2'>
            <CCardBody>
              <h4>System</h4>              
              <CCard>
                <CCardBody>
                <CRow>
                  <CCol>
                    <CContainer><h5 className='align-middle'>Bean Type</h5></CContainer>
                  </CCol>
                  <CCol>
                    <CDropdown>
                      <CDropdownToggle color="secondary">{beanType}</CDropdownToggle>
                      <CDropdownMenu>
                        <CDropdownItem onClick={()=>{setBeanType("Arabica")}}>Arabica</CDropdownItem>
                        <CDropdownItem onClick={()=>{setBeanType("Robusta")}}>Robusta</CDropdownItem>
                      </CDropdownMenu>
                    </CDropdown>
                  </CCol>
                </CRow>
                <br/>
                <CRow>
                  <CCol>
                    <CContainer><h5 className='align-middle'>Roast Level</h5></CContainer>
                  </CCol>
                  <CCol>
                    <CDropdown>
                      <CDropdownToggle color="secondary">{roastLevel}</CDropdownToggle>
                      <CDropdownMenu>
                        <CDropdownItem onClick={()=>{setRoastLevel("Light")}}>Light</CDropdownItem>
                        <CDropdownItem onClick={()=>{setRoastLevel("Medium")}}>Medium</CDropdownItem>
                        <CDropdownItem onClick={()=>{setRoastLevel("Dark")}}>Dark</CDropdownItem>
                      </CDropdownMenu>
                    </CDropdown>
                  </CCol>
                </CRow>    
                </CCardBody>
              </CCard>
              <br/>
              <h4>Control</h4>        
              <CCard>
                <CCardBody>
                
                <CRow className='align-items-center'>
                <CCol>
                  <CButton className='m-2' color="success" onClick={() => {}}>START</CButton>
                  <CButton className='m-2' color="danger" onClick={() => {}}>STOP</CButton>
                  <CButton color="warning" onClick={() => {}}>PAUSE</CButton>
                </CCol>
              </CRow> 
                </CCardBody>
              </CCard>
              
            </CCardBody>
          </CCard>
        </COffcanvasBody>
      </COffcanvas>
      <CButton color="primary" className='rounded-start-4 rounded-end-0' onClick={()=>{setVisible(true)}} style={{position: "fixed", top: 300, right: 0}}>Side<br/>Panel</CButton>
    </>
  )
}

export default Dashboard

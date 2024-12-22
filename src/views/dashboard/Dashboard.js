import React, { useState } from 'react'
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

const Dashboard = () => {
  const progressExample = [
    // { title: 'Roast Level Detection', value: 'Light', percent: 40, color: 'success' },
    // { title: 'MQ136', value: '5032', percent: 20, color: 'info' },
    // { title: 'MQ137', value: '20041', percent: 60, color: 'warning' },
    // { title: 'MQ138', value: '12441', percent: 80, color: 'danger' },
    // { title: 'MQ2', value: '10002', percent: 80, color: 'danger' },
    // { title: 'MQ3', value: '40981', percent: 80, color: 'danger' },
    // { title: 'TGS822', value: '40981', percent: 80, color: 'danger' },
    // { title: 'TGS2620', value: '40981', percent: 80, color: 'danger' },
  ]

  const progressGroupExample1 = [
    { title: 'Monday', value1: 34, value2: 78 },
    { title: 'Tuesday', value1: 56, value2: 94 },
    { title: 'Wednesday', value1: 12, value2: 67 },
    { title: 'Thursday', value1: 43, value2: 91 },
    { title: 'Friday', value1: 22, value2: 73 },
    { title: 'Saturday', value1: 53, value2: 82 },
    { title: 'Sunday', value1: 9, value2: 69 },
  ]

  const progressGroupExample2 = [
    { title: 'Male', icon: cilUser, value: 53 },
    { title: 'Female', icon: cilUserFemale, value: 43 },
  ]

  const progressGroupExample3 = [
    { title: 'Organic Search', icon: cibGoogle, percent: 56, value: '191,235' },
    { title: 'Facebook', icon: cibFacebook, percent: 15, value: '51,223' },
    { title: 'Twitter', icon: cibTwitter, percent: 11, value: '37,564' },
    { title: 'LinkedIn', icon: cibLinkedin, percent: 8, value: '27,319' },
  ]

  const tableExample = [
    {
      avatar: { src: avatar1, status: 'success' },
      user: {
        name: 'Yiorgos Avraamu',
        new: true,
        registered: 'Jan 1, 2023',
      },
      country: { name: 'USA', flag: cifUs },
      usage: {
        value: 50,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'success',
      },
      payment: { name: 'Mastercard', icon: cibCcMastercard },
      activity: '10 sec ago',
    },
    {
      avatar: { src: avatar2, status: 'danger' },
      user: {
        name: 'Avram Tarasios',
        new: false,
        registered: 'Jan 1, 2023',
      },
      country: { name: 'Brazil', flag: cifBr },
      usage: {
        value: 22,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'info',
      },
      payment: { name: 'Visa', icon: cibCcVisa },
      activity: '5 minutes ago',
    },
    {
      avatar: { src: avatar3, status: 'warning' },
      user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2023' },
      country: { name: 'India', flag: cifIn },
      usage: {
        value: 74,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'warning',
      },
      payment: { name: 'Stripe', icon: cibCcStripe },
      activity: '1 hour ago',
    },
    {
      avatar: { src: avatar4, status: 'secondary' },
      user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2023' },
      country: { name: 'France', flag: cifFr },
      usage: {
        value: 98,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'danger',
      },
      payment: { name: 'PayPal', icon: cibCcPaypal },
      activity: 'Last month',
    },
    {
      avatar: { src: avatar5, status: 'success' },
      user: {
        name: 'Agapetus Tadeáš',
        new: true,
        registered: 'Jan 1, 2023',
      },
      country: { name: 'Spain', flag: cifEs },
      usage: {
        value: 22,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'primary',
      },
      payment: { name: 'Google Wallet', icon: cibCcApplePay },
      activity: 'Last week',
    },
    {
      avatar: { src: avatar6, status: 'danger' },
      user: {
        name: 'Friderik Dávid',
        new: true,
        registered: 'Jan 1, 2023',
      },
      country: { name: 'Poland', flag: cifPl },
      usage: {
        value: 43,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'success',
      },
      payment: { name: 'Amex', icon: cibCcAmex },
      activity: 'Last week',
    },
  ]

  const [visible, setVisible] = useState(false)
  const [roastLevel, setRoastLevel] = useState("Light")
  const [beanType, setBeanType] = useState("Arabica")

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
              <CButton color="primary" className="float-end">
                <CIcon icon={cilCloudDownload} />
              </CButton>
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
              <CImage fluid rounded src="src/assets/images/kopi_capture.jpg" width={500} height={500}/>
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
              <CImage fluid rounded src="src/assets/images/spectro.jpg" width={500} height={500}/>
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

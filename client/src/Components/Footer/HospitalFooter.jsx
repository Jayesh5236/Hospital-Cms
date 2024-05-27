import React from 'react';
import { Layout, Row, Col, Typography, Space } from 'antd';
import { FacebookOutlined, TwitterOutlined, LinkedinOutlined } from '@ant-design/icons';

const { Footer } = Layout;
const { Title, Text } = Typography;

const HospitalFooter = () => {
  return (
    <Footer style={{ backgroundColor: '#001529', color: '#fff', padding: '40px 50px' }}>
      <Row gutter={[16, 16]}>
        {/* Contact Information */}
        <Col xs={24} sm={12} md={8} lg={6}>
          <Title level={4} style={{ color: '#fff' }}>Contact Us</Title>
          <Space direction="vertical">
            <Text style={{ color: '#fff' }}>123 Health St.</Text>
            <Text style={{ color: '#fff' }}>Healthy City, HC 12345</Text>
            <Text style={{ color: '#fff' }}>Phone: (123) 456-7890</Text>
            <Text style={{ color: '#fff' }}>Email: info@hospital.com</Text>
          </Space>
        </Col>

        {/* Quick Links */}
        <Col xs={24} sm={12} md={8} lg={6}>
          <Title level={4} style={{ color: '#fff' }}>Quick Links</Title>
          <Space direction="vertical">
            <Text style={{ color: '#fff' }}><a href="#about" style={{ color: '#fff' }}>About Us</a></Text>
            <Text style={{ color: '#fff' }}><a href="#services" style={{ color: '#fff' }}>Services</a></Text>
            <Text style={{ color: '#fff' }}><a href="#contact" style={{ color: '#fff' }}>Contact</a></Text>
            <Text style={{ color: '#fff' }}><a href="#faq" style={{ color: '#fff' }}>FAQ</a></Text>
          </Space>
        </Col>

        {/* Social Media */}
        <Col xs={24} sm={12} md={8} lg={6}>
          <Title level={4} style={{ color: '#fff' }}>Follow Us</Title>
          <Space>
            <a href="https://facebook.com" style={{ color: '#fff' }}><FacebookOutlined style={{ fontSize: '24px' }} /></a>
            <a href="https://twitter.com" style={{ color: '#fff' }}><TwitterOutlined style={{ fontSize: '24px' }} /></a>
            <a href="https://linkedin.com" style={{ color: '#fff' }}><LinkedinOutlined style={{ fontSize: '24px' }} /></a>
          </Space>
        </Col>

        {/* Legal Information */}
        <Col xs={24} sm={12} md={8} lg={6}>
          <Title level={4} style={{ color: '#fff' }}>Legal</Title>
          <Space direction="vertical">
            <Text style={{ color: '#fff' }}><a href="#terms" style={{ color: '#fff' }}>Terms of Service</a></Text>
            <Text style={{ color: '#fff' }}><a href="#privacy" style={{ color: '#fff' }}>Privacy Policy</a></Text>
            <Text style={{ color: '#fff' }}><a href="#disclaimer" style={{ color: '#fff' }}>Disclaimer</a></Text>
          </Space>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: '20px' }}>
        <Text style={{ color: '#fff' }}>© 2024 Hospital Name. All Rights Reserved.</Text>
      </Row>
    </Footer>
  );
};

export default HospitalFooter;

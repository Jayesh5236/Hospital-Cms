import React, { useState, useEffect } from "react";
import { Table, Button, Modal, Form, Input, message } from "antd";
import axios from "axios";
import AdminMenu from "../Dashboard/AdminMenu";

const { Item } = Form;

const PatientManagement = () => {
  const [patients, setPatients] = useState([]);
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const response = await axios.get("/api/admin/patients/patient/all");
      setPatients(response.data.patients);
    } catch (error) {
      console.error("Error fetching patients:", error);
    }
  };

  const handleAddPatient = async (values) => {
    try {
      await axios.post("/api/admin/patients/patient/add", values);
      message.success("Patient added successfully");
      setVisible(false);
      form.resetFields();
      fetchPatients();
    } catch (error) {
      console.error("Error adding patient:", error);
      message.error("Failed to add patient");
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Button
          type="primary"
          danger
          onClick={() => handleDeletePatient(record._id)}
        >
          Delete
        </Button>
      ),
    },
  ];

  const handleDeletePatient = async (id) => {
    try {
      await axios.delete(`/api/admin/patients/patient/delete/${id}`);
      message.success("Patient deleted successfully");
      fetchPatients();
    } catch (error) {
      console.error("Error deleting patient:", error);
      message.error("Failed to delete patient");
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-start">
      <AdminMenu />

      <div className="m-4 md:ml-8 flex flex-col w-full">
        <Button
          type="primary"
          onClick={() => setVisible(true)}
          className="mb-4"
        >
          Add Patient
        </Button>
        <Table dataSource={patients} columns={columns} />
      </div>

      <Modal
        title="Add Patient"
        visible={visible}
        onCancel={() => setVisible(false)}
        onOk={() => form.submit()}
      >
        <Form form={form} onFinish={handleAddPatient}>
          <Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please enter the name" }]}
          >
            <Input />
          </Item>
          <Item
            name="age"
            label="Age"
            rules={[{ required: true, message: "Please enter the age" }]}
          >
            <Input type="number" />
          </Item>
          <Item
            name="address"
            label="Address"
            rules={[{ required: true, message: "Please enter the address" }]}
          >
            <Input />
          </Item>
          <Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Item>
        </Form>
      </Modal>
    </div>
  );
};

export default PatientManagement;

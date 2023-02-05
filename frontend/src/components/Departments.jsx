import React from 'react'
import { Divider, Table, Typography, Space, Button, notification } from "antd";
import { useMutation, useQuery, useQueryClient } from 'react-query';
import departmentService from '../services/DepartmentServices';
import AddDepartment from './AddDepartment';
import { useNavigate} from "react-router-dom";
import UpdateDepartment from './UpdateDepartment';

const { Title } = Typography;

const Departments = () => {

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { data } = useQuery("departments", departmentService.getDepartments);

  const { mutateAsync } = useMutation(departmentService.deleteDepartment, {
    onSuccess: () => {
      queryClient.invalidateQueries("departments");
      notification.success({
        message: "Departement Supprimer avec success"
      });
      navigate("/departments");
    }
  })

  const departmentsColumns = [
    {
      title: "Nom",
      dataIndex: "name",
      key:"name"
    },
    {
      title: "Actions",
      dataIndex: "services",
      key: "services",
      render: (_, record) => (
        <Space>
          {/* <UpdateDepartment/> */}
          <Button 
                danger
                value={record._id}
                onClick={(e)=>{ if(window.confirm("êtes-vous sûr de vouloir supprimer ce departement? ")){handleDeleteDepartment(record._id)} }}  
          >
            Supprimer
          </Button>
        </Space>
      )
    }
  ]

  const handleDeleteDepartment = async(departmentId) => {
    await mutateAsync(departmentId);
  }

  return (
    <div>
      <Title level={3}>Departements</Title>
      <AddDepartment/>
      <Divider/>
      <Table bordered size='small' columns={departmentsColumns} dataSource={data}/>
    </div>
  )
}

export default Departments

import { Button, Form, Input, Modal } from 'antd'
import React from 'react'
import { useState } from 'react'
import departmentService from '../services/DepartmentServices';

const UpdateDepartment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {data} = useQuery(['department', id], () => departmentService.updateDepartment(id), {
    cacheTime: 0,
  })

  const showModal = () => {
    setIsModalOpen(true);
  }

  const handleCancel = () => {
    setIsModalOpen(false);
  }

  return (
    <>
      <Button onClick={showModal}>Modifier</Button>
      <Modal
        title="Modifier Departement"
        open={isModalOpen}
        onCancel={handleCancel}
        // onOk={handleForm}
      >
        <Form>
          <Form.Item>
            <Input/>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default UpdateDepartment

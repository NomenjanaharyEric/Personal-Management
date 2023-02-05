import React, { useState } from 'react';
import { Button, Form, Input, Modal, notification } from "antd";
import { useMutation, useQueryClient } from 'react-query';
import departmentService from '../services/DepartmentServices';

const AddDepartment = () => {
    const [name, setName] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();

    const queryClient = useQueryClient();

    const { mutate: createDepartment } = useMutation((department) => departmentService.createDepartment(department), {
        onSuccess:()=> {
            queryClient.invalidateQueries("departments");
            notification.success({
                message: "Nouveau Departement enregistrer",
            });
            setIsModalOpen(false);
        },
        onError:()=> {
            notification.error({
                message: "Une erreur s'est produit lors de création d'un nouveau departement",
                description: "Merci de remplir correctement le formulaire"
            })
        }
    })

    const handleForm = async() => {
        const department = { name };
        createDepartment(department);
        console.log("called");
    }

    const showModal = () => {
        setIsModalOpen(true);
      }
    
      const handleCancel = () => {
        setIsModalOpen(false);
      }

  return (
    <>
    <Button type='primary' onClick={showModal}>Nouveau</Button>
    <Modal 
        title="Nouveau Departement" 
        open={isModalOpen}
        onOk={handleForm}
        onCancel={handleCancel}
        destroyOnClose={true}
    >
        <Form preserve={false} form={form} name="control-ref" onFinish={handleForm}>
            <Form.Item label="Nom" rules={[
                {
                type: "string",
                message: "Valeur invalide"
                },
                {
                required: true,
                message: "Ce champ est obligatoire"
                }
            ]} >
                <Input name='name' value={name} onChange={(e)=> { setName(e.target.value) }}/>
            </Form.Item>
        </Form>
    </Modal> 
    </>
  )
}

export default AddDepartment


import axios from "axios";

const DEPARTMENT_API_URL = process.env.REACT_APP_API_ENDPOINT + `department`;

class DepartmentService {
    
    async getDepartments(){
        const response = await axios.get(DEPARTMENT_API_URL);
        const data = await response.data;
        return data;
    }

    async getDepartment(id){
        const response = await axios.get(`${DEPARTMENT_API_URL}/${id}`);
        const data = await response.data;
        return data;
    }

    updateDepartment(id, department){
        return axios.put(`${DEPARTMENT_API_URL}/${id}`, department,{headers:{'Content-Type':"application/json",'Access-Control-Allow-Origin': '*'}});
    }

    async createDepartment(department){
        return axios.post(DEPARTMENT_API_URL, department, { headers: {'Content-Type':"application/json"}} );
    }

    async deleteDepartment(id){
        return await axios.delete(`${DEPARTMENT_API_URL}/${id}`);
    }

}

const departmentService = new DepartmentService();

export default departmentService;
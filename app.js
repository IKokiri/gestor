const express = require('express')
const app = express()
const userApi = require('./src/User/api');
const personApi = require('./src/Person/api');
const departmentApi = require('./src/Department/api');
const positionApi = require('./src/Position/api');
const contractApi = require('./src/Contract/api');
const proposalApi = require('./src/Proposal/api');
const employeeApi = require('./src/Employee/api');
const hourWorkedContractApi = require('./src/HourWorkedContract/api');
const hourWorkedProposalApi = require('./src/HourWorkedProposal/api');
const hourWorkedDepartmentApi = require('./src/HourWorkedDepartment/api');

var cors = require('cors');

require('dotenv').config()

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('acelerapet', 'root', '', {
    dialect: 'mysql',    
    dialectOptions: {
    }
  })

const port = process.env.PORT

app.use('/',cors(),express.json(),
        userApi,
        personApi,
        departmentApi,
        positionApi,
        contractApi,
        proposalApi,
        employeeApi,
        hourWorkedContractApi,
        hourWorkedProposalApi,
        hourWorkedDepartmentApi
        );

app.listen(port, () => {console.log(port)})
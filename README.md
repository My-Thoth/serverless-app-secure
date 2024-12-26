# Task Management System

This project is a simple task management application that allows users to add, view, and delete tasks. It includes a backend built with AWS Lambda, API Gateway, and DynamoDB, and a frontend built with React.

---

## Features
- Add new tasks with unique IDs.
- View a list of tasks.
- Delete tasks by their unique IDs.
- Scalable and serverless architecture using AWS services.

---

## Table of Contents
1. [Architecture](#architecture)
2. [Technologies Used](#technologies-used)
3. [Setup Instructions](#setup-instructions)
   - [Backend Setup](#backend-setup)
   - [Frontend Setup](#frontend-setup)
4. [Deploying to AWS](#deploying-to-aws)
5. [Usage](#usage)
6. [Contributing](#contributing)
7. [License](#license)

---

## Architecture
The system consists of:
1. Frontend: A React application for interacting with the task management system.
2. Backend: AWS Lambda functions connected to an API Gateway for managing task operations.
3. Database: DynamoDB table to store tasks.
4. Hosting: 
   - Frontend can be hosted on AWS Amplify or S3.
   - Backend APIs are deployed using AWS Lambda.

---

## Technologies Used
- Backend:
  - AWS Lambda
  - DynamoDB
  - API Gateway
  - Python (for Lambda functions)
- Frontend:
  - ReactJS
  - HTML/CSS/JavaScript
- Infrastructure:
  - CloudFormation
  - GitHub

---

## Setup Instructions

### Backend Setup
1. Clone the Repository:
  
   git clone https://github.com/your-repo-name/task-management.git
   cd task-management/backend
   
2. Install Dependencies:
   Inside the lambdas/ folder:
  
   pip install -r requirements.txt -t .
   
3. Upload Lambda Functions to S3:
   - Zip the files for each Lambda function (e.g., `add_task.py`).
   - Upload the .zip files to an S3 bucket.

4. Update CloudFormation Template:
   - Update the cloudformation_template.yaml file to include your S3 bucket name and key for Lambda function code.

5. Deploy CloudFormation Stack:
   Use the AWS CLI to deploy:
  
   aws cloudformation deploy      --template-file templates/cloudformation_template.yaml      --stack-name TaskManagementStack      --capabilities CAPABILITY_NAMED_IAM
   
6. Verify Deployment:
   - Check the API Gateway endpoint in the AWS Console.
   - Ensure the DynamoDB table and Lambda functions are created successfully.

---

### Frontend Setup

1. Navigate to the Frontend Directory:
  
   cd task-management/frontend
   
2. Install Dependencies:
  
   npm install
   
3. Configure API Endpoint:
   - Open src/components/TaskList.js.
   - Replace the placeholder API_BASE_URL with your API Gateway endpoint.

4. Start the Frontend Locally:
  
   npm start
   
5. Build for Production:
   To prepare the frontend for deployment:
  
   npm run build
   
6. Deploy Frontend:
   - Upload the build/ folder to an S3 bucket or deploy using AWS Amplify.

---

## Deploying to AWS
1. Backend:
   - Deploy via CloudFormation using the steps above.
2. Frontend:
   - Use AWS Amplify or host the built files in an S3 bucket with a public URL.

---

## Usage

1. Access the Frontend:
   - Open the frontend URL (local or AWS-hosted).

2. Perform Actions:
   - Add tasks using the "Add Task" form.
   - View tasks in the task list.
   - Delete tasks by clicking the "Delete" button next to each task.

---

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes and push them (`git push origin feature-name`).
4. Open a pull request.

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.

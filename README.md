# **USF-CS686-DevOps-Assignment4**
This repository use docker to containerize the following full-stack CRUD application:  
🔗 [crud-react-node-mySQL-go](https://github.com/Norbert305/crud-react-node-mySQL-go)
---
## **🛠 Prerequisites**
Before running the application, ensure you have the following installed:  
- [Docker](https://www.docker.com/)  
- [Docker Compose](https://docs.docker.com/compose/install/)  
---
## **🚀 Getting Started**
### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/your-repo-path/USF-CS686-DevOps-assignment4.git
cd USF-CS686-DevOps-assignment4
```
### **2️⃣ Start the Application with Docker Compose**
1.	Make sure Docker is running on your system.
2.	In the project directory, execute the following command to build and start the containers:
## 🛑🛑🛑  Do not open Frontend page before the container is running successfylly!!!
The Frontend page will try to get request before the backend is set up and the frontend will crash.
 ```bash
docker compose up
```
or
 ```bash
docker compose up -d --build
```
### **3️⃣ Access the Application**
After the containers are running, you can access the different components of the application:
	•	🌐 Frontend: http://localhost:3000
	•	🔗 Backend API: http://localhost:8800
	•	🗄 MySQL Database: Runs inside the container (default port 3306)
## 🛑 Stopping the Application
To stop and remove the containers, use:
 ```bash
docker compose down
```
